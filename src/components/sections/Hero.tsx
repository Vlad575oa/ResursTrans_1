import { HeroVisuals } from "./Hero/HeroVisuals";
import { getServerTranslations } from "@/lib/server-intl";

export const Hero = async () => {
    const { t } = await getServerTranslations();

    // Visuals translations
    const visualsDict = {
        gpsSignal: t("Hero.visuals.gpsSignal"),
        active: t("Hero.visuals.active"),
        slaRate: t("Hero.visuals.slaRate"),
        telemetry: t("Hero.visuals.telemetry"),
        surface: t("Hero.visuals.surface"),
        highway: t("Hero.visuals.highway"),
        fuelLevel: t("Hero.visuals.fuelLevel"),
        activeUnits: t("Hero.visuals.activeUnits"),
        seeTransport: t("Hero.visuals.seeTransport"),
        smartOutsourcing: t("Hero.visuals.smartOutsourcing"),
        logo: t("Navigation.logo"),
        unmuteTooltip: t("Hero.visuals.unmuteTooltip"),
        muteTooltip: t("Hero.visuals.muteTooltip"),
        replayTooltip: t("Hero.visuals.replayTooltip")
    };

    return (
        <section className="relative overflow-hidden font-sans antialiased text-white dark:text-slate-900 bg-[#101622] dark:bg-background">
            {/* Background Image Layer */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat dark:hidden"
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAJBK94MihqMW1wwl5gGFOEFRUYX789hlz5YTWsMV5vacSEN3rwXy5beuBGQ_5JmymV5SVu311nqqqKxPQIj4YV-kMmLGiTJn2JkkzOMS6YOtAgD-CaygFvvkPru2xtUghKbcWwSgAb-wjBVFMG3snB4YaPf2BqwGJHyf48sXZlHYY4FfbFgJxwrddv-uMET-1NqXjjyrqUDuRu9_1xa05AM2L5UlRECj5jVRs2CN0br_JHmsnoxgLQkt0G7sDhtxYcC5qbNDVSM6E")' }}
            />
            {/* Side Gradient Layer */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#101622] via-[#101622]/80 to-transparent dark:hidden" />
            {/* Vertical Gradient Layer (Bottom Fade) */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#101622] to-[#101622]/40 dark:hidden" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pb-16 pt-32 lg:pt-40 lg:pb-16">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                    {/* Left Content */}
                    <div className="flex flex-col gap-6 lg:gap-8 relative z-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 dark:bg-navy/5 w-fit border border-white/10 dark:border-navy/10">
                            <span className="size-2 rounded-full bg-primary-main animate-pulse"></span>
                            <span className="text-xs font-bold text-slate-300 dark:text-navy uppercase tracking-wide">{t("Hero.premiumLogistics")}</span>
                        </div>
                        <h1
                            className="text-white dark:text-text-primary text-4xl sm:text-5xl lg:text-[3.5rem] font-black leading-[1.1] tracking-tight drop-shadow-lg dark:drop-shadow-none"
                            dangerouslySetInnerHTML={{
                                __html: t("Hero.title")
                                    .replace(/<br\s*\/?>/g, '<br />')
                                    .replace(/<gradient>(.*?)<\/gradient>/g, '<span class="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent dark:text-text-primary dark:!bg-none">$1</span>')
                                    .replace(/<glow>(.*?)<\/glow>/g, '<span class="text-primary-main drop-shadow-[0_0_20px_rgba(59,130,246,0.5)] dark:drop-shadow-none">$1</span>')
                            }}
                        />
                        <p className="text-slate-300 dark:text-text-secondary text-lg sm:text-xl font-normal leading-relaxed max-w-xl drop-shadow dark:drop-shadow-none">
                            {t("Hero.description")}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mt-4">
                            {/* Sand Theme Buttons */}
                            <a href="#cta" className="dark:hidden btn-puffy btn-puffy-primary text-white font-bold py-4 px-8 rounded-xl w-full sm:w-auto text-center inline-flex justify-center items-center shadow-lg shadow-primary-main/20">
                                {t("Hero.getAudit")}
                            </a>
                            <a href="#calculator" className="dark:hidden bg-white/5 backdrop-blur-sm border-white/20 hover:border-white/40 hover:bg-white/10 text-white font-bold py-4 px-8 rounded-xl w-full sm:w-auto text-center inline-flex justify-center items-center transition-all border">
                                {t("Hero.calculateSavings")}
                            </a>

                            {/* Dark Theme Buttons (Original) */}
                            <a href="#cta" className="hidden dark:inline-flex btn-puffy btn-puffy-primary text-text-inverse font-bold py-4 px-8 rounded-xl w-full sm:w-auto text-center justify-center items-center">
                                {t("Hero.getAudit")}
                            </a>
                            <a href="#calculator" className="hidden dark:inline-flex btn-puffy btn-puffy-secondary text-text-primary font-bold py-4 px-8 rounded-xl w-full sm:w-auto text-center justify-center items-center">
                                {t("Hero.calculateSavings")}
                            </a>
                        </div>

                        {/* Secondary benefits ticker removed for decluttering */}

                    </div>

                    {/* Right Content */}
                    <HeroVisuals dict={visualsDict} />
                </div>
            </div>
        </section>
    );
};

