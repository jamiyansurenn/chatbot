"use client";

import { motion } from "framer-motion";
import { Bot, ShieldCheck, Zap, LayoutDashboard, MessageCircle, Sparkles } from "lucide-react";

const features = [
  {
    title: "AI хариулагч",
    description: "Харилцагч бүрт 24/7 шууд хариулаж, борлуулалтыг алдахгүй.",
    icon: Bot
  },
  {
    title: "No-code builder",
    description: "Flow builder ашиглаад 5 минутанд chatbot-г бүтээнэ.",
    icon: LayoutDashboard
  },
  {
    title: "Campaign boost",
    description: "Broadcast болон сегментчилэлтэй мессеж илгээ.",
    icon: Zap
  },
  {
    title: "CRM Ready",
    description: "Лийд, tag, pipeline бүгд нэг дор хадгалагдана.",
    icon: MessageCircle
  },
  {
    title: "Security first",
    description: "Data encryption, log, backup бүгд enterprise түвшинд.",
    icon: ShieldCheck
  },
  {
    title: "Premium motion",
    description: "Hover animation, micro interaction-ууд premium мэдрэмж өгнө.",
    icon: Sparkles
  }
];

export default function Features() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 text-center">
          <p className="text-sm font-semibold uppercase text-purple-300">Features</p>
          <h2 className="text-3xl font-semibold md:text-4xl">Онцлогууд</h2>
          <p className="text-slate-300">
            Chatbot.mn-тэй адил UX, ManyChat шиг scale хийх боломж.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                whileHover={{ scale: 1.03, y: -4 }}
                transition={{ type: "spring", stiffness: 200, damping: 18 }}
                className="rounded-2xl border border-slate-800 bg-[#111827] p-6 shadow-lg shadow-purple-500/10 hover:shadow-purple-500/30"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/15 text-purple-200">
                  <Icon size={24} />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{feature.description}</p>
                <p className="mt-4 text-xs text-slate-500">#{index + 1}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
