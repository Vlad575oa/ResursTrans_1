import { getServerTranslations } from "@/lib/server-intl";
import { TrustMarqueeClient } from "./TrustMarqueeClient";

export const TrustMarquee = async () => {
    const { t } = await getServerTranslations();

    const dict = {
        trustedBy: t("Hero.ticker.trustedBy"),
        marketLeaders: t("Hero.ticker.marketLeaders")
    };

    return (
        <TrustMarqueeClient dict={dict} />
    );
};
