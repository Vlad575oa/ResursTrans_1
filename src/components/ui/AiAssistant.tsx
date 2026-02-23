"use client";

import { motion } from "framer-motion";
import { Send, Info } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { useTelegram } from "@/components/providers/TelegramProvider";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export const AiAssistant = () => {
    const { t } = useLanguage();
    const pathname = usePathname();
    const { openTelegramModal } = useTelegram();
    const [isFooterVisible, setIsFooterVisible] = useState(false);

    const isHome = pathname === '/' || /^\/(ru|en|de)$/.test(pathname || '');

    useEffect(() => {
        const handleScroll = () => {
            const footer = document.querySelector('footer');
            if (footer) {
                const rect = footer.getBoundingClientRect();
                setIsFooterVisible(rect.top <= window.innerHeight);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, []);

    return (
        <motion.div
            className={`fixed bottom-8 right-8 z-40 group ${isHome ? 'hidden md:block' : ''} ${isFooterVisible ? 'pointer-events-none' : ''}`}
            initial={{ y: 100, opacity: 0 }}
            animate={{
                y: isFooterVisible ? 100 : 0,
                opacity: isFooterVisible ? 0 : 1
            }}
            transition={{ duration: 0.5 }}
        >
            <button
                onClick={() => openTelegramModal("https://t.me/resurstrans")}
                className="relative block cursor-pointer"
            >
                {/* Orb without blur radius */}
                <motion.div
                    className="w-14 h-14 rounded-full flex items-center justify-center bg-[#2AABEE] text-white relative shadow-lg shadow-[#2AABEE]/30"
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
