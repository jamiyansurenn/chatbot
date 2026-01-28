const payments: {
  date: string;
  plan: string;
  type: string;
  duration: string;
  paymentType: string;
  amount: string;
  note: string;
}[] = [];

export default function BillingPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Төлбөрийн багц</h2>
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-500">Одоо ашиглаж байгаа</p>
            <p className="mt-3 text-lg font-semibold text-slate-900">Үнэгүй багц</p>
            <div className="mt-6 flex items-center gap-2 text-sm text-slate-500">
              Багц:
              <span className="font-semibold text-slate-700">Үнэгүй багц</span>
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-500">Дараагийн багц</p>
            <p className="mt-3 text-lg font-semibold text-slate-400">Байхгүй</p>
          </div>
        </div>
        <button className="rounded-lg bg-amber-400 px-4 py-2 text-xs font-semibold text-black">
          Багц солих
        </button>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-base font-semibold">Төлбөр</h2>
        <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200">
          <div className="grid grid-cols-7 bg-slate-50 px-4 py-3 text-xs text-slate-500">
            <span>Огноо</span>
            <span>Багц</span>
            <span>Төрөл</span>
            <span>Хугацаа</span>
            <span>Төлбөрийн төрөл</span>
            <span>Дүн</span>
            <span>Тайлбар</span>
          </div>
          {payments.map((item) => (
            <div
              key={`${item.date}-${item.plan}`}
              className="grid grid-cols-7 border-t border-slate-100 px-4 py-3 text-sm"
            >
              <span className="text-slate-700">{item.date}</span>
              <span className="text-slate-700">{item.plan}</span>
              <span className="text-slate-500">{item.type}</span>
              <span className="text-slate-500">{item.duration}</span>
              <span className="text-slate-500">{item.paymentType}</span>
              <span className="text-slate-700">{item.amount}</span>
              <span className="text-slate-500">{item.note}</span>
            </div>
          ))}
          {payments.length === 0 && (
            <div className="px-4 py-10 text-center text-sm text-slate-400">
              No data found
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
