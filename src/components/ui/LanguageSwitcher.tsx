"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";

export default function LanguageSwitcher() {
    const { locale, setLocale, t } = useLanguage();

    const toggleLanguage = () => {
        setLocale(locale === "ru" ? "en" : "ru");
    };

    return (
        <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors group"
            aria-label={t("Language.ariaLabel")}
        >
            {/* Flag Icon */}
            <span className="text-xl">
                {locale === "ru" ? "🇷🇺" : "🇬🇧"}
            </span>
            {/* Language Code */}
            <span className="text-sm font-semibold text-slate-600 group-hover:text-primary-main uppercase">
                {locale === "ru" ? "RU" : "EN"}
            </span>
        </button>
    );
}
