"use client";

import React, { createContext, useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "./LanguageProvider";

interface TelegramContextType {
    openTelegramModal: (url: string) => void;
}

const TelegramContext = createContext<TelegramContextType | undefined>(undefined);

export const TelegramProvider = ({ children }: { children: React.ReactNode }) => {
    const { t } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const [targetUrl, setTargetUrl] = useState("");

    const openTelegramModal = (url: string) => {
        setTargetUrl(url);
        setIsOpen(true);
    };

    const handleProceed = () => {
        window.open(targetUrl, "_blank", "noopener,noreferrer");
        setIsOpen(false);
    };

    const handleCancel = () => {
        setIsOpen(false);
    };

    return (
        <TelegramContext.Provider value={{ openTelegramModal }}>
            {children}
            <AnimatePresence>
                {isOpen && (
                    <div className="fixed inset-0 z-[200] flex items-center justify-center px-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-anthracite-core/60 backdrop-blur-sm"
                            onClick={handleCancel}
                        />
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            className="relative bg-white dark:bg-anthracite-core w-full max-w-md p-8 rounded-[32px] shadow-2xl z-10 mx-auto"
                        >
                            <h3 className="text-2xl font-black text-anthracite-core dark:text-cloud-dancer mb-4">
                                {t("TelegramModal.title") || "Переход в Telegram"}
                            </h3>
                            <p className="text-anthracite-core/70 dark:text-cloud-dancer/70 mb-8 leading-relaxed font-serif italic text-lg">
                                {t("TelegramModal.description") || "Вы покидаете сайт РесурсЛогистика и переходите в стороннее приложение. Обратите внимание, что при переходе ваш номер телефона и данные профиля станут доступны платформе мессенджера."}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button
                                    onClick={handleCancel}
                                    className="flex-1 py-4 px-6 rounded-xl font-bold bg-anthracite-core/5 text-anthracite-core dark:bg-white/5 dark:text-white hover:bg-anthracite-core/10 dark:hover:bg-white/10 transition-colors uppercase tracking-widest text-sm"
                                >
                                    {t("TelegramModal.cancel") || "Отмена"}
                                </button>
                                <button
                                    onClick={handleProceed}
                                    className="flex-1 py-4 px-6 rounded-xl font-bold bg-[#0088cc] text-white hover:bg-[#0077b3] shadow-lg shadow-[#0088cc]/20 transition-all uppercase tracking-widest text-sm text-center"
                                >
                                    {t("TelegramModal.proceed") || "Перейти"}
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </TelegramContext.Provider>
    );
};

export const useTelegram = () => {
    const context = useContext(TelegramContext);
    if (context === undefined) {
        throw new Error("useTelegram must be used within a TelegramProvider");
    }
    return context;
};
