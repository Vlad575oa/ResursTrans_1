import { motion } from "framer-motion";

export function Workflow() {
    return (
        <section className="py-24 bg-[#f8f7f5] relative overflow-hidden transition-colors duration-300">
            {/* Background decorative element */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white to-transparent opacity-50 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="mb-16 max-w-3xl">
                    <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-3 block">Наш процесс</span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
                        Простой процесс — <br className="hidden md:block" />измеримый результат
                    </h2>
                    <p className="mt-4 text-lg text-slate-600 max-w-2xl">
                        Структурированный подход к оптимизации автопарка, который гарантирует прозрачность и эффективность на каждом этапе.
                    </p>
                </div>

                {/* Desktop Timeline */}
                <div className="hidden lg:block relative">
                    {/* Connector Line */}
                    <div className="absolute top-12 left-0 w-full h-0.5 bg-slate-200">
                        <div className="absolute top-0 left-0 h-full bg-primary w-3/4 opacity-20"></div>
                    </div>

                    <div className="grid grid-cols-5 gap-4">
                        {/* Step 1 */}
                        <div className="relative group">
                            <div className="flex flex-col items-center text-center">
                                <div className="w-24 h-24 rounded-full bg-white border-4 border-slate-100 flex items-center justify-center z-10 transition-all duration-300 group-hover:border-primary group-hover:scale-105 shadow-sm">
                                    <span className="material-symbols-outlined text-slate-400 group-hover:text-primary text-4xl transition-colors">analytics</span>
                                </div>
                                <div className="mt-6 px-2">
                                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Шаг 01</div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2">Анализ и Аудит</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Комплексный аудит текущих маршрутов, затрат и коэффициентов использования.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="relative group">
                            <div className="flex flex-col items-center text-center">
                                <div className="w-24 h-24 rounded-full bg-white border-4 border-slate-100 flex items-center justify-center z-10 transition-all duration-300 group-hover:border-primary group-hover:scale-105 shadow-sm">
                                    <span className="material-symbols-outlined text-slate-400 group-hover:text-primary text-4xl transition-colors">model_training</span>
                                </div>
                                <div className="mt-6 px-2">
                                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Шаг 02</div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2">Модель оптимизации</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Разработка индивидуальной стратегии и имитационной модели.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="relative group">
                            <div className="flex flex-col items-center text-center">
                                <div className="w-24 h-24 rounded-full bg-white border-4 border-primary flex items-center justify-center z-10 transition-all duration-300 scale-110 shadow-lg shadow-orange-100">
                                    <span className="material-symbols-outlined text-primary text-4xl">hub</span>
                                </div>
                                <div className="mt-6 px-2">
                                    <div className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Текущая фаза</div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2">Подключение систем</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Бесшовная интеграция ИТ-инфраструктуры и телематики транспортных средств.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Step 4 */}
                        <div className="relative group">
                            <div className="flex flex-col items-center text-center">
                                <div className="w-24 h-24 rounded-full bg-white border-4 border-slate-100 flex items-center justify-center z-10 transition-all duration-300 group-hover:border-primary group-hover:scale-105 shadow-sm">
                                    <span className="material-symbols-outlined text-slate-400 group-hover:text-primary text-4xl transition-colors">rocket_launch</span>
                                </div>
                                <div className="mt-6 px-2">
                                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Шаг 04</div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2">Запуск и Контроль</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Пилотный запуск, корректировки в реальном времени и калибровка процессов.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Step 5 */}
                        <div className="relative group">
                            <div className="flex flex-col items-center text-center">
                                <div className="w-24 h-24 rounded-full bg-white border-4 border-slate-100 flex items-center justify-center z-10 transition-all duration-300 group-hover:border-primary group-hover:scale-105 shadow-sm">
                                    <span className="material-symbols-outlined text-slate-400 group-hover:text-primary text-4xl transition-colors">monitoring</span>
                                </div>
                                <div className="mt-6 px-2">
                                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Шаг 05</div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2">Месячная аналитика</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Детальная отчетность и циклы непрерывного совершенствования.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Timeline (Vertical) */}
                <div className="lg:hidden flex flex-col gap-8 relative pl-6 border-l-2 border-slate-200 ml-4">
                    {/* Step 1 */}
                    <div className="relative pl-6">
                        <div className="absolute -left-[31px] top-0 w-8 h-8 rounded-full bg-white border-2 border-slate-300 flex items-center justify-center shadow-sm">
                            <span className="text-xs font-bold text-slate-500">1</span>
                        </div>
                        <div className="flex items-center gap-3 mb-1">
                            <span className="material-symbols-outlined text-slate-400 text-2xl">analytics</span>
                            <h3 className="text-lg font-bold text-slate-900">Анализ и Аудит</h3>
                        </div>
                        <p className="text-slate-500 mt-1">Комплексный аудит текущих маршрутов и затрат.</p>
                    </div>

                    {/* Step 2 */}
                    <div className="relative pl-6">
                        <div className="absolute -left-[31px] top-0 w-8 h-8 rounded-full bg-white border-2 border-slate-300 flex items-center justify-center shadow-sm">
                            <span className="text-xs font-bold text-slate-500">2</span>
                        </div>
                        <div className="flex items-center gap-3 mb-1">
                            <span className="material-symbols-outlined text-slate-400 text-2xl">model_training</span>
                            <h3 className="text-lg font-bold text-slate-900">Модель оптимизации</h3>
                        </div>
                        <p className="text-slate-500 mt-1">Разработка стратегии и моделирование.</p>
                    </div>

                    {/* Step 3 */}
                    <div className="relative pl-6">
                        <div className="absolute -left-[31px] top-0 w-8 h-8 rounded-full bg-primary border-2 border-primary flex items-center justify-center shadow-md">
                            <span className="text-xs font-bold text-white">3</span>
                        </div>
                        <div className="flex items-center gap-3 mb-1">
                            <span className="material-symbols-outlined text-primary text-2xl">hub</span>
                            <h3 className="text-lg font-bold text-primary">Подключение систем</h3>
                        </div>
                        <p className="text-slate-600 mt-1 font-medium">Интеграция ИТ-систем и транспортных средств.</p>
                    </div>

                    {/* Step 4 */}
                    <div className="relative pl-6">
                        <div className="absolute -left-[31px] top-0 w-8 h-8 rounded-full bg-white border-2 border-slate-300 flex items-center justify-center shadow-sm">
                            <span className="text-xs font-bold text-slate-500">4</span>
                        </div>
                        <div className="flex items-center gap-3 mb-1">
                            <span className="material-symbols-outlined text-slate-400 text-2xl">rocket_launch</span>
                            <h3 className="text-lg font-bold text-slate-900">Запуск и Контроль</h3>
                        </div>
                        <p className="text-slate-500 mt-1">Пилотный запуск и корректировки.</p>
                    </div>

                    {/* Step 5 */}
                    <div className="relative pl-6">
                        <div className="absolute -left-[31px] top-0 w-8 h-8 rounded-full bg-white border-2 border-slate-300 flex items-center justify-center shadow-sm">
                            <span className="text-xs font-bold text-slate-500">5</span>
                        </div>
                        <div className="flex items-center gap-3 mb-1">
                            <span className="material-symbols-outlined text-slate-400 text-2xl">monitoring</span>
                            <h3 className="text-lg font-bold text-slate-900">Месячная аналитика</h3>
                        </div>
                        <p className="text-slate-500 mt-1">Отчетность и улучшения.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
