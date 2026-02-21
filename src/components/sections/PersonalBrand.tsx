"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";

export const PersonalBrand = () => {
    const { t } = useLanguage();
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    // Parallax effects
    const yText = useTransform(scrollYProgress, [0, 1], [0, -50]);
    const yImage = useTransform(scrollYProgress, [0, 1], [50, -100]);
    const rotateImage = useTransform(scrollYProgress, [0, 0.5, 1], [-5, 0, 5]);

    return (
        <section
            id="personal"
            ref={containerRef}
            className="min-h-screen py-24 bg-liquid-silver text-anthracite relative flex flex-col justify-center overflow-hidden"
        >
            <div className="container mx-auto px-6 max-w-5xl relative z-10">
                {/* Header as a "Note" title */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 border-b border-anthracite/10 pb-4"
                >
                    <h2 className="text-sm font-mono uppercase tracking-widest text-anthracite/50 mb-2">
                        {t("PersonalBrand.note")}
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-sans font-medium">
                        {t("PersonalBrand.title")}
                    </h3>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left: Text Content - Moves slower */}
                    <motion.div style={{ y: yText }} className="space-y-6 font-serif text-lg leading-relaxed text-anthracite/80">
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            {t("PersonalBrand.quote")}
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            {t("PersonalBrand.description")}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            viewport={{ once: true }}
                            className="pt-8"
                        >
                            <a href="#" className="inline-flex items-center gap-2 text-olive-spruce hover:underline underline-offset-4 group">
                                {t("PersonalBrand.readBlog")} <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Right: "Polaroid" Style Images - Moves faster and rotates */}
                    <div className="relative">
                        <motion.div
                            style={{ y: yImage, rotate: rotateImage }}
                            className="bg-white p-4 shadow-2xl shadow-anthracite/10 aspect-[4/5] max-w-sm mx-auto transform origin-center"
                        >
                            <div className="w-full h-full bg-neutral-200 relative overflow-hidden grayscale contrast-125">
                                {/* Placeholder for People Image */}
                                <div className="absolute inset-0 flex items-center justify-center text-anthracite/20 font-mono text-sm text-center p-4">
                                    {t("PersonalBrand.photoExpert")}
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-tr from-anthracite/10 to-transparent mix-blend-multiply" />
                            </div>
                            <div className="mt-4 flex justify-between items-end font-mono text-xs text-anthracite/60">
                                <span>{t("PersonalBrand.chiefEngineer")}</span>
                                <span>{t("PersonalBrand.year")}</span>
                            </div>
                        </motion.div>

                        {/* Decorative elements */}
                        <motion.div
                            style={{ y: useTransform(scrollYProgress, [0, 1], [0, -150]) }}
                            className="absolute -z-10 top-0 right-0 w-64 h-64 bg-olive-spruce/5 rounded-full blur-3xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
