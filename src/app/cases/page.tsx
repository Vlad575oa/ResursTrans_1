import { Navigation } from "@/components/ui/Navigation";
import { AiAssistant } from "@/components/ui/AiAssistant";
import { getServerTranslations } from "@/lib/server-intl";
import { CasesContent } from "@/components/sections/Cases/CasesContent";

export default async function CasesPage() {
    const { t } = await getServerTranslations();

    const cases = [
        {
            key: "mining",
            image: "/images/cases/mining.webp",
            metrics: ["-25% Downtime", "+12% Efficiency"],
            title: t("CasesPage.items.mining.title"),
            subtitle: t("CasesPage.items.mining.subtitle"),
            desc: t("CasesPage.items.mining.desc"),
        },
        {
            key: "retail",
            image: "/images/generated/retail_logistics_center_1771761409651.webp",
            metrics: ["-15% Last Mile", "100% SLA"],
            title: t("CasesPage.items.retail.title"),
            subtitle: t("CasesPage.items.retail.subtitle"),
            desc: t("CasesPage.items.retail.desc"),
        },
        {
            key: "oil_gas",
            image: "/images/generated/cases_oil_gas_1771761623089.webp",
            metrics: ["-30% Transport Costs", "24/7 Operations"],
            title: t("CasesPage.items.oil_gas.title"),
            subtitle: t("CasesPage.items.oil_gas.subtitle"),
            desc: t("CasesPage.items.oil_gas.desc"),
        },
        {
            key: "construction",
            image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80",
            metrics: ["-40% Downtime", "+25% Utilization"],
            title: t("CasesPage.items.construction.title"),
            subtitle: t("CasesPage.items.construction.subtitle"),
            desc: t("CasesPage.items.construction.desc"),
        },
        {
            key: "agriculture",
            image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1200&q=80",
            metrics: ["-35% Time Loss", "Harvest Ready"],
            title: t("CasesPage.items.agriculture.title"),
            subtitle: t("CasesPage.items.agriculture.subtitle"),
            desc: t("CasesPage.items.agriculture.desc"),
        },
        {
            key: "passenger",
            image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=1200&q=80",
            metrics: ["99.8% On-Time", "SLA Guaranteed"],
            title: t("CasesPage.items.passenger.title"),
            subtitle: t("CasesPage.items.passenger.subtitle"),
            desc: t("CasesPage.items.passenger.desc"),
        }
    ];

    const titles = {
        title: t("CasesPage.title"),
        description: t("CasesPage.description"),
        contactUs: t("ServicesPage.contactUs"),
    };

    return (
        <main className="min-h-screen bg-liquid-silver text-anthracite-core selection:bg-burnt-terra selection:text-white">
            <Navigation />
            <AiAssistant />

            <CasesContent cases={cases} titles={titles} />
        </main>
    );
}

