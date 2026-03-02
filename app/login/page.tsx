"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Mail, Lock, ArrowRight, User } from "lucide-react";
import { FormEvent } from "react";

export default function LoginPage() {
    const router = useRouter();

    const handleLogin = (e: FormEvent) => {
        e.preventDefault();
        router.push("/dashboard");
    };

    return (
        <main className="flex min-h-screen items-center justify-center bg-slate-50 p-6">
            <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]">
                <div className="mb-8 text-center">
                    <Link href="/" className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-rose-500 text-lg font-bold text-white shadow-md hover:bg-rose-600 transition-colors">
                        CB
                    </Link>
                    <h1 className="mt-6 text-2xl font-bold tracking-tight text-slate-900">Тавтай морилно уу</h1>
                    <p className="mt-2 text-sm text-slate-500">Систем рүү нэвтрэх мэдээллээ оруулна уу</p>
                </div>

                <form className="space-y-5" onSubmit={handleLogin}>
                    <div>
                        <label className="mb-2 block text-sm font-medium text-slate-700">И-мэйл хаяг</label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                            <input
                                type="email"
                                placeholder="Танд бүртгэлтэй и-мэйл"
                                className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-sm outline-none transition-all placeholder:text-slate-400 focus:border-rose-500 focus:bg-white focus:ring-4 focus:ring-rose-500/10"
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <div className="mb-2 flex items-center justify-between">
                            <label className="text-sm font-medium text-slate-700">Нууц үг</label>
                            <a href="#" className="text-sm font-medium text-rose-500 hover:text-rose-600">
                                Мартсан?
                            </a>
                        </div>
                        <div className="relative">
                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                            <input
                                type="password"
                                placeholder="Нууц үг"
                                className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-sm outline-none transition-all placeholder:text-slate-400 focus:border-rose-500 focus:bg-white focus:ring-4 focus:ring-rose-500/10"
                                required
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="group flex w-full items-center justify-center gap-2 rounded-xl bg-rose-500 py-3 font-semibold text-white shadow-md transition-all hover:bg-rose-600 active:scale-[0.98]"
                    >
                        Нэвтрэх
                        <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                    </button>
                </form>

                <p className="mt-8 text-center text-sm text-slate-600">
                    Бүртгэлгүй юу?{" "}
                    <Link href="/register" className="font-semibold text-rose-500 hover:text-rose-600 transition-colors">
                        Шинээр бүртгүүлэх
                    </Link>
                </p>
            </div>
        </main>
    );
}
