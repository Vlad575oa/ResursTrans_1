"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";

interface StatItemSchema {
    value: string;
    key: string;
    icon: string;
    color: string;
}

const stats: StatItemSchema[] = [
    { value: "15+", key: "yearsExperience", icon: "shield", color: "#FF6B35" },
    { value: "5k+", key: "activeUnits", icon: "inventory_2", color: "#4ECDC4" },
    { value: "20+", key: "regionsCovered", icon: "public", color: "#FFE66D" },
    { value: "98%", key: "slaAdherence", icon: "task_alt", color: "#95E1D3" },
    { value: "1M+", key: "kmMonthly", icon: "route", color: "#F38181" },
];

export function SocialProof() {
    const sectionRef = useRef<HTMLElement>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start 0.8", "end 0.2"]
    });

    return (
        <section ref={sectionRef} className="bg-navy-custom py-14 text-white">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 md:gap-0">
                    {stats.map((stat, index) => (
                        <StatItem
                            key={stat.value}
                            stat={stat}
                            index={index}
                            scrollYProgress={scrollYProgress}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

interface StatItemProps {
    stat: StatItemSchema;
    index: number;
    scrollYProgress: any;
}

function StatItem({ stat, index, scrollYProgress }: StatItemProps) {
    const { t } = useLanguage();
    const iconColor = useTransform(
        scrollYProgress,
        [0, 0.15, 0.5, 0.85, 1],
        ["#64748b", stat.color, stat.color, stat.color, "#64748b"]
    );

    const valueColor = useTransform(
        scrollYProgress,
        [0, 0.15, 0.5, 0.85, 1],
        ["#94a3b8", "#ffffff", "#ffffff", "#ffffff", "#94a3b8"]
    );

    return (
        <motion.div
            className="flex flex-col items-center justify-center text-center md:border-r md:border-white/10 md:px-4"
        >
            <motion.span
                className="material-symbols-outlined text-4xl mb-3"
                style={{ color: iconColor }}
            >
                {stat.icon}
            </motion.span>
            <motion.span
                className="text-4xl lg:text-5xl font-black tracking-tight"
                style={{ color: valueColor }}
            >
                {stat.value}
            </motion.span>
            <span className="mt-3 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                {t(`SocialProof.${stat.key}`)}
            </span>
        </motion.div>
    );
}
