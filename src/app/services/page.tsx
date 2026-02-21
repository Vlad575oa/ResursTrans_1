"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Navigation } from "@/components/ui/Navigation";
import { AiAssistant } from "@/components/ui/AiAssistant";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function ServicesPage() {
    const { t } = useLanguage();

    const SERVICES = [
        {
            id: "01",
            title: t("ServicesPage.services.01.title"),
            subtitle: t("ServicesPage.services.01.subtitle"),
            description: t("ServicesPage.services.01.description"),
            colSpan: "col-span-1 md:col-span-2",
            image: "/images/services/outsourcing.png",
            imageColor: "bg-[#4A5F3C]"
        },
        {
            id: "02",
            title: t("ServicesPage.services.02.title"),
            subtitle: t("ServicesPage.services.02.subtitle"),
            description: t("ServicesPage.services.02.description"),
            colSpan: "col-span-1",
            image: "/images/services/rental.png",
            imageColor: "bg-[#2C2C2C]"
        },
        {
            id: "03",
            title: t("ServicesPage.services.03.title"),
            subtitle: t("ServicesPage.services.03.subtitle"),
            description: t("ServicesPage.services.03.description"),
            colSpan: "col-span-1",
            image: "/images/services/management.png",
            imageColor: "bg-[#0F766E]"
        },
        {
            id: "04",
            title: t("ServicesPage.services.04.title"),
            subtitle: t("ServicesPage.services.04.subtitle"),
            description: t("ServicesPage.services.04.description"),
            colSpan: "col-span-1 md:col-span-2",
            image: "/images/services/consulting.png",
            imageColor: "bg-[#1C1C1C]"
        }
    ];

    return (
        <main className="min-h-screen bg-cloud-dancer text-anthracite-core selection:bg-burnt-terra selection:text-white">
            <Navigation />
            <AiAssistant />

            <div className="container mx-auto px-6 py-24 md:py-32 max-w-7xl">
                {/* Header */}
                <motion.header
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-24 flex flex-col md:flex-row justify-between items-end border-b border-anthracite-core/10 pb-8"
                >
                    <div>
                        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-4 leading-[0.9]">
                            {t("ServicesPage.catalogTitle")}
                        </h1>
                        <p className="text-lg md:text-xl text-anthracite-core/60 max-w-md font-serif italic">
                            {t("ServicesPage.catalogDescription")}
                        </p>
                    </div>
                    <div className="hidden md:block text-right">
                        <span className="block font-mono text-xs opacity-50 uppercase tracking-widest">{t("ServicesPage.edition")}</span>
                        <span className="block font-mono text-xs opacity-50 uppercase tracking-widest">{t("ServicesPage.company")}</span>
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
                            <div className="relative overflow-hidden aspect-[4/3] md:aspect-auto md:h-[400px] mb-6 rounded-2xl border border-anthracite-core/5 shadow-sm">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
                                    className={`w-full h-full relative`}
                                >
                                    {service.image ? (
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <div className={`w-full h-full ${service.imageColor}`} />
                                    )}
                                    <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                                    <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent" />

                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                                            <ArrowUpRight className="text-white w-6 h-6" />
                                        </div>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Card Content */}
                            <div className="flex justify-between items-start border-t border-anthracite-core/10 pt-4">
                                <div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="font-mono text-xs text-anthracite-core/40 border border-anthracite-core/10 px-1 rounded-sm">
                                            {service.id}
                                        </span>
                                        <span className="font-mono text-[10px] uppercase tracking-widest text-anthracite-core/50 font-bold">
                                            {service.subtitle}
                                        </span>
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-bold mb-3 group-hover:text-burnt-terra transition-colors duration-300 tracking-tight">
                                        {service.title}
                                    </h2>
                                    <p className="text-anthracite-core/70 leading-relaxed max-w-sm text-sm md:text-base font-serif italic">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Footer / Connect */}
                <div className="mt-32 p-12 bg-anthracite-core text-cloud-dancer rounded-3xl text-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-burnt-terra opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                    <p className="font-mono text-xs opacity-50 mb-4 tracking-widest">{t("ServicesPage.haveTask")}</p>
                    <h3 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter">
                        {t("ServicesPage.letsDiscuss")}
                    </h3>
                    <button className="inline-block px-10 py-4 bg-burnt-terra text-white rounded-full hover:scale-105 active:scale-95 transition-all font-bold tracking-wide shadow-xl shadow-burnt-terra/20">
                        {t("ServicesPage.contactUs")}
                    </button>
                </div>
            </div>
        </main>
    );
}
