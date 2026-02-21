"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Navigation } from "@/components/ui/Navigation"; // Assuming I need to add this if it's not in layout
import { AiAssistant } from "@/components/ui/AiAssistant";
import Head from "next/head";

const SERVICES = [
    {
        id: "01",
        title: "Аутсорсинг",
        subtitle: "Ответственность за результат",
        description: "Передача непрофильных функций профессионалам. Мы берем на себя управление автопарком, персоналом и рисками.",
        colSpan: "col-span-1 md:col-span-2",
        imageColor: "bg-[#4A5F3C]" // Olive Spruce
    },
    {
        id: "02",
        title: "Аренда",
        subtitle: "Техника по запросу",
        description: "Гибкие решения для пиковых нагрузок. Более 10 000 единиц спецтехники, готовой к работе.",
        colSpan: "col-span-1",
        imageColor: "bg-[#2C2C2C]" // Silhouette
    },
    {
        id: "03",
        title: "Управление",
        subtitle: "Интеллектуальная логистика",
        description: "Цифровые платформы для контроля и диспетчеризации. Полная прозрачность процессов в реальном времени.",
        colSpan: "col-span-1",
        imageColor: "bg-[#0F766E]" // Transformative Teal
    },
    {
        id: "04",
        title: "Консалтинг",
        subtitle: "Экспертиза рынка",
        description: "Аудит транспортных процессов и внедрение стратегий эффективности. 18 лет опыта в одной команде.",
        colSpan: "col-span-1 md:col-span-2",
        imageColor: "bg-[#1C1C1C]" // Anthracite
    }
];

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-[#E5E7EB] text-[#1C1C1C] selection:bg-[#4A5F3C] selection:text-white">
            <Navigation />
            <AiAssistant />

            <div className="container mx-auto px-4 py-24 md:py-32">
                {/* Header */}
                <motion.header
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-24 flex flex-col md:flex-row justify-between items-end border-b border-[#1C1C1C]/10 pb-8"
                >
                    <div>
                        <h1 className="text-6xl md:text-8xl font-serif font-medium tracking-tight mb-4">
                            Каталог<br />Услуг
                        </h1>
                        <p className="text-lg md:text-xl text-[#1C1C1C]/60 max-w-md font-sans">
                            Комплексные решения для транспортной инфраструктуры. Эффективность, измеримая в цифрах.
                        </p>
                    </div>
                    <div className="hidden md:block text-right">
                        <span className="block font-mono text-sm opacity-50">EDITION 2026 // VOL. 1</span>
                        <span className="block font-mono text-sm opacity-50">RESURS-TRANS GLOBAL</span>
                    </div>
                </motion.header>

                {/* Zine Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-min">
                    {SERVICES.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`${service.colSpan} group relative flex flex-col`}
                        >
                            {/* Card Visual */}
                            <div className="relative overflow-hidden aspect-[4/3] md:aspect-auto md:h-[400px] mb-6 rounded-sm">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
                                    className={`w-full h-full ${service.imageColor} relative`}
                                >
                                    {/* Abstract Texture/Pattern Overlay */}
                                    <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                                    <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent" />

                                    {/* Hover Reveal Content */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                                            <ArrowUpRight className="text-white w-6 h-6" />
                                        </div>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Card Content */}
                            <div className="flex justify-between items-start border-t border-[#1C1C1C]/20 pt-4">
                                <div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="font-mono text-xs text-[#1C1C1C]/40 border border-[#1C1C1C]/10 px-1 rounded-sm">
                                            {service.id}
                                        </span>
                                        <span className="font-sans text-xs uppercase tracking-wider text-[#1C1C1C]/50">
                                            {service.subtitle}
                                        </span>
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-serif mb-3 group-hover:text-[#4A5F3C] transition-colors duration-300">
                                        {service.title}
                                    </h2>
                                    <p className="text-[#1C1C1C]/70 font-sans leading-relaxed max-w-sm text-sm md:text-base">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Footer / Connect */}
                <div className="mt-32 p-12 bg-[#1C1C1C] text-[#E5E7EB] text-center">
                    <p className="font-mono text-sm opacity-50 mb-4">ЕСТЬ ЗАДАЧА?</p>
                    <h3 className="text-4xl md:text-6xl font-serif mb-8">
                        Давайте обсудим ваше решение.
                    </h3>
                    <button className="inline-block px-8 py-4 bg-[#4A5F3C] text-white rounded-full hover:bg-[#3A4F2C] transition-colors font-medium tracking-wide">
                        Связаться с нами
                    </button>
                </div>
            </div>
        </main>
    );
}
