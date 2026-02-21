"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";

export function Faq() {
    const { t } = useLanguage();

    const faqItems = ["q1", "q2", "q3", "q4"];

    return (
        <section className="py-16 px-4 bg-background-light relative overflow-hidden">
            {/* Abstract background pattern */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-50">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-slate-300/10 rounded-full blur-2xl"></div>
            </div>
            <div className="max-w-4xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">{t("Faq.title")}</h2>
                    <p className="text-slate-600">{t("Faq.description")}</p>
                </div>
                <div className="flex flex-col gap-4">
                    {faqItems.map((item, index) => (
                        <details
                            key={item}
                            className="group bg-white rounded-lg border border-slate-200 open:border-primary/50 transition-colors duration-300"
                            open={index === 0}
                        >
                            <summary className="flex items-center justify-between p-6 cursor-pointer select-none">
                                <h3 className="text-lg font-semibold text-slate-900 group-hover:text-primary transition-colors">
                                    {t(`Faq.${item}.question`)}
                                </h3>
                                <span className="material-symbols-outlined text-slate-400 group-open:rotate-180 group-open:text-primary transition-transform duration-300">expand_more</span>
                            </summary>
                            <div className="px-6 pb-6 pt-0 text-slate-600 leading-relaxed">
                                {t(`Faq.${item}.answer`)}
                            </div>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
}
