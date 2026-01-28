"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

type AuthUser = {
  id: string;
  name: string;
  email: string;
};

type BotItem = {
  id: string;
  name: string;
  description?: string;
  channel?: string;
  flow?: Record<string, unknown> | null;
  trigger?: Record<string, unknown> | null;
  createdAt: string;
};

export default function BotsPage() {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [bots, setBots] = useState<BotItem[]>([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [channel, setChannel] = useState("Web");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [flowJson, setFlowJson] = useState("");
  const [triggerJson, setTriggerJson] = useState("");
  const [editId, setEditId] = useState<string | null>(null);
  const [editName, setEditName] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [editChannel, setEditChannel] = useState("Web");
  const [editFlowJson, setEditFlowJson] = useState("");
  const [editTriggerJson, setEditTriggerJson] = useState("");

  const total = useMemo(() => bots.length, [bots.length]);

  useEffect(() => {
    const loadSession = async () => {
      const response = await fetch("/api/auth/session");
      const data = (await response.json()) as { user?: AuthUser | null };
      if (!data.user) {
        const demoResponse = await fetch("/api/auth/demo", { method: "POST" });
        const demoData = (await demoResponse.json()) as { user?: AuthUser | null };
        setUser(demoData.user || null);
        return;
      }
      setUser(data.user || null);
    };
    loadSession();
  }, []);

  useEffect(() => {
    if (!user) return;
    const loadBots = async () => {
      const response = await fetch(`/api/bots`);
      const data = (await response.json()) as { bots?: BotItem[] };
      setBots(data.bots || []);
    };
    loadBots();
  }, [user]);

  const createBot = async () => {
    if (!user || !name.trim()) {
      setMessage("Ботын нэр оруулна уу.");
      return;
    }
    setLoading(true);
    setMessage(null);
    try {
      const response = await fetch("/api/bots", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          description,
          channel,
          flowJson,
          triggerJson
        })
      });
      const data = (await response.json()) as { bot?: BotItem; error?: string };
      if (!response.ok || !data.bot) {
        throw new Error(data.error || "Алдаа гарлаа.");
      }
      setBots((prev) => [data.bot!, ...prev]);
      setName("");
      setDescription("");
      setChannel("Web");
      setFlowJson("");
      setTriggerJson("");
      setMessage("Бот амжилттай үүслээ.");
    } catch (error) {
      const fallback = error instanceof Error ? error.message : "Алдаа гарлаа.";
      setMessage(fallback);
    } finally {
      setLoading(false);
    }
  };

  const startEdit = (bot: BotItem) => {
    setEditId(bot.id);
    setEditName(bot.name);
    setEditDescription(bot.description || "");
    setEditChannel(bot.channel || "Web");
    setEditFlowJson(bot.flow ? JSON.stringify(bot.flow, null, 2) : "");
    setEditTriggerJson(bot.trigger ? JSON.stringify(bot.trigger, null, 2) : "");
  };

  const cancelEdit = () => {
    setEditId(null);
    setEditName("");
    setEditDescription("");
    setEditChannel("Web");
    setEditFlowJson("");
    setEditTriggerJson("");
  };

  const saveEdit = async (botId: string) => {
    setLoading(true);
    setMessage(null);
    try {
      const response = await fetch(`/api/bots/${botId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: editName,
          description: editDescription,
          channel: editChannel,
          flowJson: editFlowJson,
          triggerJson: editTriggerJson
        })
      });
      const data = (await response.json()) as { bot?: BotItem; error?: string };
      if (!response.ok || !data.bot) {
        throw new Error(data.error || "Алдаа гарлаа.");
      }
      setBots((prev) => prev.map((item) => (item.id === botId ? data.bot! : item)));
      setMessage("Шинэчлэгдлээ.");
      cancelEdit();
    } catch (error) {
      const fallback = error instanceof Error ? error.message : "Алдаа гарлаа.";
      setMessage(fallback);
    } finally {
      setLoading(false);
    }
  };

  const deleteBot = async (botId: string) => {
    setLoading(true);
    setMessage(null);
    try {
      const response = await fetch(`/api/bots/${botId}`, { method: "DELETE" });
      const data = (await response.json()) as { error?: string };
      if (!response.ok) {
        throw new Error(data.error || "Алдаа гарлаа.");
      }
      setBots((prev) => prev.filter((item) => item.id !== botId));
      setMessage("Устгагдлаа.");
    } catch (error) {
      const fallback = error instanceof Error ? error.message : "Алдаа гарлаа.";
      setMessage(fallback);
    } finally {
      setLoading(false);
    }
  };

  if (!user) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-slate-900">Нэвтрэх шаардлагатай</h2>
        <p className="mt-2 text-sm text-slate-600">
          Бот үүсгэхийн тулд эхлээд нэвтэрнэ үү.
        </p>
        <Link
          href="/chat"
          className="mt-4 inline-flex rounded-full bg-rose-500 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-rose-600"
        >
          Нэвтрэх хуудас
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold">Миний бот</h2>
        <p className="text-sm text-slate-500">Нийт: {total}</p>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="text-base font-semibold text-slate-900">Шинэ бот үүсгэх</h3>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="md:col-span-2">
            <label className="text-sm font-semibold text-slate-700">Ботын нэр</label>
            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Жишээ: Борлуулалтын бот"
              className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 placeholder:text-slate-400 focus:border-rose-400 focus:outline-none"
            />
          </div>
          <div>
            <label className="text-sm font-semibold text-slate-700">Суваг</label>
            <select
              value={channel}
              onChange={(event) => setChannel(event.target.value)}
              className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 focus:border-rose-400 focus:outline-none"
            >
              <option>Web</option>
              <option>Facebook</option>
              <option>Instagram</option>
              <option>Telegram</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-semibold text-slate-700">Тайлбар</label>
            <input
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              placeholder="Товч тайлбар"
              className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 placeholder:text-slate-400 focus:border-rose-400 focus:outline-none"
            />
          </div>
          <div className="md:col-span-2">
            <label className="text-sm font-semibold text-slate-700">Flow JSON</label>
            <textarea
              value={flowJson}
              onChange={(event) => setFlowJson(event.target.value)}
              placeholder='{"nodes":[]}'
              className="mt-2 min-h-[120px] w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 placeholder:text-slate-400 focus:border-rose-400 focus:outline-none"
            />
          </div>
          <div className="md:col-span-2">
            <label className="text-sm font-semibold text-slate-700">Trigger JSON</label>
            <textarea
              value={triggerJson}
              onChange={(event) => setTriggerJson(event.target.value)}
              placeholder='{"event":"message"}'
              className="mt-2 min-h-[120px] w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 placeholder:text-slate-400 focus:border-rose-400 focus:outline-none"
            />
          </div>
        </div>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
          <button
            onClick={createBot}
            disabled={loading}
            className="rounded-full bg-rose-500 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-rose-600 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading ? "Үүсгэж байна..." : "Бот үүсгэх"}
          </button>
          {message && <p className="text-sm text-slate-500">{message}</p>}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {bots.map((bot) => (
          <div
            key={bot.id}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            {editId === bot.id ? (
              <div className="space-y-3">
                <input
                  value={editName}
                  onChange={(event) => setEditName(event.target.value)}
                  className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm"
                />
                <input
                  value={editDescription}
                  onChange={(event) => setEditDescription(event.target.value)}
                  className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm"
                />
                <select
                  value={editChannel}
                  onChange={(event) => setEditChannel(event.target.value)}
                  className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm"
                >
                  <option>Web</option>
                  <option>Facebook</option>
                  <option>Instagram</option>
                  <option>Telegram</option>
                </select>
                <textarea
                  value={editFlowJson}
                  onChange={(event) => setEditFlowJson(event.target.value)}
                  className="min-h-[90px] w-full rounded-xl border border-slate-200 px-3 py-2 text-sm"
                />
                <textarea
                  value={editTriggerJson}
                  onChange={(event) => setEditTriggerJson(event.target.value)}
                  className="min-h-[90px] w-full rounded-xl border border-slate-200 px-3 py-2 text-sm"
                />
                <div className="flex gap-2">
                  <button
                    onClick={() => saveEdit(bot.id)}
                    className="rounded-full bg-rose-500 px-4 py-2 text-xs font-semibold text-white"
                  >
                    Хадгалах
                  </button>
                  <button
                    onClick={cancelEdit}
                    className="rounded-full border border-slate-200 px-4 py-2 text-xs text-slate-600"
                  >
                    Болих
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-start gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-sm font-semibold text-slate-500">
                  {bot.name.slice(0, 2).toUpperCase()}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-900">{bot.name}</h3>
                  <p className="mt-1 text-xs text-slate-500">{bot.description || "—"}</p>
                </div>
                <span className="rounded-full bg-rose-500 px-3 py-1 text-xs font-semibold text-white">
                  {bot.channel || "Web"}
                </span>
                <div className="flex gap-2">
                  <button
                    onClick={() => startEdit(bot)}
                    className="rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-600"
                  >
                    Засах
                  </button>
                  <button
                    onClick={() => deleteBot(bot.id)}
                    className="rounded-full border border-rose-200 px-3 py-1 text-xs text-rose-600"
                  >
                    Устгах
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
