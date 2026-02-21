import { Navigation } from "@/components/ui/Navigation";
import { Footer } from "@/components/sections/Footer";

export const metadata = {
    title: "Контакты | РесурсТранс",
    description: "Свяжитесь с нами. Контактная информация компании РесурсТранс.",
};

export default function ContactsPage() {
    return (
        <div className="bg-background-light text-slate-900 antialiased overflow-x-hidden min-h-screen">
            <Navigation />

            <main className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-12">Контакты</h1>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div>
                        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">Головной офис</h2>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-primary/10 text-primary rounded-xl shrink-0">
                                        <span className="material-symbols-outlined">location_on</span>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-slate-900">Адрес</p>
                                        <p className="text-slate-600">г. Москва, ул. Примерная, д. 15<br />БЦ "Транспортный", офис 405</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-primary/10 text-primary rounded-xl shrink-0">
                                        <span className="material-symbols-outlined">call</span>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-slate-900">Телефон</p>
                                        <p className="text-slate-600">+8 (800) 123-45-67</p>
                                        <p className="text-sm text-slate-500">Пн-Пт: 9:00 - 18:00</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-primary/10 text-primary rounded-xl shrink-0">
                                        <span className="material-symbols-outlined">mail</span>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-slate-900">Email</p>
                                        <p className="text-slate-600">info@resurstrans.ru</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form Placeholder */}
                    <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm h-fit">
                        <h2 className="text-2xl font-bold text-slate-900 mb-6">Напишите нам</h2>
                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Имя</label>
                                <input type="text" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors" placeholder="Иван Иванов" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                                <input type="email" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors" placeholder="ivan@example.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Сообщение</label>
                                <textarea rows={4} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors" placeholder="Как мы можем вам помочь?"></textarea>
                            </div>
                            <button type="button" className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-lg transition-colors">
                                Отправить сообщение
                            </button>
                        </form>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
