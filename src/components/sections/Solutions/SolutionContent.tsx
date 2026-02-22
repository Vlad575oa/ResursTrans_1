"use client";

import { motion } from "framer-motion";
import { Zap, Activity, Cpu } from "lucide-react";

interface SolutionItem {
    key: string;
    icon: React.ReactNode;
    color: string;
}

interface SolutionContentProps {
    title: string;
    description: string;
    sections: Record<string, { title: string; desc: string }>;
    contactUs: string;
}

export function SolutionContent({ title, description, sections, contactUs }: SolutionContentProps) {
    const SOLUTIONS = [
        {
            key: "gps",
            icon: <Activity className="w-8 h-8" />,
            color: "bg-burnt-terra/10 text-burnt-terra"
        },
        {
            key: "fuel",
            icon: <Zap className="w-8 h-8" />,
            color: "bg-safe-green/10 text-safe-green"
        },
        {
            key: "autoControl",
            icon: <Cpu className="w-8 h-8" />,
            color: "bg-transformative-teal/10 text-transformative-teal"
        }
    ];

    return (
        <div className="container mx-auto px-6 py-24 md:py-32 max-w-7xl relative z-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-3xl mb-24"
            >
                <span className="text-burnt-terra font-mono text-xs uppercase tracking-[0.3em] font-bold mb-4 block">
                    Technological Edge
                </span>
                <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter leading-none">
                    {title}
                </h1>
                <p className="text-xl md:text-2xl text-white/60 font-serif italic leading-relaxed">
                    {description}
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {SOLUTIONS.map((item, index) => (
                    <motion.div
                        key={item.key}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 transition-all group backdrop-blur-sm"
                    >
                        <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                            {item.icon}
                        </div>
                        <h3 className="text-2xl font-bold mb-4 tracking-tight">
                            {sections[item.key]?.title}
                        </h3>
                        <p className="text-white/40 font-serif italic leading-relaxed">
                            {sections[item.key]?.desc}
                        </p>
                    </motion.div>
                ))}
            </div>

            {/* Tech Visual Element (Ecosystem) */}
            <div className="mt-32 relative h-[240px] rounded-3xl overflow-hidden border border-white/10 group">
                <div className="absolute inset-0 bg-[url('/images/solutions/bg_photo.webp')] bg-cover bg-center grayscale opacity-50 transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-anthracite-core/80 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-10 right-10 flex flex-col md:flex-row justify-between items-end gap-6">
                    <div className="max-w-md">
                        <div className="flex gap-2 mb-3">
                            <div className="w-2 h-2 rounded-full bg-safe-green animate-pulse" />
                            <span className="font-mono text-[10px] uppercase tracking-widest text-safe-green">System Status: Active</span>
                        </div>
                        <h2 className="text-2xl font-bold tracking-tight mb-2">Единая экосистема управления</h2>
                        <p className="text-white/60 text-xs font-serif italic">Интеграция всех модулей в реальном времени для максимальной прозрачности и контроля.</p>
                    </div>
                    <button className="px-6 py-3 bg-white text-anthracite-core rounded-full text-sm font-bold hover:bg-burnt-terra hover:text-white transition-all shadow-xl">
                        {contactUs}
                    </button>
                </div>
            </div>
        </div>
    );
}
