"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { ScrollImage } from "@/components/ui/ScrollImage";

interface ServiceItem {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    colSpan: string;
    image: string;
    imageColor: string;
}

interface ServiceListProps {
    services: ServiceItem[];
    titles: {
        catalogTitle: string;
        catalogDescription: string;
        edition: string;
        company: string;
        haveTask: string;
        letsDiscuss: string;
        contactUs: string;
    }
}

export function ServiceList({ services, titles }: ServiceListProps) {
    return (
        <div className="container mx-auto px-6 py-24 md:py-32 max-w-7xl">
            {/* Header */}
            <motion.header
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-24 flex flex-col md:flex-row justify-between items-end border-b border-anthracite-core/10 pb-8"
            >
                <div>
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-text-primary tracking-tighter mb-6 leading-tight">
                        {titles.catalogTitle}
                    </h1>
                    <p className="text-xl md:text-2xl text-text-body font-serif italic max-w-2xl leading-relaxed">
                        {titles.catalogDescription}
                    </p>
                </div>
                <div className="hidden md:block text-right">
                    <span className="block font-mono text-xs opacity-50 uppercase tracking-widest">{titles.edition}</span>
                    <span className="block font-mono text-xs opacity-50 uppercase tracking-widest">{titles.company}</span>
                </div>
            </motion.header>

            {/* Zine Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-min">
                {services.map((service, index) => (
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
                                    <ScrollImage
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover group-hover:scale-105"
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
                                <h2 className="text-2xl lg:text-3xl font-bold text-text-primary mb-4 tracking-tight group-hover:text-burnt-terra transition-colors duration-300">
                                    {service.title}
                                </h2>
                                <p className="text-text-body font-serif italic mb-8 leading-relaxed">
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
                <p className="font-mono text-xs opacity-50 mb-4 tracking-widest">{titles.haveTask}</p>
                <h3 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter">
                    {titles.letsDiscuss}
                </h3>
                <button className="inline-block px-10 py-4 bg-burnt-terra text-text-inverse rounded-full hover:scale-105 active:scale-95 transition-all font-bold tracking-wide shadow-xl shadow-burnt-terra/20">
                    {titles.contactUs}
                </button>
            </div>
        </div>
    );
}
