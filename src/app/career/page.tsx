import { Navigation } from "@/components/ui/Navigation";
import { Footer } from "@/components/sections/Footer";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, ShieldCheck, Briefcase, CheckCircle2, MessageSquare, Users } from "lucide-react";
import { getServerTranslations } from "@/lib/server-intl";

export const metadata = {
    title: 'Карьера | РесурсЛогистика',
    description: 'Мы создаем все условия для профессионального роста сотрудников и предпочитаем растить кадры внутри компании. Узнайте больше о карьере в РесурсЛогистика.',
};

export default async function CareerPage() {
    const { t } = await getServerTranslations();

    return (
        <div className="bg-background-light text-slate-900 antialiased overflow-x-hidden min-h-screen">
            <Navigation />

            <main className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link href="/" className="inline-flex items-center text-slate-500 hover:text-primary transition-colors mb-8 group">
                    <ArrowLeft className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1" />
                    {t("CareerPage.backHome") || "Возврат на главную"}
                </Link>

                {/* Hero Section */}
                <section className="mb-20">
                    <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tight">
                        {t("CareerPage.heroTitle") || "Карьера в"} <span className="text-primary">РесурсЛогистика</span>
                    </h1>
                    <p className="text-xl text-slate-600 max-w-3xl leading-relaxed">
                        {t("CareerPage.heroDesc") || "Мы создаем все условия для профессионального роста сотрудников и предпочитаем растить кадры внутри компании. В «РесурсЛогистика» много историй успеха, когда рядовые сотрудники стали руководителями."}
                    </p>
                </section>

                {/* Quick Links / Policies */}
                <section className="grid md:grid-cols-2 gap-6 mb-20">
                    <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex items-center gap-6 cursor-pointer group">
                        <div className="h-16 w-16 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                            <ShieldCheck size={32} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">{t("CareerPage.policy") || "Кадровая политика"}</h3>
                        </div>
                    </div>
                    <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex items-center gap-6 cursor-pointer group">
                        <div className="h-16 w-16 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                            <Briefcase size={32} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">{t("CareerPage.vacancies") || "Наши вакансии"}</h3>
                        </div>
                    </div>
                </section>

                {/* Statistics */}
                <section className="bg-slate-900 text-white rounded-3xl p-12 md:p-16 mb-20 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <div className="grid md:grid-cols-3 gap-12 relative z-10">
                        <div className="flex flex-col gap-2">
                            <span className="text-slate-400 font-medium">{t("CareerPage.stats.more") || "Более"}</span>
                            <div className="text-5xl font-black text-white">13 000</div>
                            <div className="text-lg text-slate-300 mt-2">{t("CareerPage.stats.employees") || "сотрудников"}</div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="text-slate-400 font-medium">{t("CareerPage.stats.more") || "Более"}</span>
                            <div className="text-5xl font-black text-white">220</div>
                            <div className="text-lg text-slate-300 mt-2">{t("CareerPage.stats.professions") || "профессий и направлений работы"}</div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="text-slate-400 font-medium">{t("CareerPage.stats.more") || "Более"}</span>
                            <div className="text-5xl font-black text-white">350</div>
                            <div className="text-lg text-slate-300 mt-2">{t("CareerPage.stats.programs") || "образовательных программ в Корпоративном университете"}</div>
                        </div>
                    </div>
                </section>

                {/* Corporate Life */}
                <section className="mb-20">
                    <h2 className="text-3xl font-black text-slate-900 mb-8 uppercase tracking-wide">{t("CareerPage.corpTitle") || "Корпоративная жизнь"}</h2>
                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        <div>
                            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                {t("CareerPage.corpLifeDesc") || "В компании на регулярной основе проводятся мероприятия, направленные на повышение корпоративного духа:"}
                            </p>
                            <ul className="space-y-4 mb-8">
                                {[
                                    t("CareerPage.activities.teambuilding") || 'Тимбилдинги',
                                    t("CareerPage.activities.events") || 'Корпоративные мероприятия',
                                    t("CareerPage.activities.workshops") || 'Мастер-классы',
                                    t("CareerPage.activities.volunteering") || 'Волонтерские и социальные акции'
                                ].map((item, index) => (
                                    <li key={index} className="flex items-center gap-3 text-lg text-slate-800 font-medium">
                                        <CheckCircle2 className="w-6 h-6 text-primary" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                            <p className="text-lg text-slate-600 leading-relaxed mb-8">
                                {t("CareerPage.contestDesc") || "Кроме того, в «РесурсЛогистика» принято организовывать ежегодный конкурс профессионального мастерства для водительского состава, по результатам которого победителей награждают грамотами и денежными призами, а также направляют на Межрегиональный конкурс профмастерства «Ресурс Групп» в г. Сочи."}
                            </p>
                            <div className="pt-6 border-t border-slate-200">
                                <p className="text-slate-800 font-medium mb-4">{t("CareerPage.socialInvite") || "Узнать больше о корпоративной жизни компании можно на наших страницах в соцсетях:"}</p>
                                <div className="flex gap-4">
                                    <a href="#" className="h-12 w-12 bg-white rounded-full flex items-center justify-center text-primary shadow-sm hover:bg-primary-main hover:text-white transition-all border border-slate-200 hover:border-transparent">
                                        <MessageSquare className="w-6 h-6" />
                                    </a>
                                    <a href="#" className="h-12 w-12 bg-white rounded-full flex items-center justify-center text-primary shadow-sm hover:bg-primary-main hover:text-white transition-all border border-slate-200 hover:border-transparent">
                                        <Users className="w-6 h-6" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="bg-primary/5 border border-primary/20 rounded-3xl p-10 md:p-16 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                        {t("CareerPage.ctaTitle") || "Если вы хотите работать в нашей команде,"}
                    </h2>
                    <p className="text-xl text-slate-600 mb-8">
                        {t("CareerPage.ctaDesc") || "пожалуйста, направьте нам своё резюме"}
                    </p>
                    <Button className="bg-primary hover:bg-primary-dark text-white font-bold py-4 px-10 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                        {t("CareerPage.ctaButton") || "Заполнить форму"}
                    </Button>
                </section>
            </main>

            <Footer />
        </div>
    );
}

