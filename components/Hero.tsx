"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-28">
      <div className="mx-auto flex max-w-6xl flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm text-purple-200"
        >
          <Sparkles size={16} />
          Монгол хэл дээрх автоматжуулалт
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-8 text-4xl font-semibold leading-tight md:text-6xl"
        >
          ManyChat-тай өрсөлдөх,
          <span className="block bg-gradient-to-r from-purple-400 via-cyan-300 to-purple-500 bg-clip-text text-transparent">
            Chatbot.mn шиг UX-тэй SaaS платформ
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 max-w-2xl text-lg text-slate-300"
        >
          Бизнес бүрт тохирсон chatbot, автомат хариулагч, lead capture, campaign-ийг
          нэг дор. Backend шаардлагагүй, 1 click deploy-ready.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <button className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/30 transition hover:scale-[1.03]">
            Туршиж үзэх
            <ArrowRight size={16} />
          </button>
          <button className="rounded-full border border-slate-700 px-6 py-3 text-sm text-slate-200 transition hover:border-purple-400 hover:text-white">
            Демо харах
          </button>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-24 h-64 w-64 -translate-x-1/2 rounded-full bg-purple-500/20 blur-[120px]" />
        <div className="absolute right-10 top-32 h-64 w-64 rounded-full bg-cyan-400/20 blur-[120px]" />
      </div>
    </section>
  );
}
