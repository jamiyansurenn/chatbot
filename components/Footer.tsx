import { Facebook, Instagram, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-900 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 text-sm text-slate-400 md:flex-row">
        <div>
          <p className="text-base font-semibold text-white">Chatflow Front</p>
          <p className="mt-2 text-xs text-slate-500">chatcraft-ui · mongobot-landing</p>
        </div>
        <div className="flex items-center gap-4 text-slate-500">
          <Facebook size={18} />
          <Instagram size={18} />
          <Mail size={18} />
        </div>
        <div className="text-center text-xs text-slate-500 md:text-right">
          <p>Хаанбанк · Jamiyansuren · 5249379237</p>
          <p className="mt-2">© 2026 Chatbot.mn inspired</p>
          <p className="mt-2">Үйлчилгээний нөхцөл · Нууцлалын бодлого</p>
        </div>
      </div>
    </footer>
  );
}
