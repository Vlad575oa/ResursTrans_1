"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send } from "lucide-react";

interface ContactContentProps {
    titles: {
        pageTitle: string;
        headOffice: string;
        address: string;
        addressValue: string;
        phone: string;
        phoneValue: string;
        hours: string;
        email: string;
        writeUs: string;
        name: string;
        namePlaceholder: string;
        emailLabel: string;
        emailPlaceholder: string;
        message: string;
        messagePlaceholder: string;
        sendMessage: string;
    }
}

export function ContactContent({ titles }: ContactContentProps) {
    return (
        <div className="container mx-auto px-6 py-24 md:py-32 max-w-7xl">
            <motion.header
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-24"
            >
                <span className="text-burnt-terra font-mono text-xs uppercase tracking-[0.3em] font-bold mb-4 block">
                    Direct Connection
                </span>
                <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter leading-none">
                    {titles.pageTitle}
                </h1>
            </motion.header>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
                <div className="space-y-16">
                    <section>
                        <h2 className="text-burnt-terra font-mono text-[10px] uppercase tracking-[0.2em] font-bold mb-8">
                            {titles.headOffice}
                        </h2>
                        <div className="space-y-12">
                            <div className="flex items-start gap-6 group">
                                <div className="w-12 h-12 rounded-2xl bg-anthracite-core/5 flex items-center justify-center group-hover:bg-burnt-terra/10 transition-colors">
                                    <MapPin className="w-5 h-5 text-anthracite-core group-hover:text-burnt-terra transition-colors" />
                                </div>
                                <div>
                                    <p className="font-mono text-[10px] uppercase tracking-widest text-anthracite-core/40 mb-2">{titles.address}</p>
                                    <p className="text-xl md:text-2xl font-bold tracking-tight whitespace-pre-line">
                                        {titles.addressValue}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 group">
                                <div className="w-12 h-12 rounded-2xl bg-anthracite-core/5 flex items-center justify-center group-hover:bg-burnt-terra/10 transition-colors">
                                    <Phone className="w-5 h-5 text-anthracite-core group-hover:text-burnt-terra transition-colors" />
                                </div>
                                <div>
                                    <p className="font-mono text-[10px] uppercase tracking-widest text-anthracite-core/40 mb-2">{titles.phone}</p>
                                    <p className="text-xl md:text-2xl font-bold tracking-tight hover:text-burnt-terra transition-colors cursor-pointer">
                                        {titles.phoneValue}
                                    </p>
                                    <p className="text-sm font-serif italic text-anthracite-core/50 mt-1">{titles.hours}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 group">
                                <div className="w-12 h-12 rounded-2xl bg-anthracite-core/5 flex items-center justify-center group-hover:bg-burnt-terra/10 transition-colors">
                                    <Mail className="w-5 h-5 text-anthracite-core group-hover:text-burnt-terra transition-colors" />
                                </div>
                                <div>
                                    <p className="font-mono text-[10px] uppercase tracking-widest text-anthracite-core/40 mb-2">{titles.email}</p>
                                    <p className="text-xl md:text-2xl font-bold tracking-tight hover:text-burnt-terra transition-colors cursor-pointer">
                                        info@resurstrans.ru
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-white p-12 rounded-[40px] shadow-2xl border border-anthracite-core/5"
                >
                    <h2 className="text-3xl font-bold mb-8 tracking-tight">{titles.writeUs}</h2>
                    <form className="space-y-8">
                        <div>
                            <label className="block font-mono text-[10px] uppercase tracking-widest text-anthracite-core/40 mb-3">{titles.name}</label>
                            <input
                                type="text"
                                className="w-full bg-transparent border-b border-anthracite-core/10 py-3 text-lg outline-none focus:border-burnt-terra transition-colors font-serif italic"
                                placeholder={titles.namePlaceholder}
                            />
                        </div>
                        <div>
                            <label className="block font-mono text-[10px] uppercase tracking-widest text-anthracite-core/40 mb-3">{titles.emailLabel}</label>
                            <input
                                type="email"
                                className="w-full bg-transparent border-b border-anthracite-core/10 py-3 text-lg outline-none focus:border-burnt-terra transition-colors font-serif italic"
                                placeholder={titles.emailPlaceholder}
                            />
                        </div>
                        <div>
                            <label className="block font-mono text-[10px] uppercase tracking-widest text-anthracite-core/40 mb-3">{titles.message}</label>
                            <textarea
                                rows={4}
                                className="w-full bg-transparent border-b border-anthracite-core/10 py-3 text-lg outline-none focus:border-burnt-terra transition-colors font-serif italic"
                                placeholder={titles.messagePlaceholder}
                            ></textarea>
                        </div>
                        <button className="w-full py-6 bg-anthracite-core text-white rounded-3xl font-bold text-lg hover:bg-burnt-terra transition-all shadow-xl shadow-anthracite-core/20 group flex items-center justify-center gap-3">
                            {titles.sendMessage}
                            <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
}
