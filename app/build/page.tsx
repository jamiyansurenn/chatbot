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
    <main className="grid-glow px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <p className="text-sm font-semibold uppercase text-purple-300">Guide</p>
        <h1 className="mt-3 text-3xl font-semibold md:text-4xl">
          Chatbot хэрхэн үүсгэх вэ
        </h1>
        <p className="mt-4 text-slate-300">
          Эндээс алхам алхмаар зааврыг авч, chatbot-оо шууд туршиж болно.
        </p>

        <div className="mt-10 space-y-4">
          {steps.map((step) => (
            <div
              key={step.title}
              className="rounded-2xl border border-purple-500/20 bg-gradient-to-r from-purple-500/10 via-[#111827] to-cyan-500/10 p-5"
            >
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-purple-500/20 px-3 py-1 text-xs font-semibold text-purple-200">
                  Алхам
                </span>
                <h2 className="text-base font-semibold text-white">{step.title}</h2>
              </div>
              <p className="mt-2 text-sm text-slate-300">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/chat"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/30"
          >
            Chatbot demo нээх
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-slate-700 px-6 py-3 text-sm text-slate-200 transition hover:border-purple-400 hover:text-white"
          >
            Буцах
          </Link>
        </div>
      </div>
    </main>
  );
}
