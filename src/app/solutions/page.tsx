import { Navigation } from "@/components/ui/Navigation";
import { AiAssistant } from "@/components/ui/AiAssistant";
import { getServerTranslations } from "@/lib/server-intl";
import { SolutionContent } from "@/components/sections/Solutions/SolutionContent";

export default async function SolutionsPage() {
    const { t } = await getServerTranslations();

    const sections = {
        gps: {
            title: t("SolutionsPage.sections.gps.title"),
            desc: t("SolutionsPage.sections.gps.desc"),
        },
        fuel: {
            title: t("SolutionsPage.sections.fuel.title"),
            desc: t("SolutionsPage.sections.fuel.desc"),
        },
        autoControl: {
            title: t("SolutionsPage.sections.autoControl.title"),
            desc: t("SolutionsPage.sections.autoControl.desc"),
        }
    };

    return (
        <main className="min-h-screen bg-anthracite-core text-cloud-dancer selection:bg-burnt-terra selection:text-white relative overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[url('/images/solutions/bg_photo.webp')] bg-cover bg-center opacity-[0.1] mix-blend-overlay grayscale blur-xl scale-110" />
                <div className="absolute inset-0 bg-gradient-to-b from-anthracite-core via-transparent to-anthracite-core" />
            </div>

            <Navigation />
            <AiAssistant />

            <SolutionContent
                title={t("SolutionsPage.title")}
                description={t("SolutionsPage.description")}
                sections={sections}
                contactUs={t("ServicesPage.contactUs")}
            />
        </main>
    );
}

