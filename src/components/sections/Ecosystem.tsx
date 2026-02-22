import { Share2, FileCheck, Activity, BarChart3, ArrowRight } from "lucide-react";
import { getServerTranslations } from "@/lib/server-intl";

export const Ecosystem = async () => {
    const { t } = await getServerTranslations();

    const FEATURES = [
        t("Ecosystem.features.0"),
        t("Ecosystem.features.1"),
        t("Ecosystem.features.2"),
        t("Ecosystem.features.3"),
        t("Ecosystem.features.4"),
        t("Ecosystem.features.5"),
        t("Ecosystem.features.6"),
        t("Ecosystem.features.7"),
        t("Ecosystem.features.8"),
        t("Ecosystem.features.9")
    ];

    return (
        <section id="tech" className="py-32 bg-cloud-dancer relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center mb-16">
                    <span className="inline-block py-1 px-3 rounded-full bg-anthracite-core/5 text-anthracite-core text-xs font-mono font-bold tracking-widest uppercase mb-4">
                        {t("Ecosystem.digitalInfrastructure")}
                    </span>
                    <h2 className="text-3xl md:text-5xl font-black text-anthracite-core mb-4 tracking-tight">
                        {t("Ecosystem.title")}
                    </h2>
                    <p className="text-anthracite-core/60 text-lg md:text-xl max-w-3xl mx-auto font-serif italic">
                        {t("Ecosystem.description")}
                    </p>
                </div>

                {/* Adaptive Interface Visual */}
                <div className="relative w-full max-w-5xl mx-auto mb-20">
                    <div
                        className="relative rounded-2xl bg-white border border-foreground/10 shadow-2xl overflow-hidden aspect-[16/9] md:aspect-[21/9] flex group animate-fade-in-up"
                    >
                        {/* Sidebar */}
                        <div className="w-16 md:w-20 border-r border-white/5 flex flex-col items-center py-6 gap-6">
                            <div className="w-8 h-8 rounded-full bg-burnt-terra flex items-center justify-center text-text-inverse font-bold text-xs">R</div>
                            <div className="w-1 h-8 bg-white/10 rounded-full" />
                            <div className="w-1 h-8 bg-white/10 rounded-full" />
                        </div>

                        {/* Content */}
                        <div className="flex-1 p-6 md:p-8">
                            <div className="flex justify-between items-center mb-8">
                                <div>
                                    <div className="text-text-muted text-xs uppercase tracking-widest mb-1 font-mono">{t("Ecosystem.realTimeAnalytics")}</div>
                                    <div className="text-text-primary font-mono text-2xl font-bold italic">99.8% ACCURACY</div>
                                </div>
                                <div className="flex gap-2">
                                    <div className="px-4 py-2 rounded-xl bg-safe-green/20 text-safe-green text-xs font-bold flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-safe-green animate-pulse" />
                                        SYSTEM OPTIMAL
                                    </div>
                                </div>
                            </div>

                            {/* Abstract Charts */}
                            <div className="grid grid-cols-4 gap-4 h-32 md:h-48">
                                <div className="col-span-3 bg-white/5 rounded-2xl border border-white/5 p-6 flex items-end gap-2">
                                    {[20, 40, 30, 70, 50, 90, 60, 85, 45, 100, 55, 75].map((h, i) => (
                                        <div
                                            key={i}
                                            className="flex-1 bg-gradient-to-t from-burnt-terra/20 via-burnt-terra/60 to-burnt-terra rounded-full animate-grow-up"
                                            style={{
                                                '--chart-height': `${h}%`,
                                                animationDelay: `${i * 0.05 + 0.3}s`
                                            } as any}
                                        />
                                    ))}
                                </div>
                                <div className="bg-white/5 rounded-2xl border border-white/5 p-6 flex flex-col justify-center items-center">
                                    <div className="w-24 h-24 rounded-full border-4 border-white/5 border-t-burnt-terra animate-spin-slow flex items-center justify-center text-text-primary font-mono font-bold text-2xl">30%</div>
                                    <div className="text-text-muted text-[10px] uppercase tracking-widest mt-4">Savings Potential</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Checkmark List */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
                        {FEATURES.map((feature, i) => (
                            <div
                                key={i}
                                className="flex items-start gap-3 p-4 hover:bg-white/50 transition-colors rounded-xl border border-transparent hover:border-anthracite-core/5 animate-fade-in-right"
                                style={{ animationDelay: `${i * 0.05 + 0.5}s` }}
                            >
                                <div className="w-6 h-6 rounded-full bg-safe-green/20 flex items-center justify-center flex-shrink-0 mt-1">
                                    <span className="text-safe-green text-xs font-bold">✓</span>
                                </div>
                                <span className="text-text-body font-serif italic text-lg leading-tight">{feature}</span>
                            </div>
                        ))}
                    </div>

                    <p className="text-center mt-12 text-text-muted font-mono text-xs uppercase tracking-widest">
                        {t("Ecosystem.footer")}
                    </p>
                </div>
            </div>
        </section>
    );
};
