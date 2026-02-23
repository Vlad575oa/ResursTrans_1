import { getServerTranslations } from "@/lib/server-intl";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default async function TermsOfUsePage() {
    const { t } = await getServerTranslations();

    const content = t("TermsOfUse.content");
    const sections = content.split(/\n\n(?=\d+\.\s)/);

    return (
        <div className="container mx-auto px-6 pt-24 pb-32 max-w-4xl min-h-screen">
            <div className="mb-8">
                <Link href="/" className="inline-flex items-center gap-2 text-text-secondary hover:text-primary transition-colors text-sm font-semibold uppercase tracking-widest">
                    <ArrowLeft className="w-4 h-4" />
                    {t("Navigation.home")}
                </Link>
            </div>

            <h1 className="text-4xl md:text-5xl font-black mb-12 tracking-tight text-text-primary">
                {t("TermsOfUse.title")}
            </h1>
            <div className="prose prose-lg prose-slate max-w-none text-text-secondary">
                {sections.map((section, index) => {
                    const lines = section.split('\n');
                    const heading = lines[0];
                    const content = lines.slice(1).join('\n');

                    return (
                        <div key={index} className="mb-8">
                            <h2 className="text-xl font-bold text-text-primary mb-4">{heading}</h2>
                            <div className="whitespace-pre-line leading-relaxed">{content}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
