import { getServerTranslations } from "@/lib/server-intl";
import { SocialProofClient } from "./SocialProofClient";

const STATS_SCHEMA = [
    { value: "15+", key: "yearsExperience", icon: "shield", color: "#FF6B35" },
    { value: "5k+", key: "activeUnits", icon: "package", color: "#4ECDC4" },
    { value: "20+", key: "regionsCovered", icon: "globe", color: "#FFE66D" },
    { value: "98%", key: "slaAdherence", icon: "check-circle", color: "#95E1D3" },
    { value: "1M+", key: "kmMonthly", icon: "route", color: "#F38181" },
];

export async function SocialProof() {
    const { t } = await getServerTranslations();

    const stats = STATS_SCHEMA.map(stat => ({
        ...stat,
        label: t(`SocialProof.${stat.key}`)
    }));

    return (
        <>
            {/* Hidden SEO content for search engines */}
            <div className="sr-only">
                {stats.map(s => (
                    <div key={s.key}>
                        <h3>{s.value}</h3>
                        <p>{s.label}</p>
                    </div>
                ))}
            </div>
            <SocialProofClient stats={stats} />
        </>
    );
}
