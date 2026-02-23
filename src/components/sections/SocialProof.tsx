"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { Shield, Package, Globe, CheckCircle2, Route } from "lucide-react";

interface StatItemSchema {
    value: string;
    key: string;
    icon: any;
    color: string;
}

const stats: StatItemSchema[] = [
    { value: "15+", key: "yearsExperience", icon: Shield, color: "#FF6B35" },
    { value: "5k+", key: "activeUnits", icon: Package, color: "#4ECDC4" },
    { value: "20+", key: "regionsCovered", icon: Globe, color: "#FFE66D" },
    { value: "98%", key: "slaAdherence", icon: CheckCircle2, color: "#95E1D3" },
    { value: "1M+", key: "kmMonthly", icon: Route, color: "#F38181" },
];

export function SocialProof() {
    const sectionRef = useRef<HTMLElement>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start 0.8", "end 0.2"]
    });

    return (
        <section ref={sectionRef} className="bg-section-3 py-6 md:py-14 text-text-primary">
            <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 overflow-hidden">
                <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 md:grid md:grid-cols-5 md:gap-0 pb-4 md:pb-0 hide-scrollbar -mx-4 px-4 md:mx-0 md:px-0">
                    {stats.map((stat, index) => (
                        <div key={stat.value} className="snap-center shrink-0 min-w-[110px] md:min-w-0">
                            <StatItem
                                stat={stat}
                                index={index}
                                scrollYProgress={scrollYProgress}
                            />
                        </div>
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
        ["#cbd5e1", stat.color, stat.color, stat.color, "#cbd5e1"]
    );

    const valueColor = useTransform(
        scrollYProgress,
        [0, 0.15, 0.5, 0.85, 1],
        ["#94a3b8", "currentColor", "currentColor", "currentColor", "#94a3b8"]
    );

    return (
        <motion.div
            className="flex flex-col items-center justify-center text-center md:border-r md:border-white/10 md:px-4"
        >
            <motion.div style={{ color: iconColor }} className="mb-1.5 md:mb-3 flex justify-center">
                <stat.icon className="w-6 h-6 md:w-10 md:h-10" />
            </motion.div>
            <motion.span
                className="text-2xl md:text-4xl lg:text-5xl font-black tracking-tight"
                style={{ color: valueColor }}
            >
                {stat.value}
            </motion.span>
            <span className="mt-1 flex justify-center text-center max-w-[100px] md:max-w-none md:mt-3 text-[8px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                {t(`SocialProof.${stat.key}`)}
            </span>
        </motion.div>
    );
}
