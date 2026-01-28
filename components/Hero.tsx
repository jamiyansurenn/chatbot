"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Үйлчилгээ", href: "#features" },
  { label: "Үнэ", href: "#pricing" },
  { label: "Боломж", href: "#cta" }
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white px-6 pb-20 pt-6">
      <header className="mx-auto flex max-w-6xl items-center justify-between gap-6">
        <div className="flex items-center gap-2 text-lg font-semibold text-slate-900">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-rose-500 text-sm font-semibold text-white">
            CB
          </span>
          kdl.mn
        </div>
        <nav className="hidden items-center gap-8 text-sm text-slate-600 md:flex">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href} className="hover:text-slate-900">
              {link.label}
            </Link>
          ))}
          <button className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900">
            MN <ChevronDown size={14} />
          </button>
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/build"
            className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:border-slate-400"
          >
            Нэвтрэх
          </Link>
          <Link
            href="/build"
            className="rounded-full bg-rose-500 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-rose-600"
          >
            Бүртгүүлэх
          </Link>
        </div>
      </header>

      <div className="mx-auto mt-14 grid max-w-6xl items-center gap-12 lg:grid-cols-[1fr_1.2fr_1fr]">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center"
        >
          <div className="relative h-[340px] w-[260px] overflow-hidden rounded-[48px] bg-slate-100 shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80"
              alt="Happy customer"
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>

        <div className="text-center lg:text-left">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Таны бизнесийн төлөөл
          </p>
          <h1 className="mt-4 text-3xl font-bold leading-tight text-slate-900 md:text-5xl">
            Харилцагчаа
            <span className="block text-rose-500">хэрэглэгч болго</span>
          </h1>
          <p className="mt-5 text-base text-slate-600 md:text-lg">
            Хүн бүрт зориулсан виртуал туслах. Монгол хэл дээрх автомат хариулагч,
            chatbot шийдэл.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <Link
              href="/build"
              className="inline-flex items-center gap-2 rounded-full bg-rose-500 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-rose-600"
            >
              Танилцуулга татах
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/chat"
              className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 hover:border-slate-400"
            >
              Demo үзэх
            </Link>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative flex items-center justify-center"
        >
          <div className="relative h-[360px] w-[200px] overflow-hidden rounded-[36px] border border-slate-200 bg-white shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80"
              alt="Chatbot app preview"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -left-4 top-20 max-w-[140px] rounded-xl bg-white p-3 text-xs text-slate-600 shadow-lg">
            Сайн байна уу, kdl.mn танд тусалж байна.
          </div>
          <div className="absolute -right-6 bottom-20 max-w-[150px] rounded-xl bg-rose-500 p-3 text-xs text-white shadow-lg">
            Чатбот гэж юу вэ?
          </div>
        </motion.div>
      </div>
    </section>
  );
}
