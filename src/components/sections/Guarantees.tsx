import { ShieldCheck, FileText, Gavel, Eye } from "lucide-react";
import { getServerTranslations } from "@/lib/server-intl";

export async function Guarantees() {
    const { t } = await getServerTranslations();

    const guarantees = [
        { key: "insurance", icon: ShieldCheck },
        { key: "sla", icon: FileText },
        { key: "liability", icon: Gavel },
        { key: "riskControl", icon: Eye }
    ];

    return (
        <section className="pt-12 pb-24 md:py-24 px-4 bg-section-3">
            <div className="max-w-7xl mx-auto">
                <div className="mb-10 md:mb-16 text-center max-w-3xl mx-auto">
                    <h2 className="text-primary-main font-bold text-sm tracking-widest uppercase mb-3">{t("Guarantees.badge")}</h2>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
                        {t("Guarantees.title")}
                    </h1>
                    <p className="text-lg text-slate-600">
                        {t("Guarantees.description")}
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {guarantees.map((item) => (
                        <div key={item.key} className="group p-8 rounded-xl bg-background-light hover:shadow-xl transition-all duration-300 border border-transparent hover:border-primary-main/20">
                            <div className="w-14 h-14 rounded-lg bg-white flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                                <item.icon className="w-8 h-8 text-primary-main" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{t(`Guarantees.list.${item.key}.title`)}</h3>
                            <p className="text-slate-600 leading-relaxed">
                                {t(`Guarantees.list.${item.key}.desc`)}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
