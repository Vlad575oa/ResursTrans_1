import { TrendingUp, Map, Wrench, Timer, Gavel, UserX, AlertCircle, ArrowRight } from "lucide-react";
import { getServerTranslations } from "@/lib/server-intl";

const LOSSES_SCHEMA = [
    { key: "fuelWaste", icon: <TrendingUp className="w-5 h-5" /> },
    { key: "inefficientRoutes", icon: <Map className="w-5 h-5" /> },
    { key: "unscheduledRepairs", icon: <Wrench className="w-5 h-5" /> },
    { key: "downtime", icon: <Timer className="w-5 h-5" /> },
    { key: "fines", icon: <Gavel className="w-5 h-5" /> },
    { key: "humanFactor", icon: <UserX className="w-5 h-5" /> }
];

// How long each item stays "lit" before moving to next one (ms)
const GLOW_CYCLE = 1500;

export const PainPoints = async () => {
    const { t } = await getServerTranslations();

    const losses = LOSSES_SCHEMA.map(item => ({
        ...item,
        title: t(`PainPoints.${item.key}.title`),
        desc: t(`PainPoints.${item.key}.desc`)
    }));

    return (
        <section className="py-8 bg-section-1 font-sans antialiased overflow-hidden" id="checkpoints">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-6">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-main/10 w-fit mb-2">
                            <span className="text-xs font-bold text-primary-main uppercase tracking-wide">{t("PainPoints.hiddenCosts")}</span>
                        </div>
                        <h2 className="text-navy text-3xl md:text-5xl font-black leading-tight tracking-tight mb-2 text-balance">
                            {t("PainPoints.title")}
                        </h2>
                    </div>
                </div>

                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    {/* Losses Grid */}
                    <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
                        {losses.map((loss, i) => {
                            // Assign staggered delays matching the 1.5s interval
                            const delayStyle = { animationDelay: `${i * 1.5}s` };
                            return (
                                <div
                                    key={i}
                                    className="group flex gap-4 bg-white p-5 rounded-xl border border-slate-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-main/30 animate-loss-glow"
                                    style={delayStyle}
                                >
                                    <div
                                        className="size-10 shrink-0 rounded-lg flex items-center justify-center transition-all duration-300 bg-primary-main/10 text-primary-main animate-loss-icon-glow"
                                        style={delayStyle}
                                    >
                                        {loss.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-base font-bold text-navy mb-1">{loss.title}</h3>
                                        <p className="text-slate-500 text-sm leading-relaxed">{loss.desc}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Highlight Box */}
                    <div className="lg:col-span-5 relative h-full min-h-[400px]">
                        <div className="bg-navy text-white rounded-2xl p-8 lg:p-10 h-full relative overflow-hidden shadow-2xl flex flex-col justify-between group">
                            {/* Decorative background circle */}
                            <div className="absolute -right-20 -top-20 size-64 bg-primary-main/10 border-[40px] border-primary-main/10 rounded-full blur-2xl transition-all duration-1000 group-hover:scale-150 animate-pulse"></div>

                            <div className="relative z-10 mb-8">
                                {/* Brighter AlertCircle icon with strong glow */}
                                <div className="size-12 rounded-full flex items-center justify-center mb-6 bg-primary-main/20 shadow-[0_0_24px_6px_rgba(102,176,50,0.3)] animate-pulse">
                                    <AlertCircle className="w-6 h-6 text-primary-main" />
                                </div>

                                <h3 className="text-2xl sm:text-3xl font-bold leading-snug mb-4">
                                    "{t("PainPoints.quote")}"
                                </h3>
                                <div className="text-primary-main font-bold text-xl flex items-center gap-2">
                                    <span>30%</span> {t("PainPoints.savingsPotential")}
                                </div>
                            </div>

                            <div className="relative z-10 mt-auto pt-8 border-t border-white/10">
                                {/* Pulsing CTA button */}
                                <a
                                    href="#cta"
                                    className="w-full bg-white text-navy font-bold py-4 rounded-xl shadow-lg flex items-center justify-center gap-2 relative overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:-translate-y-[2px]"
                                    style={{
                                        animation: "btn-pulse-shadow 1.8s infinite ease-in-out"
                                    }}
                                >
                                    {/* Shimmer sweep effect */}
                                    <span
                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-60 pointer-events-none"
                                        style={{
                                            animation: "shimmer-sweep 2.2s infinite linear"
                                        }}
                                    />
                                    <span className="relative z-10">{t("PainPoints.checkFleet")}</span>
                                    <ArrowRight className="w-5 h-5 ml-1 relative z-10" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
