const stats = [
  { label: "Идэвхтэй бот", value: "12" },
  { label: "Шинэ lead", value: "328" },
  { label: "Хариулт rate", value: "92%" },
  { label: "Сүүлийн 7 хоног", value: "+18%" }
];

const activities = [
  "Нийт 24 урсгал идэвхтэй ажиллаж байна.",
  "Өнөөдөр 53 хэрэглэгч чат эхлүүлсэн.",
  "2 шинэ template нэмэгдсэн."
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => (
          <div
            key={item.label}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <p className="text-xs text-slate-500">{item.label}</p>
            <p className="mt-3 text-2xl font-semibold text-slate-900">{item.value}</p>
          </div>
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-2">
          <h2 className="text-base font-semibold text-slate-900">Өсөлтийн тойм</h2>
          <p className="mt-2 text-sm text-slate-500">
            Аналитик chart placeholder — хөгжүүлэлтийн шатанд.
          </p>
          <div className="mt-6 h-40 rounded-xl bg-slate-100" />
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-base font-semibold text-slate-900">Сүүлийн үйлдлүүд</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            {activities.map((item) => (
              <li key={item} className="rounded-lg bg-slate-50 px-3 py-2">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
