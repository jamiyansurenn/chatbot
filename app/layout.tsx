import "../styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chatflow Front",
  description: "Chatbot / ManyChat-тай адилхан SaaS landing page"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="mn">
      <body className="bg-[#0B0B0F] text-white antialiased">
        <div className="min-h-screen">{children}</div>
      </body>
    </html>
  );
}
