"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { useRouter } from "next/navigation";

export default function LanguageSwitcher() {
    const { locale, setLocale, t } = useLanguage();
    const router = useRouter();

    const toggleLanguage = () => {
        const newLocale = locale === "ru" ? "en" : "ru";
        setLocale(newLocale);
        router.refresh(); // Refresh Server Components to pick up new NEXT_LOCALE cookie
    };

    return (
        <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-foreground/10 transition-colors group"
            aria-label={t("Language.ariaLabel")}
        >
            {/* Flag Icon */}
            <span className="text-xl">
                {locale === "ru" ? "🇷🇺" : "🇬🇧"}
            </span>
            {/* Language Code */}
            <span className="text-sm font-semibold text-foreground/70 group-hover:text-primary-main uppercase">
                {locale === "ru" ? "RU" : "EN"}
            </span>
        </button>
    );
}
