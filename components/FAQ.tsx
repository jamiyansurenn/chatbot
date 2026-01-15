"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Backend хэрэгтэй юу?",
    answer: "Үгүй. Энэ бол зөвхөн front demo бөгөөд Vercel-д 1 click deploy."
  },
  {
    question: "Pricing өөрчилж болох уу?",
    answer: "Тийм. Үнэ, badge, feature жагсаалтыг шууд edit хийж болно."
  },
  {
    question: "ManyChat-тэй адил feature хийх боломжтой юу?",
    answer: "Тийм. Flow builder, broadcast, analytics зэрэгийг нэмээд өсгөнө."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase text-purple-300">FAQ</p>
          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">Түгээмэл асуултууд</h2>
        </div>
        <div className="mt-10 space-y-4">
          {faqs.map((item, index) => (
            <div key={item.question} className="rounded-2xl border border-slate-800 bg-[#111827]">
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between px-6 py-4 text-left text-sm font-semibold"
              >
                {item.question}
                <ChevronDown
                  size={18}
                  className={`transition ${openIndex === index ? "rotate-180 text-purple-300" : "text-slate-400"}`}
                />
              </button>
              {openIndex === index && (
                <div className="border-t border-slate-800 px-6 py-4 text-sm text-slate-300">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
