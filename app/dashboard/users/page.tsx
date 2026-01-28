const users = [
  { name: "Ulzii Ulzii", role: "Owner", status: "Active" },
  { name: "Namuun L.", role: "Admin", status: "Active" },
  { name: "Batzaya D.", role: "Agent", status: "Invited" }
];

export default function UsersPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">Users</h2>
          <p className="text-sm text-slate-500">Багийн гишүүдийн мэдээлэл.</p>
        </div>
        <button className="rounded-full bg-rose-500 px-4 py-2 text-sm font-semibold text-white">
          Хэрэглэгч урих
        </button>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="grid grid-cols-3 border-b border-slate-200 pb-3 text-xs text-slate-500">
          <span>Нэр</span>
          <span>Role</span>
          <span>Status</span>
        </div>
        <div className="mt-4 space-y-3 text-sm">
          {users.map((user) => (
            <div key={user.name} className="grid grid-cols-3 rounded-xl bg-slate-50 px-4 py-3">
              <span className="text-slate-700">{user.name}</span>
              <span className="text-slate-500">{user.role}</span>
              <span className="text-emerald-600">{user.status}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
