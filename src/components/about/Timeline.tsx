"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function Timeline() {
    const { t } = useLanguage();
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end end"],
    });

    const YEARS = ["2008", "2009", "2010", "2011", "2014", "2018", "2021", "2024", "2026", "2027"];

    const IMAGES: Record<string, string> = {
        "2008": "/images/generated/history_2008_1771761428782.webp",
        "2009": "/images/generated/history_2009_1771761449850.webp",
        "2010": "/images/timeline/2010.webp",
        "2011": "/images/generated/history_2011_1771761463877.webp",
        "2014": "/images/timeline/2014.webp",
        "2018": "/images/timeline/2018.webp",
        "2021": "/images/timeline/2021.webp",
        "2024": "/images/timeline/2024.webp",
        "2026": "/images/generated/history_2026_1771761478380.webp",
        "2027": "/images/generated/history_2027_1771761495347.webp"
    };

    return (
        <section ref={containerRef} className="py-24 bg-white relative selection:bg-burnt-terra selection:text-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-8 relative">
                {/* Central Line */}
                <div className="absolute left-[24px] md:left-1/2 top-0 bottom-0 w-[1px] bg-anthracite-core/10 transform md:-translate-x-1/2" />

                {/* Animated progress line */}
                <motion.div
                    className="absolute left-[24px] md:left-1/2 top-0 w-[1px] bg-burnt-terra origin-top transform md:-translate-x-1/2 z-0 shadow-[0_0_10px_rgba(189,64,37,0.5)]"
                    style={{ scaleY: scrollYProgress, bottom: 0 }}
                />

                <div className="space-y-48">
                    {YEARS.map((year, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <TimelineItem
                                key={year}
                                year={year}
                                isEven={isEven}
                                image={IMAGES[year]}
                                title={t(`AboutPage.timeline.${year}.title`)}
                                description={t(`AboutPage.timeline.${year}.description`)}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

function TimelineItem({ year, title, description, image, isEven }: {
    year: string,
    title: string,
    description: string,
    image: string,
    isEven: boolean
}) {
    const itemRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: itemRef,
        offset: ["start 85%", "center center"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
    const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);

    return (
        <motion.div
            ref={itemRef}
            style={{ y, opacity, scale }}
            className={`flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24 relative z-10 ${isEven ? "md:flex-row-reverse" : ""
                }`}
        >
            {/* Year Node */}
            <div className="absolute left-[24px] md:left-1/2 w-4 h-4 bg-white border-2 border-burnt-terra rounded-full transform -translate-x-1/2 flex items-center justify-center z-20 shadow-[0_0_15px_rgba(189,64,37,0.3)]">
                <div className="w-1.5 h-1.5 bg-burnt-terra rounded-full animate-pulse" />
            </div>

            {/* Content Sidebar */}
            <div className={`w-full md:w-[45%] ml-16 md:ml-0 ${isEven ? "md:text-left" : "md:text-right"}`}>
                <h3 className="text-5xl md:text-7xl font-black text-anthracite-core/10 mb-2 tracking-tighter transition-colors group-hover:text-burnt-terra duration-500">
                    {year}
                </h3>
                <h4 className="text-2xl md:text-3xl font-bold text-anthracite-core mb-6 tracking-tight">
                    {title}
                </h4>
                <p className="text-anthracite-core/60 leading-relaxed text-lg font-serif italic">
                    {description}
                </p>
            </div>

            {/* Image Sidebar */}
            <div className={`w-full md:w-[45%] ml-16 md:ml-0 ${isEven ? "md:pr-12" : "md:pl-12"}`}>
                <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-anthracite-core/5 group">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-anthracite-core/40 via-transparent to-transparent opacity-60" />
                </div>
            </div>
        </motion.div>
    );
}
