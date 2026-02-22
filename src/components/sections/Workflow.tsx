"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { useTheme } from "@/components/providers/ThemeProvider";

import { BarChart3, Brain, Share2, Rocket, Activity as ActivityIcon } from "lucide-react";

const WORKFLOW_STEPS = [
    { key: "analysis", icon: BarChart3, threshold: 0.15 },
    { key: "model", icon: Brain, threshold: 0.35 },
    { key: "connection", icon: Share2, threshold: 0.55 },
    { key: "launch", icon: Rocket, threshold: 0.75 },
    { key: "analytics", icon: ActivityIcon, threshold: 0.90 }
];

export function Workflow() {
    const { t } = useLanguage();
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    return (
        <section ref={containerRef} className="py-16 bg-section-1 relative overflow-hidden">
            {/* Background decorative element */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white to-transparent opacity-50 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="mb-12 max-w-3xl">
                    <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-3 block">{t("Workflow.badge")}</span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
                        {t("Workflow.title")}
                    </h2>
                    <p className="mt-4 text-lg text-slate-600 max-w-2xl">
                        {t("Workflow.description")}
                    </p>
                </div>

                {/* Desktop Timeline */}
                <div className="hidden lg:block relative py-10">
                    {/* Connector Line */}
                    <div className="absolute top-24 left-0 w-full h-0.5 bg-slate-200">
                        <motion.div
                            style={{ scaleX: scrollYProgress }}
                            className="absolute top-0 left-0 h-full bg-primary origin-left"
                        />
                    </div>

                    <div className="grid grid-cols-5 gap-4">
                        {WORKFLOW_STEPS.map((item, idx) => (
                            <StepItem
                                key={idx}
                                item={item}
                                index={idx + 1}
                                progress={scrollYProgress}
                            />
                        ))}
                    </div>
                </div>

                {/* Mobile Timeline (Vertical) */}
                <div className="lg:hidden flex flex-col gap-12 relative pl-6 ml-4">
                    {/* Background line for mobile */}
                    <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-slate-200">
                        <motion.div
                            style={{ scaleY: scrollYProgress }}
                            className="absolute top-0 left-0 w-full bg-primary origin-top"
                        />
                    </div>

                    {WORKFLOW_STEPS.map((item, idx) => (
                        <MobileStepItem
                            key={idx}
                            item={item}
                            index={idx + 1}
                            progress={scrollYProgress}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

function StepItem({ item, index, progress }: { item: typeof WORKFLOW_STEPS[0], index: number, progress: any }) {
    const { t } = useLanguage();
    const { theme } = useTheme();
    const primaryColor = theme === "light" ? "#f57a00" : "#66B032";
    const primaryRgb = theme === "light" ? "245, 122, 0" : "102, 176, 50";

    // Range: light up 5% before and stay lit 5% after the threshold
    const active = useTransform(progress,
        [item.threshold - 0.05, item.threshold, item.threshold + 0.15, item.threshold + 0.20],
        [0, 1, 1, 0] // Fade in and slightly out as we move past, or keep at 1 if preferred. User said "lights up as I scroll".
    );

    const borderColor = useTransform(active, [0, 1], ["rgb(241 245 249)", primaryColor]);
    const textColor = useTransform(active, [0, 1], ["rgb(148 163 184)", primaryColor]);
    const shadowOpacity = useTransform(active, [0, 1], [0, 0.2]);
    const scale = useTransform(active, [0, 1], [1, 1.05]);

    return (
        <div className="relative group">
            <div className="flex flex-col items-center text-center">
                <motion.div
                    style={{ borderColor, scale, boxShadow: useTransform(shadowOpacity, (v) => `0 10px 25px -5px rgba(${primaryRgb}, ${v})`) }}
                    className="w-24 h-24 rounded-full bg-white border-4 flex items-center justify-center z-10 transition-shadow duration-300"
                >
                    <motion.div style={{ color: textColor }}>
                        <item.icon className="w-10 h-10" />
                    </motion.div>
                </motion.div>
                <div className="mt-8 px-2">
                    <motion.div
                        style={{ color: textColor }}
                        className="text-xs font-bold uppercase tracking-widest mb-1 transition-colors duration-300"
                    >
                        {t("Workflow.step")} {index.toString().padStart(2, '0')}
                    </motion.div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{t(`Workflow.steps.${item.key}.title`)}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed font-medium">
                        {t(`Workflow.steps.${item.key}.desc`)}
                    </p>
                </div>
            </div>
        </div>
    );
}

function MobileStepItem({ item, index, progress }: { item: typeof WORKFLOW_STEPS[0], index: number, progress: any }) {
    const { t } = useLanguage();
    const { theme } = useTheme();
    const primaryColor = theme === "light" ? "#f57a00" : "#66B032";

    const active = useTransform(progress,
        [item.threshold - 0.05, item.threshold, item.threshold + 0.15, item.threshold + 0.20],
        [0, 1, 1, 0]
    );

    const backgroundColor = useTransform(active, [0, 1], ["#ffffff", primaryColor]);
    const borderColor = useTransform(active, [0, 1], ["rgb(203 213 225)", primaryColor]);
    const textColor = useTransform(active, [0, 1], ["rgb(100 116 139)", "#ffffff"]);
    const iconColor = useTransform(active, [0, 1], ["rgb(148 163 184)", primaryColor]);
    const titleColor = useTransform(active, [0, 1], ["rgb(15 23 42)", primaryColor]);

    return (
        <div className="relative pl-8">
            <motion.div
                style={{ backgroundColor, borderColor }}
                className="absolute -left-[17px] top-0 w-8 h-8 rounded-full border-2 flex items-center justify-center shadow-sm z-10"
            >
                <motion.span
                    style={{ color: textColor }}
                    className="text-xs font-bold"
                >
                    {index}
                </motion.span>
            </motion.div>
            <div className="flex items-center gap-3 mb-1">
                <motion.div style={{ color: iconColor }}>
                    <item.icon className="w-6 h-6" />
                </motion.div>
                <motion.h3
                    style={{ color: titleColor }}
                    className="text-lg font-bold transition-colors duration-300"
                >
                    {t(`Workflow.steps.${item.key}.title`)}
                </motion.h3>
            </div>
            <p className="text-slate-500 mt-1 text-sm">{t(`Workflow.steps.${item.key}.desc`)}</p>
        </div>
    );
}
