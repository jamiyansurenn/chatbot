import Link from "next/link";

const navItems = [
  { href: "/dashboard", label: "Overview" },
  { href: "/dashboard/bots", label: "Bots" },
  { href: "/dashboard/flows", label: "Flow Builder" },
  { href: "/dashboard/templates", label: "Templates" },
  { href: "/dashboard/billing", label: "Billing" },
  { href: "/dashboard/analytics", label: "Analytics" },
  { href: "/dashboard/users", label: "Users" }
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <div className="flex min-h-screen">
        <aside className="hidden w-64 flex-col border-r border-slate-200 bg-white px-6 py-8 md:flex">
          <div className="flex items-center gap-2 text-lg font-semibold text-slate-900">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-rose-500 text-xs font-semibold text-white">
              CB
            </span>
            kdl.mn
          </div>
          <p className="mt-1 text-xs text-slate-400">Workspace demo</p>
          <nav className="mt-8 space-y-2 text-sm">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center rounded-lg px-3 py-2 text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-auto rounded-2xl border border-slate-200 bg-slate-50 p-4 text-xs text-slate-500">
            <p className="font-semibold text-slate-700">Багц: Үнэгүй</p>
            <p className="mt-2">Upgrade хийж илүү боломж нээ.</p>
          </div>
        </aside>

        <div className="flex-1">
          <header className="flex items-center justify-between border-b border-slate-200 bg-white px-6 py-4">
            <div>
              <p className="text-sm text-slate-500">Dashboard</p>
              <h1 className="text-lg font-semibold text-slate-900">kdl.mn Dashboard</h1>
            </div>
            <div className="flex items-center gap-3 text-sm text-slate-600">
              <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1">
                Үнэгүй багц
              </span>
              <span className="text-slate-500">Ulzii Ulzii</span>
            </div>
          </header>
          <main className="px-6 py-8">{children}</main>
        </div>
      </div>
    </div>
  );
}
