"use client";

import { useState } from "react";

const defaultBlocks = [
  "Угтах зурвас",
  "Холбоо барих",
  "Хаяг байршил",
  "Булэг 1",
  "Вэбформ"
];

export default function FlowsPage() {
  const [blocks, setBlocks] = useState(defaultBlocks);
  const [activeBlock, setActiveBlock] = useState(defaultBlocks[0]);
  const [notice, setNotice] = useState<string | null>(null);

  const addBlock = () => {
    const nextName = `Шинэ блок ${blocks.length + 1}`;
    setBlocks((prev) => [...prev, nextName]);
    setActiveBlock(nextName);
    setNotice("Шинэ блок нэмэгдлээ.");
  };

  const addButton = () => {
    setNotice("Шинэ товч нэмэгдлээ.");
  };

  const saveFlow = () => {
    setNotice("Хадгаллаа.");
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
      <aside className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-semibold">Мессеж блок</h2>
          <button
            onClick={addBlock}
            className="rounded-full bg-rose-500 px-3 py-1 text-xs font-semibold text-white"
          >
            +
          </button>
        </div>
        <input
          placeholder="Хайх"
          className="mt-4 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 placeholder:text-slate-400"
        />
        <div className="mt-4 space-y-2 text-sm text-slate-600">
          {blocks.map((block) => (
            <div
              key={block}
              onClick={() => setActiveBlock(block)}
              className={`cursor-pointer rounded-lg border px-3 py-2 ${
                block === activeBlock
                  ? "border-rose-300 bg-rose-50 text-rose-600"
                  : "border-slate-200 bg-slate-50 text-slate-600"
              }`}
            >
              {block}
            </div>
          ))}
        </div>
      </aside>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-semibold">{activeBlock}</h2>
          <button
            onClick={saveFlow}
            className="rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-600"
          >
            Save
          </button>
        </div>
        {notice && (
          <p className="mt-2 text-xs text-slate-500">{notice}</p>
        )}
        <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_320px]">
          <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-6 text-sm text-slate-400">
            Flow canvas энд харагдана.
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm">
              <p className="text-slate-600">
                Сайн байна уу! kdl.mn-ийн автомат хариулт байна. Танд юугаар туслах
                вэ?
              </p>
              <button
                onClick={addButton}
                className="mt-4 w-full rounded-full border border-slate-200 py-2 text-xs text-slate-600"
              >
                + Шинэ товч
              </button>
            </div>
            <div className="mt-4 space-y-2 text-xs text-slate-600">
              <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">
                Танилцуулга
                <span className="text-slate-400">Булэг 1</span>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">
                Өргөний сонголтууд
                <span className="text-slate-400">Булэг 1</span>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">
                ✅ Зээлийн нөхцөл
                <span className="text-slate-400">Булэг 1</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
