import { HeroVisuals } from "./Hero/HeroVisuals";
import { HeroTicker } from "./Hero/HeroTicker";
import { HeroBenefitsTicker } from "./Hero/HeroBenefitsTicker";
import { getServerTranslations } from "@/lib/server-intl";

export const Hero = async () => {
    const { t } = await getServerTranslations();

    // Ticker translations
    const tickerDict = {
        trustedBy: t("Hero.ticker.trustedBy"),
        marketLeaders: t("Hero.ticker.marketLeaders")
    };

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
        <section className="relative overflow-hidden font-sans antialiased text-slate-900 bg-background">

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pb-16 pt-24 lg:pt-36 lg:pb-16">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                    {/* Left Content */}
                    <div className="flex flex-col gap-6 lg:gap-8 relative z-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy/5 w-fit border border-navy/10">
                            <span className="size-2 rounded-full bg-primary-main animate-pulse"></span>
                            <span className="text-xs font-bold text-navy uppercase tracking-wide">{t("Hero.premiumLogistics")}</span>
                        </div>
                        <h1 className="text-text-primary text-4xl sm:text-5xl lg:text-[3.5rem] font-black leading-[1.1] tracking-tight">
                            {t("Hero.title")}
                        </h1>
                        <p className="text-text-secondary text-lg sm:text-xl font-normal leading-relaxed max-w-xl">
                            {t("Hero.description")}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href="#cta" className="btn-puffy btn-puffy-primary text-text-inverse font-bold py-4 px-8 rounded-xl w-full sm:w-auto text-center inline-flex justify-center items-center">
                                {t("Hero.getAudit")}
                            </a>
                            <a href="#calculator" className="btn-puffy btn-puffy-secondary text-text-primary font-bold py-4 px-8 rounded-xl w-full sm:w-auto text-center inline-flex justify-center items-center">
                                {t("Hero.calculateSavings")}
                            </a>
                        </div>

                        {/* Secondary benefits ticker removed for decluttering */}

                    </div>

                    {/* Right Content */}
                    <HeroVisuals dict={visualsDict} />
                </div>
            </div>

            {/* Full-bleed ticker strip */}
            <HeroTicker dict={tickerDict} />
        </section>
    );
};
