"use client";

import { motion } from "framer-motion";
import { Navigation } from "@/components/ui/Navigation";
import { Footer } from "@/components/sections/Footer";
import { AiAssistant } from "@/components/ui/AiAssistant";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { MapPin, Phone, Mail, Send } from "lucide-react";

export default function ContactsPage() {
    const { t } = useLanguage();

    return (
        <main className="min-h-screen bg-cloud-dancer text-anthracite-core selection:bg-burnt-terra selection:text-white">
            <Navigation />
            <AiAssistant />

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
                        {t("ContactsPage.pageTitle")}
                    </h1>
                </motion.header>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
                    {/* Contact Info blocks */}
                    <div className="space-y-16">
                        <section>
                            <h2 className="text-burnt-terra font-mono text-[10px] uppercase tracking-[0.2em] font-bold mb-8">
                                {t("ContactsPage.headOffice")}
                            </h2>
                            <div className="space-y-12">
                                <div className="flex items-start gap-6 group">
                                    <div className="w-12 h-12 rounded-2xl bg-anthracite-core/5 flex items-center justify-center group-hover:bg-burnt-terra/10 transition-colors">
                                        <MapPin className="w-5 h-5 text-anthracite-core group-hover:text-burnt-terra transition-colors" />
                                    </div>
                                    <div>
                                        <p className="font-mono text-[10px] uppercase tracking-widest text-anthracite-core/40 mb-2">{t("ContactsPage.address")}</p>
                                        <p className="text-xl md:text-2xl font-bold tracking-tight whitespace-pre-line">
                                            {t("ContactsPage.addressValue")}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6 group">
                                    <div className="w-12 h-12 rounded-2xl bg-anthracite-core/5 flex items-center justify-center group-hover:bg-burnt-terra/10 transition-colors">
                                        <Phone className="w-5 h-5 text-anthracite-core group-hover:text-burnt-terra transition-colors" />
                                    </div>
                                    <div>
                                        <p className="font-mono text-[10px] uppercase tracking-widest text-anthracite-core/40 mb-2">{t("ContactsPage.phone")}</p>
                                        <p className="text-xl md:text-2xl font-bold tracking-tight hover:text-burnt-terra transition-colors cursor-pointer">
                                            {t("ContactsPage.phoneValue")}
                                        </p>
                                        <p className="text-sm font-serif italic text-anthracite-core/50 mt-1">{t("ContactsPage.hours")}</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6 group">
                                    <div className="w-12 h-12 rounded-2xl bg-anthracite-core/5 flex items-center justify-center group-hover:bg-burnt-terra/10 transition-colors">
                                        <Mail className="w-5 h-5 text-anthracite-core group-hover:text-burnt-terra transition-colors" />
                                    </div>
                                    <div>
                                        <p className="font-mono text-[10px] uppercase tracking-widest text-anthracite-core/40 mb-2">{t("ContactsPage.email")}</p>
                                        <p className="text-xl md:text-2xl font-bold tracking-tight hover:text-burnt-terra transition-colors cursor-pointer">
                                            info@resurstrans.ru
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white p-12 rounded-[40px] shadow-2xl border border-anthracite-core/5"
                    >
                        <h2 className="text-3xl font-bold mb-8 tracking-tight">{t("ContactsPage.writeUs")}</h2>
                        <form className="space-y-8">
                            <div>
                                <label className="block font-mono text-[10px] uppercase tracking-widest text-anthracite-core/40 mb-3">{t("ContactsPage.name")}</label>
                                <input
                                    type="text"
                                    className="w-full bg-transparent border-b border-anthracite-core/10 py-3 text-lg outline-none focus:border-burnt-terra transition-colors font-serif italic"
                                    placeholder={t("ContactsPage.namePlaceholder")}
                                />
                            </div>
                            <div>
                                <label className="block font-mono text-[10px] uppercase tracking-widest text-anthracite-core/40 mb-3">{t("ContactsPage.emailLabel")}</label>
                                <input
                                    type="email"
                                    className="w-full bg-transparent border-b border-anthracite-core/10 py-3 text-lg outline-none focus:border-burnt-terra transition-colors font-serif italic"
                                    placeholder={t("ContactsPage.emailPlaceholder")}
                                />
                            </div>
                            <div>
                                <label className="block font-mono text-[10px] uppercase tracking-widest text-anthracite-core/40 mb-3">{t("ContactsPage.message")}</label>
                                <textarea
                                    rows={4}
                                    className="w-full bg-transparent border-b border-anthracite-core/10 py-3 text-lg outline-none focus:border-burnt-terra transition-colors font-serif italic"
                                    placeholder={t("ContactsPage.messagePlaceholder")}
                                ></textarea>
                            </div>
                            <button className="w-full py-6 bg-anthracite-core text-white rounded-3xl font-bold text-lg hover:bg-burnt-terra transition-all shadow-xl shadow-anthracite-core/20 group flex items-center justify-center gap-3">
                                {t("ContactsPage.sendMessage")}
                                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
