import { Navigation } from "@/components/ui/Navigation";
import { Footer } from "@/components/sections/Footer";
import { Timeline } from "@/components/about/Timeline";
import { AboutHero } from "@/components/about/AboutHero";
import { getServerTranslations } from "@/lib/server-intl";

export default async function AboutPage() {
    const { t } = await getServerTranslations();

    return (
        <div className="bg-cloud-dancer text-anthracite-core antialiased overflow-x-hidden min-h-screen selection:bg-burnt-terra selection:text-white">
            <Navigation />

            <main className="pt-20">
                {/* Hero section - Client Component for animations */}
                <AboutHero
                    title={t("AboutPage.heroTitle")}
                    description={t("AboutPage.heroDescription")}
                />

                {/* Timeline section */}
                <Timeline />
            </main>

            <Footer />
        </div>
    );
}

