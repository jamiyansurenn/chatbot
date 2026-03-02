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
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-base font-semibold text-slate-900">Өсөлтийн тойм</h2>
              <p className="mt-2 text-sm text-slate-500">Сүүлийн 7 хоногийн өсөлт.</p>
            </div>
            <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600">
              +18%
            </span>
          </div>
          <div className="mt-6 rounded-xl border border-slate-100 bg-slate-50 px-4 py-3">
            <svg viewBox="0 0 320 120" className="h-32 w-full">
              <defs>
                <linearGradient id="growthLine" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#ef4444" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M10 95 L55 82 L95 88 L135 70 L175 62 L215 52 L255 58 L310 35"
                fill="none"
                stroke="#ef4444"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M10 95 L55 82 L95 88 L135 70 L175 62 L215 52 L255 58 L310 35 L310 110 L10 110 Z"
                fill="url(#growthLine)"
              />
              {[
                [10, 95], 
                [55, 82],
                [95, 88],
                [135, 70],
                [175, 62],
                [215, 52],
                [255, 58],
                [310, 35]
              ].map(([x, y]) => (
                <circle key={`${x}-${y}`} cx={x} cy={y} r={3.5} fill="#ef4444" />
              ))}
            </svg>
            <div className="mt-3 flex items-center justify-between text-xs text-slate-500">
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span>Fri</span>
              <span>Sat</span>
              <span>Sun</span>
            </div>
          </div>
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
