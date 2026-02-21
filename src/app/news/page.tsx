import { Navigation } from "@/components/ui/Navigation";
import { Footer } from "@/components/sections/Footer";

export const metadata = {
    title: "Новости | РесурсТранс",
    description: "Актуальные новости транспортно-логистической компании РесурсТранс.",
};

export default function NewsPage() {
    return (
        <div className="bg-background-light text-slate-900 antialiased overflow-x-hidden min-h-screen">
            <Navigation />

            <main className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[60vh]">
                <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-12">Новости</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Placeholder News Item 1 */}
                    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="h-48 bg-slate-100 w-full relative">
                            {/* Image placeholder */}
                            <div className="absolute inset-0 flex items-center justify-center text-slate-300">
                                <span className="material-symbols-outlined text-4xl">image</span>
                            </div>
                        </div>
                        <div className="p-6">
                            <span className="text-sm font-semibold text-primary mb-2 block">12 Февраля 2026</span>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Открытие нового логистического хаба</h3>
                            <p className="text-slate-600 mb-4 line-clamp-3">РесурсТранс расширяет присутствие в Уральском регионе, запуская новый современный транспортный узел.</p>
                            <span className="text-primary font-bold hover:text-primary-dark transition-colors inline-flex items-center gap-1 cursor-pointer">
                                Читать далее <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </span>
                        </div>
                    </div>

                    {/* Placeholder News Item 2 */}
                    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="h-48 bg-slate-100 w-full relative">
                            <div className="absolute inset-0 flex items-center justify-center text-slate-300">
                                <span className="material-symbols-outlined text-4xl">image</span>
                            </div>
                        </div>
                        <div className="p-6">
                            <span className="text-sm font-semibold text-primary mb-2 block">05 Февраля 2026</span>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Внедрение ИИ в маршрутизацию</h3>
                            <p className="text-slate-600 mb-4 line-clamp-3">Наш новый алгоритм позволяет сократить холостые пробеги на 15% благодаря предиктивной аналитике.</p>
                            <span className="text-primary font-bold hover:text-primary-dark transition-colors inline-flex items-center gap-1 cursor-pointer">
                                Читать далее <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </span>
                        </div>
                    </div>

                    {/* Placeholder News Item 3 */}
                    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="h-48 bg-slate-100 w-full relative">
                            <div className="absolute inset-0 flex items-center justify-center text-slate-300">
                                <span className="material-symbols-outlined text-4xl">image</span>
                            </div>
                        </div>
                        <div className="p-6">
                            <span className="text-sm font-semibold text-primary mb-2 block">28 Января 2026</span>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Итоги года: рост превысил прогнозы</h3>
                            <p className="text-slate-600 mb-4 line-clamp-3">Выручка группы компаний выросла на 40% по итогам прошедшего года, достигнув рекордных показателей.</p>
                            <span className="text-primary font-bold hover:text-primary-dark transition-colors inline-flex items-center gap-1 cursor-pointer">
                                Читать далее <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </span>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
