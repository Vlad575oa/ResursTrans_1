"use client";

import { motion } from "framer-motion";
import { Send, Info } from "lucide-react";
import { useTelegram } from "@/components/providers/TelegramProvider";

export const MobileActionBar = () => {
    const { openTelegramModal } = useTelegram();
    return (
        <div className="fixed bottom-6 left-0 right-0 z-50 flex justify-center pointer-events-none md:hidden px-6">
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="pointer-events-auto"
            >
                <button
                    onClick={() => openTelegramModal("https://t.me/resurstrans")}
                    className="relative flex items-center justify-center gap-2 bg-[#2AABEE] text-white px-8 py-4 rounded-full font-bold text-base tracking-wide hover:bg-[#229ED9] transition-all shadow-lg shadow-[#2AABEE]/30 active:scale-95"
                >
                    <Send className="w-5 h-5 -mt-0.5 -ml-1 flex-shrink-0" />
                    <span className="font-mono">Аудит автопарка</span>
                    <div className="absolute top-0 right-0 w-4 h-4 bg-white text-[#2AABEE] rounded-full flex items-center justify-center shadow-sm translate-x-1 -translate-y-1">
                        <Info className="w-3 h-3" />
                    </div>
                </button>
            </motion.div>
        </div>
    );
};
