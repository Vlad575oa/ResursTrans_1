import { Navigation } from "@/components/ui/Navigation";
import { Footer } from "@/components/sections/Footer";
import { AiAssistant } from "@/components/ui/AiAssistant";
import { getServerTranslations } from "@/lib/server-intl";
import { ContactContent } from "@/components/sections/Contacts/ContactContent";

export default async function ContactsPage() {
    const { t } = await getServerTranslations();

    const titles = {
        pageTitle: t("ContactsPage.pageTitle"),
        headOffice: t("ContactsPage.headOffice"),
        address: t("ContactsPage.address"),
        addressValue: t("ContactsPage.addressValue"),
        phone: t("ContactsPage.phone"),
        phoneValue: t("ContactsPage.phoneValue"),
        hours: t("ContactsPage.hours"),
        email: t("ContactsPage.email"),
        writeUs: t("ContactsPage.writeUs"),
        name: t("ContactsPage.name"),
        namePlaceholder: t("ContactsPage.namePlaceholder"),
        emailLabel: t("ContactsPage.emailLabel"),
        emailPlaceholder: t("ContactsPage.emailPlaceholder"),
        message: t("ContactsPage.message"),
        messagePlaceholder: t("ContactsPage.messagePlaceholder"),
        sendMessage: t("ContactsPage.sendMessage"),
    };

    return (
        <main className="min-h-screen bg-cloud-dancer text-anthracite-core selection:bg-burnt-terra selection:text-white">
            <Navigation />
            <AiAssistant />

            <ContactContent titles={titles} />

            <Footer />
        </main>
    );
}

