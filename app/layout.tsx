import "../styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "kdl.mn",
  description: "Монгол хэл дээрх chatbot platform"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="mn">
      <body className="bg-slate-100 text-slate-900 antialiased">
        <div className="min-h-screen">{children}</div>
      </body>
    </html>
  );
}
