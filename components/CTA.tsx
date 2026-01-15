"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import ChatModal from "./ChatModal";

export default function CTA() {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-5xl rounded-3xl border border-slate-800 bg-[#111827] p-10 text-center shadow-lg shadow-purple-500/10 md:p-14">
        <p className="text-sm font-semibold uppercase text-purple-300">CTA</p>
        <h2 className="mt-3 text-3xl font-semibold md:text-4xl">CHATBOT-Г ТУРШИЖ ҮЗЭЭРЭЙ</h2>
        <p className="mt-4 text-slate-300">
          5 минутанд таны бизнесийн chatbot-г амилуулъя.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <motion.div whileHover={{ scale: 1.04 }} className="pulse-ring">
            <Link
              href="/build"
              className="inline-flex rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/30"
            >
            Туршиж үзэх
            </Link>
          </motion.div>
          <button
            onClick={() => setChatOpen(true)}
            className="rounded-full border border-slate-700 px-8 py-3 text-sm text-slate-200 transition hover:border-purple-400 hover:text-white"
          >
            Үнийн хүсэлт
          </button>
        </div>
        <p className="mt-6 text-xs text-slate-400">
          Хаанбанк · Jamiyansuren · 5249379237
        </p>
      </div>

      <ChatModal open={chatOpen} onClose={() => setChatOpen(false)} />
    </section>
  );
}
