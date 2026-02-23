import type { Metadata } from "next";
import { Inter_Tight, Playfair_Display } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/providers/LanguageProvider";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { CookieConsent } from "@/components/ui/CookieConsent";
import { TelegramProvider } from "@/components/providers/TelegramProvider";

const interTight = Inter_Tight({
  variable: "--font-sans",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "600", "700", "900"],
  display: "swap",
  preload: true,
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin", "cyrillic"],
  style: ["normal", "italic"],
  display: "swap",
  preload: true,
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
    <html lang="ru" suppressHydrationWarning>
      <head />
      <body
        className={`${interTight.variable} ${playfair.variable} antialiased selection:bg-[var(--color-burnt-terra)] selection:text-white`}
      >
        <ThemeProvider>
          <LanguageProvider>
            <TelegramProvider>
              {children}
              <CookieConsent />
            </TelegramProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
