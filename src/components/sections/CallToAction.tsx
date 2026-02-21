"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";

export function CallToAction() {
    const { t } = useLanguage();

    return (
        <section 
            className="relative py-16 px-4 bg-cover bg-center bg-fixed"
            style={{
                backgroundImage: `url('/solutions_bg_cinematic_1771685396206.png')`
            }}
        >
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-900/90 to-slate-800/90"></div>
            </div>
            <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="flex-1 text-center md:text-left">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-6 leading-tight">
                        {t("CallToAction.title")}
                    </h2>
                    <p className="text-xl text-slate-300 max-w-2xl mb-8">
                        {t("CallToAction.description")}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <button className="bg-primary hover:bg-orange-600 text-white min-w-[200px] h-14 rounded-lg text-lg font-bold transition-all shadow-[0_0_20px_rgba(245,122,0,0.4)] hover:shadow-[0_0_30px_rgba(245,122,0,0.6)] flex items-center justify-center gap-2">
                            {t("CallToAction.submitRequest")}
                            <span className="material-symbols-outlined">arrow_forward</span>
                        </button>
                        <button className="bg-white/10 hover:bg-white/20 border border-white/20 text-white min-w-[200px] h-14 rounded-lg text-lg font-bold transition-all backdrop-blur-sm flex items-center justify-center">
                            {t("CallToAction.requestQuote")}
                        </button>
                    </div>
                </div>
                {/* Decorative Element (Optional Stats/Badge) */}
                <div className="hidden lg:block">
                    <div className="bg-white/10 backdrop-blur-md border border-white/10 p-8 rounded-2xl max-w-xs rotate-3 hover:rotate-0 transition-transform duration-500">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="size-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                                <span className="material-symbols-outlined text-3xl">trending_down</span>
                            </div>
                            <div>
                                <p className="text-sm text-slate-400 uppercase font-semibold">{t("CallToAction.averageSavings")}</p>
                                <p className="text-3xl font-bold text-white">30%</p>
                            </div>
                        </div>
                        <p className="text-sm text-slate-300">{t("CallToAction.roiDescription")}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
