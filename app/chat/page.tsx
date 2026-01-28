"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type AuthUser = {
  id: string;
  name: string;
  email: string;
};

export default function ChatPage() {
  const router = useRouter();
  const [mode, setMode] = useState<"login" | "register">("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState<AuthUser | null>(null);

  useEffect(() => {
    const loadSession = async () => {
      const response = await fetch("/api/auth/session");
      const data = (await response.json()) as { user?: AuthUser | null };
      setCurrentUser(data.user || null);
    };
    loadSession();
  }, []);

  const submit = async () => {
    setMessage(null);
    setLoading(true);

    try {
      const endpoint = mode === "login" ? "/api/auth/login" : "/api/auth/register";
      const payload =
        mode === "login"
          ? { email, password }
          : { name: name.trim(), email, password };

      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      const data = (await response.json()) as { user?: AuthUser; error?: string };

      if (!response.ok || !data.user) {
        throw new Error(data.error || "Алдаа гарлаа.");
      }

      setCurrentUser(data.user);
      setMessage("Амжилттай.");
    } catch (error) {
      const fallback = error instanceof Error ? error.message : "Алдаа гарлаа.";
      setMessage(fallback);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    fetch("/api/auth/logout", { method: "POST" }).finally(() => {
      setCurrentUser(null);
    });
  };

  return (
    <main className="bg-white px-6 py-20">
      <div className="mx-auto flex max-w-3xl flex-col gap-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-500">
            Demo
          </p>
          <h1 className="mt-4 text-3xl font-semibold text-slate-900 md:text-4xl">
            kdl.mn — {mode === "login" ? "Нэвтрэх" : "Бүртгүүлэх"}
          </h1>
          <p className="mt-3 text-slate-600">
            Demo-ыг хэрэглэгчийн нэвтрэх хэлбэрээр үзүүлнэ.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          {currentUser ? (
            <div className="space-y-4 text-sm text-slate-600">
              <div>
                <p className="text-slate-500">Тавтай морилно уу</p>
                <p className="mt-1 text-lg font-semibold text-slate-900">
                  {currentUser.name}
                </p>
                <p className="text-slate-500">{currentUser.email}</p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <button
                  onClick={() => router.push("/dashboard/bots")}
                  className="rounded-full bg-rose-500 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-rose-600"
                >
                  Бот үүсгэх
                </button>
                <button
                  onClick={logout}
                  className="rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-600 hover:border-slate-300"
                >
                  Гарах
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-5">
              {mode === "register" && (
                <div>
                  <label className="text-sm font-semibold text-slate-700">Нэр</label>
                  <input
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    type="text"
                    placeholder="Таны нэр"
                    className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 placeholder:text-slate-400 focus:border-rose-400 focus:outline-none"
                  />
                </div>
              )}
              <div>
                <label className="text-sm font-semibold text-slate-700">Имэйл</label>
                <input
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  type="email"
                  placeholder="name@kdl.mn"
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 placeholder:text-slate-400 focus:border-rose-400 focus:outline-none"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-slate-700">Нууц үг</label>
                <input
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  type="password"
                  placeholder="********"
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 placeholder:text-slate-400 focus:border-rose-400 focus:outline-none"
                />
              </div>
              <button
                onClick={submit}
                disabled={loading}
                className="w-full rounded-full bg-rose-500 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-rose-600 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? "Түр хүлээнэ үү..." : mode === "login" ? "Нэвтрэх" : "Бүртгүүлэх"}
              </button>
              <button
                onClick={() => setMode(mode === "login" ? "register" : "login")}
                className="w-full rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-600 hover:border-slate-300"
              >
                {mode === "login" ? "Бүртгүүлэх" : "Нэвтрэх"}
              </button>
              {message && <p className="text-center text-xs text-slate-500">{message}</p>}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
