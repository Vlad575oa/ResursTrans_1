"use client";

import { motion } from "framer-motion";
import { Search, PenTool, ArrowRightLeft, Cpu, BarChart, TrendingUp } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";

export const ManagementModel = () => {
    const { t } = useLanguage();

    const STEPS = [
        { icon: <Search />, title: t("ManagementModel.steps.01.title"), desc: t("ManagementModel.steps.01.desc") },
        { icon: <PenTool />, title: t("ManagementModel.steps.02.title"), desc: t("ManagementModel.steps.02.desc") },
        { icon: <Cpu />, title: t("ManagementModel.steps.03.title"), desc: t("ManagementModel.steps.03.desc") },
        { icon: <TrendingUp />, title: t("ManagementModel.steps.04.title"), desc: t("ManagementModel.steps.04.desc") }
    ];

    return (
        <section className="py-32 bg-cloud-dancer text-anthracite-core border-t border-anthracite-core/5">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="mb-16 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-anthracite-core/5 text-anthracite-core text-xs font-mono font-bold tracking-widest uppercase mb-4">
                        {t("ManagementModel.roadmap")}
                    </span>
                    <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight">{t("ManagementModel.title")}</h2>
                    <p className="text-anthracite-core/60 text-lg md:text-xl font-serif italic">{t("ManagementModel.description")}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {STEPS.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-anthracite-core/5 group relative overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-1 h-full bg-burnt-terra/10 group-hover:bg-burnt-terra transition-colors" />
                            <div className="w-12 h-12 bg-cloud-dancer text-anthracite-core rounded-xl flex items-center justify-center mb-6 group-hover:text-burnt-terra group-hover:bg-burnt-terra/5 transition-all">
                                {step.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3 tracking-tight">{step.title}</h3>
                            <p className="text-anthracite-core/70 leading-relaxed font-serif italic">{step.desc}</p>

                            <div className="mt-8 text-[10px] font-mono text-black/20 uppercase tracking-[0.2em]">Phase 0{i + 1}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
