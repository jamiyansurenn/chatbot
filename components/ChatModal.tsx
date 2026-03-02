"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

const STATIC_EMAIL = "demo@chatbot.mn";
const STATIC_PASSWORD = "demo1234";

type ChatModalProps = {
  open: boolean;
  onClose: () => void;
  planName?: string;
};

export default function ChatModal({ open, onClose, planName }: ChatModalProps) {
  const [showForm, setShowForm] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (email === STATIC_EMAIL && password === STATIC_PASSWORD) {
      onClose();
      setShowForm(false);
      setEmail("");
      setPassword("");
      router.push("/dashboard");
    } else {
      setError("Имэйл эсвэл нууц үг буруу байна. (demo@chatbot.mn / demo1234)");
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 10, opacity: 0 }}
            className="w-full max-w-xl rounded-2xl border border-slate-200 bg-white p-6 shadow-xl"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-slate-900">Автомат чат туслах</h3>
              <button
                aria-label="Close modal"
                onClick={() => {
                  setShowForm(false);
                  onClose();
                }}
                className="rounded-full p-2 text-slate-400 transition hover:text-slate-700"
              >
                <X size={18} />
              </button>
            </div>

            <div className="mt-5 space-y-4 text-sm">
              <div className="rounded-2xl bg-slate-50 p-4 text-slate-700">
                Сайн байна уу! Би kdl.mn-ийн автомат туслах. Таны хүсэлтийг
                хурдан бүртгэж өгье.
              </div>
              <div className="ml-auto w-fit rounded-2xl bg-rose-500/10 p-4 text-slate-700">
                {planName ? `${planName} багц сонирхож байна.` : "Үнийн хүсэлт явуулъя."}
              </div>
              <div className="rounded-2xl bg-slate-50 p-4 text-slate-700">
                Дараагийн алхамд таны дансны мэдээлэл хэрэгтэй. Доорх хэсгийг
                бөглөнө үү.
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4 text-slate-600">
                Төлбөрийн мэдээлэл: <span className="text-slate-900">Хаанбанк</span>{" "}
                · <span className="text-slate-900">Jamiyansuren</span> ·{" "}
                <span className="text-slate-900">5249379237</span>
              </div>
            </div>

            {!showForm ? (
              <button
                type="button"
                onClick={() => setShowForm(true)}
                className="mt-6 w-full rounded-full bg-rose-500 px-6 py-3 text-sm font-semibold text-white hover:bg-rose-600"
              >
                Дараагийн алхам
              </button>
            ) : (
              <form onSubmit={handleLogin} className="mt-6 space-y-4">
                <input
                  type="email"
                  placeholder="Имэйл хаяг"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 placeholder:text-slate-400 focus:border-rose-400 focus:outline-none"
                />
                <input
                  type="password"
                  placeholder="Нууц үг"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 placeholder:text-slate-400 focus:border-rose-400 focus:outline-none"
                />
                {error && (
                  <p className="text-xs text-rose-600">{error}</p>
                )}
                <p className="text-xs text-slate-500">
                  Демо: <code className="rounded bg-slate-100 px-1">demo@chatbot.mn</code> / <code className="rounded bg-slate-100 px-1">demo1234</code>
                </p>
                <button
                  type="submit"
                  className="w-full rounded-full bg-rose-500 px-6 py-3 text-sm font-semibold text-white hover:bg-rose-600"
                >
                  Нэвтрэх / Бүртгүүлэх
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
