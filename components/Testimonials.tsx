"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Б. Батзаяа",
    role: "E-commerce founder",
    quote: "7 хоногийн дотор chatbot-ын conversion 2 дахин өссөн."
  },
  {
    name: "Н. Намуун",
    role: "Marketing lead",
    quote: "ManyChat-аас илүү ойлгомжтой, монгол хэл дээр бүрэн."
  },
  {
    name: "А. Алтан",
    role: "Fintech COO",
    quote: "Enterprise support хурдан, SLA яг цагтаа."
  }
];

export default function Testimonials() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase text-purple-300">Testimonials</p>
          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">Хэрэглэгчдийн үнэлгээ</h2>
          <p className="mt-3 text-slate-300">Бодит хэрэглэгчдийн бодит үр дүн.</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <motion.div
              key={item.name}
              whileHover={{ y: -6 }}
              className="rounded-2xl border border-slate-800 bg-[#111827] p-6 shadow-lg shadow-purple-500/10 hover:shadow-purple-500/30"
            >
              <div className="flex items-center gap-1 text-amber-300">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="mt-4 text-sm text-slate-200">"{item.quote}"</p>
              <div className="mt-6">
                <p className="text-sm font-semibold">{item.name}</p>
                <p className="text-xs text-slate-400">{item.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
