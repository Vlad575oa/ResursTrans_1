"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";
import Link from "next/link";

export const CookieConsent = () => {
    const { t } = useLanguage();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Simple logic to show it only if not accepted before
        const consent = localStorage.getItem("cookie_consent");
        if (!consent) {
            setIsVisible(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cookie_consent", "true");
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    className="fixed bottom-4 left-4 right-4 md:left-auto md:right-8 md:bottom-8 md:max-w-md bg-anthracite-core text-cloud-dancer p-6 rounded-2xl shadow-2xl z-[100] border border-white/10"
                >
                    <div className="flex flex-col gap-4">
                        <p className="text-sm text-cloud-dancer/80 leading-relaxed">
                            {t("CookieBanner.text")}
                            <Link href="/privacy" className="text-burnt-terra hover:text-burnt-terra/80 underline underline-offset-4 ml-1">
                                {t("CookieBanner.link")}
                            </Link>
                        </p>
                        <button
                            onClick={handleAccept}
                            className="w-full sm:w-auto px-6 py-2.5 bg-burnt-terra text-white font-bold rounded-xl hover:bg-burnt-terra/90 transition-colors text-sm uppercase tracking-widest text-center"
                        >
                            {t("CookieBanner.accept")}
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
