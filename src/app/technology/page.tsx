import { Navigation } from "@/components/ui/Navigation";
import { AiAssistant } from "@/components/ui/AiAssistant";
import { getServerTranslations } from "@/lib/server-intl";
import { TechnologyContent } from "@/components/sections/Technology/TechnologyContent";
import { Cpu, Network, Database } from "lucide-react";

export default async function TechnologyPage() {
    const { t } = await getServerTranslations();

    const techStack = [
        {
            title: "PREDICTIVE_ANALYTICS",
            desc: t("TechnologyPage.stack.predictive.desc") || "Алгоритмы машинного обучения для прогнозирования отказов техники.",
            icon: <Cpu className="w-5 h-5" />,
            status: "RUNNING",
            metric: "99.8% ACCURACY"
        },
        {
            title: "DIGITAL_PLATFORMS",
            desc: t("TechnologyPage.stack.platforms.desc") || "Единая экосистема управления автопарком и персоналом.",
            icon: <Network className="w-5 h-5" />,
            status: "ONLINE",
            metric: "24/7 UPTIME"
        },
        {
            title: "BLOCKCHAIN_LOG",
            desc: t("TechnologyPage.stack.blockchain.desc") || "Неизменяемый реестр операций для абсолютной прозрачности (DPP).",
            icon: <Database className="w-5 h-5" />,
            status: "SECURE",
            metric: "SHA-256 VERIFIED"
        }
    ];

    const titles = {
        pageTitle: t("TechnologyPage.pageTitle") || "Технологии",
        systemArchitecture: "SYSTEM_ARCHITECTURE // V.2.0",
        systemsOperational: "ALL SYSTEMS OPERATIONAL",
        manifesto: t("TechnologyPage.manifesto") || "Мы не просто внедряем софт. Мы строим цифровую нервную систему вашего бизнеса. Каждый байт данных работает на безопасность и эффективность.",
        techSpecs: "Technical Specs",
        architecture: "Architecture",
        latency: "Latency",
        security: "Security",
    };

    return (
        <main className="min-h-screen bg-background text-foreground font-mono selection:bg-[#0F766E] selection:text-white relative overflow-hidden">
            <Navigation />
            <AiAssistant />

            {/* Background Grid */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none"
                style={{ backgroundImage: 'linear-gradient(#F3F4F6 1px, transparent 1px), linear-gradient(90deg, #F3F4F6 1px, transparent 1px)', backgroundSize: '40px 40px' }}
            />

            <TechnologyContent titles={titles} techStack={techStack} />
        </main>
    );
}

