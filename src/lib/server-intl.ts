import { cookies } from "next/headers";
import en from "@/messages/en.json";
import ru from "@/messages/ru.json";

const messages = { en, ru };

export async function getServerTranslations() {
    // Next.js 15 requires awaiting cookies()
    const cookieStore = await cookies();
    const localeString = cookieStore.get("NEXT_LOCALE")?.value;
    const locale = (localeString === "en") ? "en" : "ru";

    const t = (key: string): string => {
        const keys = key.split(".");
        let value: any = messages[locale];

        for (const k of keys) {
            if (value && typeof value === 'object' && k in value) {
                value = value[k];
            } else {
                return key; // Fallback to key if not found
            }
        }

        return typeof value === "string" ? value : key;
    };

    return { t, locale };
}
