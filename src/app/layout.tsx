import type { Metadata } from "next";
import { Inter_Tight, Playfair_Display } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-sans",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "900"], // Heavy weights for "Object Sans" feel
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin", "cyrillic"],
  style: ["normal", "italic"], // For editorial feel
});

export const metadata: Metadata = {
  title: "РесурсТранс — Умный аутсорсинг транспорта и спецтехники",
  description: "Мы видим транспорт насквозь. Профессиональный аутсорсинг транспортных услуг для крупного бизнеса. Современная ИТ-платформа и контроль каждой единицы техники.",
  alternates: {
    canonical: "https://resurstrans.ru",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="dark" suppressHydrationWarning>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${interTight.variable} ${playfair.variable} antialiased selection:bg-[var(--color-burnt-terra)] selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
