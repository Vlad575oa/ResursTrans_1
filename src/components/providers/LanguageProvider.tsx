"use client";

import { createContext, useContext, useState, useCallback, useEffect, ReactNode } from "react";
import en from "@/messages/en.json";
import ru from "@/messages/ru.json";

type Locale = "ru" | "en";

const messages = {
    en,
    ru,
};

interface LanguageContextType {
    locale: Locale;
    setLocale: (locale: Locale) => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [locale, setLocaleState] = useState<Locale>("ru");

    // Load saved locale from localStorage on mount
    useEffect(() => {
        const savedLocale = localStorage.getItem("locale") as Locale;
        if (savedLocale && (savedLocale === "ru" || savedLocale === "en")) {
            setLocaleState(savedLocale);
            document.cookie = `NEXT_LOCALE=${savedLocale}; path=/; max-age=31536000; SameSite=Lax`;
        }
    }, []);

    const setLocale = useCallback((newLocale: Locale) => {
        setLocaleState(newLocale);
        localStorage.setItem("locale", newLocale);
        document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;
    }, []);

    const t = useCallback((key: string): string => {
        const keys = key.split(".");
        let value: any = messages[locale];

        for (const k of keys) {
            if (value && typeof value === 'object' && k in value) {
                value = value[k];
            } else {
                return key; // Fallback to key if not found
            }
        }

        return typeof value === "string" ? value : key;
    }, [locale]);

    return (
        <LanguageContext.Provider value={{ locale, setLocale, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
