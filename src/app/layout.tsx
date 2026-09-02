import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { StudentProvider } from "@/components/StudentProvider";
import { Header } from "@/components/Header";
import { APP_NAME, CREDIT_LINE, TEACHER_NAME, TEACHER_TITLE } from "@/lib/site";

export const metadata: Metadata = {
  title: `${APP_NAME} | تدريب القراءة العربية للمرحلة الابتدائية — ${TEACHER_TITLE}`,
  description: `تطبيق تفاعلي لتدريب أطفال المرحلة الابتدائية على القراءة باللغة العربية في المنزل، مع مساعد صوتي وتسجيل ونظام نقاط ونجوم ومتابعة لولي الأمر. ${CREDIT_LINE}.`,
  authors: [{ name: TEACHER_NAME }],
  creator: TEACHER_NAME,
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f97316",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Baloo+Bhaijaan+2:wght@400;500;600;700;800&family=Aref+Ruqaa:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="text-slate-900 antialiased">
        <StudentProvider>
          <Header />
          <main className="mx-auto w-full max-w-6xl px-4 pb-28 pt-6 sm:pb-16">
            {children}
          </main>
          <footer className="no-print space-y-3 px-4 pb-24 text-center text-sm text-slate-500 sm:pb-8">
            <p className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white/90 px-5 py-2 text-base font-extrabold text-slate-800 shadow">
              <span className="text-xl">👨‍🏫</span>
              {CREDIT_LINE}
            </p>
            <p>
              {APP_NAME} 📚 — تطبيق تدريب القراءة العربية للمنزل بالتعاون مع
              أولياء الأمور
            </p>
          </footer>
        </StudentProvider>
      </body>
    </html>
  );
}