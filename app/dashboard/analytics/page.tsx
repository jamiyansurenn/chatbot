const metrics = [
  { label: "Нийт мессеж", value: "18,420" },
  { label: "Автомат хариулт", value: "94%" },
  { label: "Сэтгэл ханамж", value: "4.8/5" }
];

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-slate-900">Analytics</h2>
        <p className="text-sm text-slate-500">Суваг бүрийн гүйцэтгэл, трендүүд.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {metrics.map((item) => (
          <div
            key={item.label}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <p className="text-xs text-slate-500">{item.label}</p>
            <p className="mt-3 text-2xl font-semibold text-slate-900">{item.value}</p>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="text-base font-semibold text-slate-900">Өдрийн идэвх</h3>
        <div className="mt-4 h-48 rounded-2xl bg-slate-100" />
      </div>
    </div>
  );
}
