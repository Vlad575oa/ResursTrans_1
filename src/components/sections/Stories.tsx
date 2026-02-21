"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";

export const Stories = () => {
    const { t } = useLanguage();
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: containerRef });

    const STORIES = [
        {
            id: "01",
            quote: t("Stories.01.quote"),
            author: t("Stories.01.author"),
            role: t("Stories.01.role"),
            bg: "bg-anthracite-core"
        },
        {
            id: "02",
            quote: t("Stories.02.quote"),
            author: t("Stories.02.author"),
            role: t("Stories.02.role"),
            bg: "bg-olive-spruce-dark"
        },
        {
            id: "03",
            quote: t("Stories.03.quote"),
            author: t("Stories.03.author"),
            role: t("Stories.03.role"),
            bg: "bg-burnt-terra"
        }
    ];

    return (
        <section ref={containerRef} className="bg-anthracite-core text-cloud-dancer relative">
            {STORIES.map((story, i) => (
                <div key={i} className={`sticky top-0 h-screen flex flex-col justify-center px-6 md:px-24 ${story.bg} overflow-hidden`}>
                    {/* Background Overlay Effect */}
                    <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                    <div className="relative z-10 max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-sm font-mono text-white/50 mb-8 uppercase tracking-widest"
                        >
                            {t("Stories.humanCapital")} // {t("Stories.story")} {story.id}
                        </motion.div>

                        <motion.h3
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-3xl md:text-5xl lg:text-6xl font-serif italic leading-tight mb-12"
                        >
                            {story.quote}
                        </motion.h3>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="flex items-center gap-4"
                        >
                            <div className="w-12 h-12 rounded-full bg-white/20" />
                            <div>
                                <div className="font-bold text-lg">{story.author}</div>
                                <div className="text-white/60 text-sm">{story.role}</div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            ))}
        </section>
    );
};
