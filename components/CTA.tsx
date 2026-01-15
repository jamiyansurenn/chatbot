"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function CTA() {
  const [open, setOpen] = useState(false);

  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-5xl rounded-3xl border border-slate-800 bg-[#111827] p-10 text-center shadow-lg shadow-purple-500/10 md:p-14">
        <p className="text-sm font-semibold uppercase text-purple-300">CTA</p>
        <h2 className="mt-3 text-3xl font-semibold md:text-4xl">CHATBOT-Г ТУРШИЖ ҮЗЭЭРЭЙ</h2>
        <p className="mt-4 text-slate-300">
          5 минутанд таны бизнесийн chatbot-г амилуулъя.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <motion.button
            whileHover={{ scale: 1.04 }}
            className="pulse-ring rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/30"
            onClick={() => setOpen(true)}
          >
            Туршиж үзэх
          </motion.button>
          <button className="rounded-full border border-slate-700 px-8 py-3 text-sm text-slate-200 transition hover:border-purple-400 hover:text-white">
            Үнийн хүсэлт
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 10, opacity: 0 }}
              className="w-full max-w-lg rounded-2xl border border-slate-800 bg-[#111827] p-6 shadow-glow"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Login / Register</h3>
                <button
                  aria-label="Close modal"
                  onClick={() => setOpen(false)}
                  className="rounded-full p-2 text-slate-400 transition hover:text-white"
                >
                  <X size={18} />
                </button>
              </div>
              <p className="mt-2 text-sm text-slate-300">
                Dummy form – backend байхгүй.
              </p>
              <form className="mt-6 space-y-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-xl border border-slate-700 bg-[#0f1422] px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-purple-400 focus:outline-none"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full rounded-xl border border-slate-700 bg-[#0f1422] px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-purple-400 focus:outline-none"
                />
                <button
                  type="button"
                  className="w-full rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-white"
                >
                  Continue
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
