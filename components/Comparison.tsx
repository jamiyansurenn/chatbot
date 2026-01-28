"use client";

import { useState } from "react";

const competitors = ["kdl.mn", "ManyChat", "Chatfuel"];

const rows = [
  { title: "Монгол хэлний NLP", values: [true, false, false] },
  { title: "No-code builder", values: [true, true, true] },
  { title: "Дотоодын төлбөр", values: [true, false, false] },
  { title: "Analytics", values: [true, true, true] },
  { title: "24/7 Support", values: [true, false, false] }
];

export default function Comparison() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase text-rose-500">Comparison</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-900 md:text-4xl">
            kdl.mn vs ManyChat vs Chatfuel
          </h2>
          <p className="mt-3 text-slate-600">Шийдвэр гаргахад хялбар болгоё.</p>
        </div>

        <div className="mt-10 hidden overflow-hidden rounded-2xl border border-slate-200 bg-white md:block">
          <div className="grid grid-cols-4 border-b border-slate-200 bg-slate-50 text-sm font-semibold text-slate-700">
            <div className="px-6 py-4">Feature</div>
            {competitors.map((name) => (
              <div key={name} className="px-6 py-4 text-center">
                {name}
              </div>
            ))}
          </div>
          {rows.map((row) => (
            <div key={row.title} className="grid grid-cols-4 border-b border-slate-100 text-sm">
              <div className="px-6 py-4 text-slate-600">{row.title}</div>
              {row.values.map((value, idx) => (
                <div key={`${row.title}-${idx}`} className="px-6 py-4 text-center text-lg">
                  {value ? "✔️" : "❌"}
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-10 space-y-4 md:hidden">
          {rows.map((row, index) => (
            <div key={row.title} className="rounded-2xl border border-slate-200 bg-white">
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between px-5 py-4 text-left text-sm font-semibold text-slate-700"
              >
                {row.title}
                <span className="text-xs text-slate-400">{openIndex === index ? "Hide" : "Show"}</span>
              </button>
              {openIndex === index && (
                <div className="space-y-3 border-t border-slate-200 px-5 py-4 text-sm">
                  {competitors.map((name, idx) => (
                    <div key={`${row.title}-${name}`} className="flex items-center justify-between">
                      <span className="text-slate-600">{name}</span>
                      {row.values[idx] ? (
                        <span className="inline-flex items-center gap-2 text-emerald-500">
                          ✔️
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-2 text-rose-500">❌</span>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
