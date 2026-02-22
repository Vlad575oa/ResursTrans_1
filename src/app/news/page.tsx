import { Navigation } from "@/components/ui/Navigation";
import { Footer } from "@/components/sections/Footer";
import { AiAssistant } from "@/components/ui/AiAssistant";
import { getServerTranslations } from "@/lib/server-intl";
import { NewsContent } from "@/components/sections/News/NewsContent";

export default async function NewsPage() {
    const { t } = await getServerTranslations();

    const newsItems = [
        {
            id: "1",
            key: "news1",
            image: "/images/news/hub.webp",
            title: t("NewsPage.news1.title"),
            date: t("NewsPage.news1.date"),
            description: t("NewsPage.news1.description"),
        },
        {
            id: "2",
            key: "news2",
            image: "/images/news/ai.webp",
            title: t("NewsPage.news2.title"),
            date: t("NewsPage.news2.date"),
            description: t("NewsPage.news2.description"),
        },
        {
            id: "3",
            key: "news3",
            image: "/images/news/results.webp",
            title: t("NewsPage.news3.title"),
            date: t("NewsPage.news3.date"),
            description: t("NewsPage.news3.description"),
        }
    ];

    const titles = {
        pageTitle: t("NewsPage.pageTitle"),
        readMore: t("NewsPage.readMore"),
    };

    return (
        <main className="min-h-screen bg-cloud-dancer text-anthracite-core selection:bg-burnt-terra selection:text-white">
            <Navigation />
            <AiAssistant />

            <NewsContent news={newsItems} titles={titles} />

            <Footer />
        </main>
    );
}

