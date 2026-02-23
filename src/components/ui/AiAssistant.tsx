"use client";

import { motion } from "framer-motion";
import { Send, Info } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { useTelegram } from "@/components/providers/TelegramProvider";
import { usePathname } from "next/navigation";

export const AiAssistant = () => {
    const { t } = useLanguage();
    const pathname = usePathname();
    const { openTelegramModal } = useTelegram();

    const isHome = pathname === '/' || /^\/(ru|en|de)$/.test(pathname || '');

    return (
        <motion.div
            className={`fixed bottom-8 right-8 z-40 group ${isHome ? 'hidden md:block' : ''}`}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <button
                onClick={() => openTelegramModal("https://t.me/resurstrans")}
                className="relative block cursor-pointer"
            >
                {/* Orb without blur radius */}
                <motion.div
                    className="w-14 h-14 rounded-full flex items-center justify-center bg-[#2AABEE] text-white relative"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                >
                    <Send className="w-6 h-6 -ml-1 -mt-0.5 -rotate-[10deg]" />
                    <div className="absolute top-0 right-0 w-4 h-4 bg-white text-[#2AABEE] rounded-full flex items-center justify-center shadow-sm">
                        <Info className="w-3 h-3" />
                    </div>
                </motion.div>

                {/* Tooltip (Hidden initially) */}
                <div className="absolute right-full top-1/2 -translate-y-1/2 mr-4 px-3 py-1.5 bg-[#2AABEE] text-white rounded-full text-xs font-mono font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md">
                    Аудит автопарка
                </div>
            </button>
        </motion.div>
    );
};
