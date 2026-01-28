import Link from "next/link";

const templates = [
  {
    title: "E-commerce Эрка",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Барилга (Template)",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Hospital & Clinic",
    image:
      "https://images.unsplash.com/photo-1504814532849-927b7f4d2db4?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Bot template: webform",
    image:
      "https://images.unsplash.com/photo-1545239351-ef35f43d514b?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Боловсрол сургалт",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Online shopping",
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80"
  }
];

export default function TemplatesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold">Загвар бот</h2>
          <p className="text-sm text-slate-500">Салбар бүрт тохирсон бэлэн загвар.</p>
        </div>
        <Link
          href="/dashboard/flows"
          className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600"
        >
          Шинэ template
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {templates.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
          >
            <div className="h-40 overflow-hidden rounded-xl bg-slate-100">
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover"
              />
            </div>
            <h3 className="mt-4 text-sm font-semibold text-slate-900">{item.title}</h3>
            <Link
              href="/dashboard/flows"
              className="mt-4 inline-flex rounded-full bg-rose-500 px-4 py-1 text-xs font-semibold text-white"
            >
              Дэлгэрэнгүй
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
