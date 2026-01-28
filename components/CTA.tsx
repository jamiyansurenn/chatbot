"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import ChatModal from "./ChatModal";

export default function CTA() {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <section id="cta" className="px-6 py-20">
      <div className="mx-auto max-w-5xl rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm md:p-14">
        <p className="text-sm font-semibold uppercase text-rose-500">CTA</p>
        <h2 className="mt-3 text-3xl font-semibold text-slate-900 md:text-4xl">
          CHATBOT-Г ТУРШИЖ ҮЗЭЭРЭЙ
        </h2>
        <p className="mt-4 text-slate-600">
          5 минутанд таны бизнесийн chatbot-г амилуулъя.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <motion.div whileHover={{ scale: 1.04 }} className="pulse-ring">
            <Link
              href="/build"
              className="inline-flex rounded-full bg-rose-500 px-8 py-3 text-sm font-semibold text-white shadow-md hover:bg-rose-600"
            >
              Туршиж үзэх
            </Link>
          </motion.div>
          <button
            onClick={() => setChatOpen(true)}
            className="rounded-full border border-slate-300 px-8 py-3 text-sm text-slate-700 transition hover:border-slate-400"
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
