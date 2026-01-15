"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const plans = [
  {
    name: "PRO",
    price: "300,000₮",
    description: "Жижиг баг, growth startup-д.",
    features: ["5 bot flow", "Unlimited leads", "Analytics dashboard", "Meta & Web chat"]
  },
  {
    name: "ENTERPRISE",
    price: "900,000₮",
    description: "Том байгууллагад зориулсан.",
    badge: "🔥 Хамгийн их сонгогдсон",
    highlight: true,
    features: [
      "Unlimited flow",
      "Omni-channel",
      "Dedicated success",
      "Private onboarding"
    ]
  },
  {
    name: "VIP",
    price: "Custom",
    description: "Салбар бүрт тусгай шийдэл.",
    features: ["Custom integration", "Advanced AI", "24/7 support", "Security audit"]
  }
];

export default function Pricing() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase text-purple-300">Pricing</p>
          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">Үнийн багцууд</h2>
          <p className="mt-3 text-slate-300">Монгол зах зээлд тохируулсан.</p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              whileHover={{ scale: 1.06 }}
              className={`relative rounded-2xl border p-8 shadow-lg transition ${
                plan.highlight
                  ? "border-purple-500/50 bg-[#131a2a] shadow-purple-500/30"
                  : "border-slate-800 bg-[#111827] shadow-purple-500/10 hover:shadow-purple-500/30"
              }`}
            >
              {plan.badge && (
                <span className="absolute right-6 top-6 rounded-full bg-purple-500/20 px-3 py-1 text-xs font-semibold text-purple-200">
                  {plan.badge}
                </span>
              )}
              <h3 className="text-lg font-semibold">{plan.name}</h3>
              <p className="mt-2 text-3xl font-semibold">{plan.price}</p>
              <p className="mt-2 text-sm text-slate-300">{plan.description}</p>
              <ul className="mt-6 space-y-3 text-sm text-slate-200">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <CheckCircle2 className="text-cyan-300" size={16} />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="mt-8 w-full rounded-full border border-slate-700 py-3 text-sm font-semibold transition hover:border-purple-400 hover:text-white">
                Хүсэлт илгээх
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
