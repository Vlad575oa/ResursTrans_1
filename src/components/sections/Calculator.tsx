"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator as CalcIcon, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useHaptic } from "@/hooks/useHaptic";
import { useLanguage } from "@/components/providers/LanguageProvider";

export const Calculator = () => {
    const { trigger } = useHaptic();
    const { t, locale } = useLanguage();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        vehicles: 50,
        mileage: 5000,
        consumption: 30,
        region: t("Calculator.regions.0")
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleCalculate = () => {
        trigger();
        setIsSubmitted(true);
    };

    // Simple math for "wow" effect
    const estimatedSavings = Math.floor(formData.vehicles * (formData.mileage / 100) * formData.consumption * 60 * 0.3);

    const REGIONS = [
        t("Calculator.regions.0"),
        t("Calculator.regions.1"),
        t("Calculator.regions.2"),
        t("Calculator.regions.3"),
        t("Calculator.regions.4")
    ];

    return (
        <section id="calculator" className="py-32 bg-anthracite-core relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="text-center mb-16">
                    <span className="inline-block py-1 px-3 rounded-full bg-burnt-terra/10 text-burnt-terra text-xs font-mono font-bold tracking-widest uppercase mb-4">
                        {t("Calculator.financialAudit")}
                    </span>
                    <h2 className="text-4xl md:text-6xl font-black text-cloud-dancer mb-4 tracking-tight">
                        {t("Calculator.title")}
                    </h2>
                </div>

                <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-[40px] overflow-hidden backdrop-blur-xl shadow-2xl">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="p-8 md:p-12 border-r border-white/10">
                            {!isSubmitted ? (
                                <div className="space-y-8">
                                    <div>
                                        <label className="text-xs uppercase tracking-widest text-white/40 font-bold mb-4 block">{t("Calculator.vehicles")}: <span className="text-white text-lg ml-2 font-mono">{formData.vehicles}</span></label>
                                        <input
                                            type="range"
                                            min="10"
                                            max="1000"
                                            value={formData.vehicles}
                                            onChange={(e) => setFormData({ ...formData, vehicles: parseInt(e.target.value) })}
                                            className="w-full accent-burnt-terra bg-white/10 h-1 rounded-full appearance-none cursor-pointer"
                                        />
                                    </div>

                                    <div>
                                        <label className="text-xs uppercase tracking-widest text-white/40 font-bold mb-4 block">{t("Calculator.mileage")}: <span className="text-white text-lg ml-2 font-mono">{formData.mileage}</span></label>
                                        <input
                                            type="range"
                                            min="1000"
                                            max="20000"
                                            step="500"
                                            value={formData.mileage}
                                            onChange={(e) => setFormData({ ...formData, mileage: parseInt(e.target.value) })}
                                            className="w-full accent-burnt-terra bg-white/10 h-1 rounded-full appearance-none cursor-pointer"
                                        />
                                    </div>

                                    <div>
                                        <label className="text-xs uppercase tracking-widest text-white/40 font-bold mb-4 block">{t("Calculator.consumption")}: <span className="text-white text-lg ml-2 font-mono">{formData.consumption}</span></label>
                                        <input
                                            type="range"
                                            min="5"
                                            max="60"
                                            value={formData.consumption}
                                            onChange={(e) => setFormData({ ...formData, consumption: parseInt(e.target.value) })}
                                            className="w-full accent-burnt-terra bg-white/10 h-1 rounded-full appearance-none cursor-pointer"
                                        />
                                    </div>

                                    <div>
                                        <label className="text-xs uppercase tracking-widest text-white/40 font-bold mb-4 block">{t("Calculator.region")}</label>
                                        <select
                                            value={formData.region}
                                            onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-burnt-terra transition-colors"
                                        >
                                            {REGIONS.map((region, i) => (
                                                <option key={i} className="bg-anthracite-core">{region}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <Button
                                        onClick={handleCalculate}
                                        className="w-full bg-burnt-terra text-white hover:bg-burnt-terra/90 rounded-none py-8 text-xl tracking-widest uppercase font-black"
                                    >
                                        {t("Calculator.calculate")}
                                    </Button>
                                </div>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="h-full flex flex-col items-center justify-center text-center py-12"
                                >
                                    <div className="w-20 h-20 rounded-full bg-safe-green/20 flex items-center justify-center mb-6">
                                        <CheckCircle2 className="w-10 h-10 text-safe-green" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4">{t("Calculator.thankYou")}</h3>
                                    <p className="text-white/60 font-serif italic mb-8">
                                        {t("Calculator.processingMessage")}
                                    </p>
                                    <button
                                        onClick={() => setIsSubmitted(false)}
                                        className="text-burnt-terra font-mono text-xs uppercase tracking-[0.2em] border-b border-burnt-terra/20 pb-1"
                                    >
                                        ← {t("Calculator.changeData")}
                                    </button>
                                </motion.div>
                            )}
                        </div>

                        <div className="p-8 md:p-12 bg-white/5 flex flex-col justify-center relative overflow-hidden">
                            {/* Abstract Graphic Backdrop */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-burnt-terra/20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />

                            <div className="relative z-10">
                                <div className="text-xs uppercase tracking-widest text-white/40 font-bold mb-2">{t("Calculator.estimatedSavings")}</div>
                                <div className="text-6xl md:text-7xl font-black text-cloud-dancer mb-4 font-mono tracking-tighter">
                                    ₽{estimatedSavings >= 1000000 ? (estimatedSavings / 1000000).toFixed(1) + "M" : estimatedSavings.toLocaleString(locale === "ru" ? "ru-RU" : "en-US")}
                                </div>
                                <div className="p-6 bg-burnt-terra rounded-2xl">
                                    <div className="text-white text-sm font-bold uppercase tracking-tight mb-2">{t("Calculator.roiPotential")}</div>
                                    <p className="text-white/80 text-xs font-serif italic leading-relaxed">
                                        {t("Calculator.roiDescription")}
                                    </p>
                                </div>

                                <div className="mt-12 space-y-4">
                                    <div className="flex items-center gap-3 text-white/40">
                                        <ArrowRight className="w-4 h-4 text-burnt-terra" />
                                        <span className="text-[10px] uppercase tracking-widest">{t("Calculator.auditAll")}</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-white/40">
                                        <ArrowRight className="w-4 h-4 text-burnt-terra" />
                                        <span className="text-[10px] uppercase tracking-widest">{t("Calculator.strategyDevelopment")}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
