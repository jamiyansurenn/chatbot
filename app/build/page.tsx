import Link from "next/link";

const steps = [
  {
    title: "1. Зорилгоо тодорхойл",
    description: "Борлуулалт, support эсвэл lead capture аль дээр төвлөрөхөө сонго."
  },
  {
    title: "2. Flow бүтэцлэ",
    description: "Асуулт/хариултын замнал, fallback, CTA мессежүүдээ бэлтгэ."
  },
  {
    title: "3. Контент нэм",
    description: "FAQ, бүтээгдэхүүний мэдээлэл, үнийн хэсэг зэрэг мэдлэгээ оруул."
  },
  {
    title: "4. Сувгууд холбох",
    description: "Meta, Web chat, Telegram зэрэг сувгийг нэг товчоор холбо."
  },
  {
    title: "5. Туршиж, сайжруул",
    description: "Дотоод тест хийж, хэрэглэгчийн өгөг дээр тулгуурлан сайжруул."
  }
];

export default function BuildPage() {
  return (
    <main className="bg-gradient-to-br from-slate-50 via-white to-sky-50 px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-500">
          Guide
        </p>
        <h1 className="mt-4 text-4xl font-semibold text-slate-900 md:text-5xl">
          Chatbot хэрхэн үүсгэх вэ
        </h1>
        <p className="mt-4 text-base text-slate-600 md:text-lg">
          Эндээс алхам алхмаар зааврыг авч, chatbot-оо шууд туршиж болно.
        </p>

        <div className="mt-12 space-y-6">
          {steps.map((step) => (
            <div
              key={step.title}
              className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-[0_12px_30px_rgba(15,23,42,0.08)] backdrop-blur"
            >
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-sky-500/10 px-3 py-1 text-xs font-semibold text-sky-600">
                  Алхам
                </span>
                <h2 className="text-lg font-semibold text-slate-900">{step.title}</h2>
              </div>
              <p className="mt-3 text-sm text-slate-600 md:text-base">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/chat"
            className="inline-flex items-center justify-center rounded-full bg-sky-600 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-200 hover:bg-sky-700"
          >
            Chatbot demo нээх
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-slate-300 px-8 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400"
          >
            Буцах
          </Link>
        </div>
      </div>
    </main>
  );
}
