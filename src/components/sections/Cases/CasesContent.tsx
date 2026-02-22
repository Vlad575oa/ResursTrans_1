"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface CaseItem {
    key: string;
    image: string;
    metrics: string[];
    title: string;
    subtitle: string;
    desc: string;
}

interface CasesContentProps {
    cases: CaseItem[];
    titles: {
        title: string;
        description: string;
        contactUs: string;
    };
}

export function CasesContent({ cases, titles }: CasesContentProps) {
    return (
        <div className="container mx-auto px-6 py-24 md:py-32 max-w-7xl">
            <header className="mb-24 flex flex-col md:flex-row justify-between items-end">
                <div className="max-w-2xl">
                    <span className="text-burnt-terra font-mono text-xs uppercase tracking-widest font-bold mb-4 block">Archive 2024-2025</span>
                    <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter leading-[0.85]">
                        {titles.title}
                    </h1>
                    <p className="text-xl text-anthracite-core/60 font-serif italic">
                        {titles.description}
                    </p>
                </div>
            </header>

            <div className="grid grid-cols-1 gap-24">
                {cases.map((item, index) => (
                    <motion.section
                        key={item.key}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="group"
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            {/* Image / Visual */}
                            <div className="relative aspect-[16/10] overflow-hidden rounded-3xl bg-neutral-200">
                                <div className="absolute inset-0 bg-anthracite-core/20 group-hover:bg-transparent transition-colors duration-700 z-10" />
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                                />
                                <div className="absolute bottom-6 right-6 z-20">
                                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-2xl group-hover:rotate-45 transition-transform duration-500">
                                        <ArrowUpRight className="w-5 h-5 text-anthracite-core" />
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div>
                                <div className="flex items-center gap-4 mb-6">
                                    <span className="w-8 h-[1px] bg-burnt-terra" />
                                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] font-bold text-anthracite-core/40">
                                        {item.subtitle}
                                    </span>
                                </div>
                                <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight group-hover:text-burnt-terra transition-colors">{item.title}</h2>
                                <p className="text-lg text-anthracite-core/70 mb-8 font-serif italic leading-relaxed">
                                    {item.desc}
                                </p>

                                <div className="flex gap-4">
                                    {item.metrics.map(metric => (
                                        <div key={metric} className="px-4 py-2 bg-white rounded-full border border-anthracite-core/5 text-xs font-mono font-bold tracking-tight shadow-sm">
                                            {metric}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.section>
                ))}
            </div>

            <div className="mt-32 pt-24 border-t border-anthracite-core/10 text-center">
                <h3 className="text-2xl font-bold mb-8">Хотите такой же результат?</h3>
                <button className="px-12 py-5 bg-anthracite-core text-white rounded-full font-bold hover:bg-burnt-terra transition-all shadow-2xl shadow-anthracite-core/20 active:scale-95">
                    {titles.contactUs}
                </button>
            </div>
        </div>
    );
}
