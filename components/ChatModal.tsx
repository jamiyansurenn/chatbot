"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

type ChatModalProps = {
  open: boolean;
  onClose: () => void;
  planName?: string;
};

export default function ChatModal({ open, onClose, planName }: ChatModalProps) {
  const [showForm, setShowForm] = useState(false);

  return (
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
            className="w-full max-w-xl rounded-2xl border border-slate-800 bg-[#111827] p-6 shadow-glow"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Автомат чат туслах</h3>
              <button
                aria-label="Close modal"
                onClick={() => {
                  setShowForm(false);
                  onClose();
                }}
                className="rounded-full p-2 text-slate-400 transition hover:text-white"
              >
                <X size={18} />
              </button>
            </div>

            <div className="mt-5 space-y-4 text-sm">
              <div className="rounded-2xl bg-[#0f1422] p-4 text-slate-200">
                Сайн байна уу! Би Chatflow-ийн автомат туслах. Таны хүсэлтийг хурдан
                бүртгэж өгье.
              </div>
              <div className="ml-auto w-fit rounded-2xl bg-purple-500/20 p-4 text-slate-100">
                {planName ? `${planName} багц сонирхож байна.` : "Үнийн хүсэлт явуулъя."}
              </div>
              <div className="rounded-2xl bg-[#0f1422] p-4 text-slate-200">
                Дараагийн алхамд таны дансны мэдээлэл хэрэгтэй. Доорх хэсгийг
                бөглөнө үү.
              </div>
              <div className="rounded-2xl border border-slate-800 bg-[#0f1422] p-4 text-slate-300">
                Төлбөрийн мэдээлэл: <span className="text-white">Хаанбанк</span> ·{" "}
                <span className="text-white">Jamiyansuren</span> ·{" "}
                <span className="text-white">5249379237</span>
              </div>
            </div>

            {!showForm ? (
              <button
                type="button"
                onClick={() => setShowForm(true)}
                className="mt-6 w-full rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-white"
              >
                Дараагийн алхам
              </button>
            ) : (
              <form className="mt-6 space-y-4">
                <input
                  type="email"
                  placeholder="Имэйл хаяг"
                  className="w-full rounded-xl border border-slate-700 bg-[#0f1422] px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-purple-400 focus:outline-none"
                />
                <input
                  type="password"
                  placeholder="Нууц үг"
                  className="w-full rounded-xl border border-slate-700 bg-[#0f1422] px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-purple-400 focus:outline-none"
                />
                <button
                  type="button"
                  className="w-full rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-white"
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
