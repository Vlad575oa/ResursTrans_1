import { getServerTranslations } from "@/lib/server-intl";
import { TimelineClient } from "./TimelineClient";

export async function HistoryTimeline() {
    const { t } = await getServerTranslations();

    const history = [
        { year: 2008, title: t("Timeline.2008.title"), desc: t("Timeline.2008.description") },
        { year: 2010, title: t("Timeline.2010.title"), desc: t("Timeline.2010.description") },
        { year: 2014, title: t("Timeline.2014.title"), desc: t("Timeline.2014.description") },
        { year: 2018, title: t("Timeline.2018.title"), desc: t("Timeline.2018.description") },
        { year: 2021, title: t("Timeline.2021.title"), desc: t("Timeline.2021.description") },
        { year: 2024, title: t("Timeline.2024.title"), desc: t("Timeline.2024.description") },
        { year: 2027, title: t("Timeline.2027.title"), desc: t("Timeline.2027.description") },
    ];

    return (
        <>
            {/* SEO Content for search engines */}
            <div className="sr-only">
                {history.map(item => (
                    <div key={item.year}>
                        <h2>{item.year}: {item.title}</h2>
                        <p>{item.desc}</p>
                    </div>
                ))}
            </div>
            <TimelineClient history={history} />
        </>
    );
}
