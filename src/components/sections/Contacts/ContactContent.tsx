"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, Send, ChevronDown, ChevronUp, Map as MapIcon, CheckSquare, Square } from "lucide-react";
import Link from "next/link";

interface ContactContentProps {
    titles: {
        pageTitle: string;
        headOffice: string;
        address: string;
        addressValue: string;
        phone: string;
        phoneValue: string;
        hours: string;
        emailValue: string;
        writeUs: string;
        name: string;
        namePlaceholder: string;
        emailLabel: string;
        emailPlaceholder: string;
        message: string;
        messagePlaceholder: string;
        sendMessage: string;
        consentText: string;
        consentLink: string;
        howToGet: string;
        howToGetSteps: string[];
        expand: string;
        collapse: string;
        regionalTitle: string;
        regionalBranches: { name: string; address: string; phone: string }[];
    }
}

export function ContactContent({ titles }: ContactContentProps) {
    const [isBranchesExpanded, setIsBranchesExpanded] = useState(false);
    const [isConsentGiven, setIsConsentGiven] = useState(false);
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
                                    <p className="font-mono text-[10px] uppercase tracking-widest text-anthracite-core/40 mb-2">{titles.emailValue || "Email"}</p>
                                    <p className="text-xl md:text-2xl font-bold tracking-tight hover:text-burnt-terra transition-colors cursor-pointer">
                                        {titles.emailValue}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 group">
                                <div className="w-12 h-12 rounded-2xl bg-anthracite-core/5 flex items-center justify-center group-hover:bg-burnt-terra/10 transition-colors">
                                    <MapIcon className="w-5 h-5 text-anthracite-core group-hover:text-burnt-terra transition-colors" />
                                </div>
                                <div>
                                    <p className="font-mono text-[10px] uppercase tracking-widest text-anthracite-core/40 mb-3">{titles.howToGet}</p>
                                    <div className="text-sm md:text-base font-serif italic text-anthracite-core/80 mt-1 space-y-4">
                                        {titles.howToGetSteps?.map((step, idx) => (
                                            <p key={idx} className="leading-relaxed">{step}</p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Regional Branches Section */}
                    {titles.regionalBranches && titles.regionalBranches.length > 0 && (
                        <section className="mt-16 pt-16 border-t border-anthracite-core/10">
                            <div
                                className="flex items-center justify-between cursor-pointer group"
                                onClick={() => setIsBranchesExpanded(!isBranchesExpanded)}
                            >
                                <h2 className="text-burnt-terra font-mono text-[10px] uppercase tracking-[0.2em] font-bold">
                                    {titles.regionalTitle}
                                </h2>
                                <div className="flex items-center gap-3 text-anthracite-core/60 group-hover:text-burnt-terra transition-colors">
                                    <span className="text-xs font-bold uppercase tracking-wider">
                                        {isBranchesExpanded ? titles.collapse : titles.expand}
                                    </span>
                                    {isBranchesExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                                </div>
                            </div>

                            <AnimatePresence>
                                {isBranchesExpanded && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="grid grid-cols-1 gap-4 mt-8">
                                            {titles.regionalBranches.map((branch, idx) => (
                                                <div key={idx} className="bg-anthracite-core/5 p-6 rounded-2xl hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-anthracite-core/5">
                                                    <h3 className="font-bold text-lg mb-2">{branch.name}</h3>
                                                    <p className="text-sm whitespace-pre-line text-anthracite-core/70 mb-3">{branch.address}</p>
                                                    <p className="font-mono text-sm text-burnt-terra font-bold">{branch.phone}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </section>
                    )}
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

                        <div className="flex items-start gap-3 cursor-pointer group" onClick={() => setIsConsentGiven(!isConsentGiven)}>
                            <div className="mt-1">
                                {isConsentGiven ? (
                                    <CheckSquare className="w-5 h-5 text-burnt-terra" />
                                ) : (
                                    <Square className="w-5 h-5 text-anthracite-core/30 group-hover:text-burnt-terra/50 transition-colors" />
                                )}
                            </div>
                            <p className="text-xs text-anthracite-core/60 leading-relaxed font-mono">
                                {titles.consentText}{" "}
                                <Link href="/privacy" className="text-burnt-terra hover:underline">
                                    {titles.consentLink}
                                </Link>
                            </p>
                        </div>

                        <button
                            type="button"
                            disabled={!isConsentGiven}
                            className={`w-full py-6 rounded-3xl font-bold text-lg transition-all shadow-xl group flex items-center justify-center gap-3 ${isConsentGiven
                                ? "bg-anthracite-core text-white hover:bg-burnt-terra shadow-anthracite-core/20 cursor-pointer"
                                : "bg-anthracite-core/10 text-anthracite-core/40 shadow-none cursor-not-allowed"
                                }`}
                        >
                            {titles.sendMessage}
                            <Send className={`w-5 h-5 transition-transform ${isConsentGiven ? 'group-hover:translate-x-1 group-hover:-translate-y-1' : ''}`} />
                        </button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
}
