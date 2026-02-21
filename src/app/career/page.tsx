import { Navigation } from "@/components/ui/Navigation";
import { Footer } from "@/components/sections/Footer";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export const metadata = {
    title: 'Карьера | РесурсТранс',
    description: 'Мы создаем все условия для профессионального роста сотрудников и предпочитаем растить кадры внутри компании. Узнайте больше о карьере в РесурсТранс.',
};

export default function CareerPage() {
    return (
        <div className="bg-background-light text-slate-900 antialiased overflow-x-hidden min-h-screen">
            <Navigation />

            <main className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link href="/" className="inline-flex items-center text-slate-500 hover:text-primary transition-colors mb-8 group">
                    <span className="material-symbols-outlined mr-2 transition-transform group-hover:-translate-x-1">arrow_back</span>
                    Возврат на главную
                </Link>

                {/* Hero Section */}
                <section className="mb-20">
                    <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tight">
                        Карьера в <span className="text-primary">РесурсТранс</span>
                    </h1>
                    <p className="text-xl text-slate-600 max-w-3xl leading-relaxed">
                        Мы создаем все условия для профессионального роста сотрудников и предпочитаем растить кадры внутри компании. В «РесурсТранс» много историй успеха, когда рядовые сотрудники стали руководителями.
                    </p>
                </section>

                {/* Quick Links / Policies */}
                <section className="grid md:grid-cols-2 gap-6 mb-20">
                    <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex items-center gap-6 cursor-pointer group">
                        <div className="h-16 w-16 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined text-3xl">policy</span>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">Кадровая политика</h3>
                        </div>
                    </div>
                    <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex items-center gap-6 cursor-pointer group">
                        <div className="h-16 w-16 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined text-3xl">work</span>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">Наши вакансии</h3>
                        </div>
                    </div>
                </section>

                {/* Statistics */}
                <section className="bg-slate-900 text-white rounded-3xl p-12 md:p-16 mb-20 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <div className="grid md:grid-cols-3 gap-12 relative z-10">
                        <div className="flex flex-col gap-2">
                            <span className="text-slate-400 font-medium">Более</span>
                            <div className="text-5xl font-black text-white">13 000</div>
                            <div className="text-lg text-slate-300 mt-2">сотрудников</div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="text-slate-400 font-medium">Более</span>
                            <div className="text-5xl font-black text-white">220</div>
                            <div className="text-lg text-slate-300 mt-2">профессий<br />и направлений работы</div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="text-slate-400 font-medium">Более</span>
                            <div className="text-5xl font-black text-white">350</div>
                            <div className="text-lg text-slate-300 mt-2">образовательных программ<br />в Корпоративном университете</div>
                        </div>
                    </div>
                </section>

                {/* Corporate Life */}
                <section className="mb-20">
                    <h2 className="text-3xl font-black text-slate-900 mb-8 uppercase tracking-wide">Корпоративная жизнь</h2>
                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        <div>
                            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                В компании на регулярной основе проводятся мероприятия, направленные на повышение корпоративного духа:
                            </p>
                            <ul className="space-y-4 mb-8">
                                {[
                                    'Тимбилдинги',
                                    'Корпоративные мероприятия',
                                    'Мастер-классы',
                                    'Волонтерские и социальные акции'
                                ].map((item, index) => (
                                    <li key={index} className="flex items-center gap-3 text-lg text-slate-800 font-medium">
                                        <span className="material-symbols-outlined text-primary">check_circle</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                            <p className="text-lg text-slate-600 leading-relaxed mb-8">
                                Кроме того, в «РесурсТранс» принято организовывать ежегодный конкурс профессионального мастерства для водительского состава, по результатам которого победителей награждают грамотами и денежными призами, а также направляют на Межрегиональный конкурс профмастерства «Ресурс Групп» в г. Сочи.
                            </p>
                            <div className="pt-6 border-t border-slate-200">
                                <p className="text-slate-800 font-medium mb-4">Узнать больше о корпоративной жизни компании можно на наших страницах в соцсетях:</p>
                                <div className="flex gap-4">
                                    <a href="#" className="h-12 w-12 bg-white rounded-full flex items-center justify-center text-primary shadow-sm hover:bg-primary-main hover:text-white transition-all border border-slate-200 hover:border-transparent">
                                        <span className="material-symbols-outlined">forum</span>
                                    </a>
                                    <a href="#" className="h-12 w-12 bg-white rounded-full flex items-center justify-center text-primary shadow-sm hover:bg-primary-main hover:text-white transition-all border border-slate-200 hover:border-transparent">
                                        <span className="material-symbols-outlined">groups</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="bg-primary/5 border border-primary/20 rounded-3xl p-10 md:p-16 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                        Если вы хотите работать в нашей команде,
                    </h2>
                    <p className="text-xl text-slate-600 mb-8">
                        пожалуйста, направьте нам своё резюме
                    </p>
                    <Button className="bg-primary hover:bg-primary-dark text-white font-bold py-4 px-10 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                        Заполнить форму
                    </Button>
                </section>
            </main>

            <Footer />
        </div>
    );
}
