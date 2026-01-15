"use client";

import { useMemo, useState } from "react";
import { Send } from "lucide-react";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

const starterMessages: ChatMessage[] = [
  {
    role: "assistant",
    content:
      "Сайн байна уу! Би таны chatbot туслах. Бизнесийнхээ талаар товч хэлээд, ямар зорилгоор chatbot хэрэгтэйг бичээрэй."
  }
];

export default function ChatPage() {
  const [messages, setMessages] = useState<ChatMessage[]>(starterMessages);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const canSend = useMemo(() => input.trim().length > 0 && !loading, [input, loading]);

  const sendMessage = async () => {
    if (!canSend) return;
    const nextMessages = [...messages, { role: "user", content: input.trim() }];
    setMessages(nextMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages })
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data?.error || "Алдаа гарлаа.");
      }
      setMessages([...nextMessages, { role: "assistant", content: data.reply }]);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Алдаа гарлаа.";
      setMessages([
        ...nextMessages,
        { role: "assistant", content: `⚠️ ${message}` }
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="px-6 py-20">
      <div className="mx-auto flex max-w-4xl flex-col gap-6">
        <div>
          <p className="text-sm font-semibold uppercase text-purple-300">Live chat</p>
          <h1 className="mt-3 text-3xl font-semibold md:text-4xl">
            ChatGPT-powered demo
          </h1>
          <p className="mt-3 text-slate-300">
            Энэ хэсэг жинхэнэ GPT API-тай холбогдоно. API key нэмсэн үед ажиллана.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-800 bg-[#111827] p-6 shadow-lg shadow-purple-500/10">
          <div className="space-y-4">
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                  message.role === "user"
                    ? "ml-auto bg-purple-500/20 text-slate-100"
                    : "bg-[#0f1422] text-slate-200"
                }`}
              >
                {message.content}
              </div>
            ))}
            {loading && (
              <div className="rounded-2xl bg-[#0f1422] px-4 py-3 text-sm text-slate-400">
                Бичиж байна...
              </div>
            )}
          </div>

          <div className="mt-6 flex gap-3">
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Мессежээ бичээрэй..."
              className="flex-1 rounded-full border border-slate-700 bg-[#0f1422] px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-purple-400 focus:outline-none"
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  event.preventDefault();
                  sendMessage();
                }
              }}
            />
            <button
              type="button"
              onClick={sendMessage}
              disabled={!canSend}
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 px-5 text-sm font-semibold text-white shadow-lg shadow-purple-500/20 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
