"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const steps = [
    { step: "01", title: "Анализ и Аудит", desc: "Комплексный аудит текущих маршрутов, затрат и коэффициентов использования.", icon: "analytics", threshold: 0.15 },
    { step: "02", title: "Модель оптимизации", desc: "Разработка индивидуальной стратегии и имитационной модели.", icon: "model_training", threshold: 0.35 },
    { step: "03", title: "Подключение систем", desc: "Бесшовная интеграция ИТ-инфраструктуры и телематики транспортных средств.", icon: "hub", threshold: 0.55 },
    { step: "04", title: "Запуск и Контроль", desc: "Пилотный запуск, корректировки в реальном времени и калибровка процессов.", icon: "rocket_launch", threshold: 0.75 },
    { step: "05", title: "Месячная аналитика", desc: "Детальная отчетность и циклы непрерывного совершенствования.", icon: "monitoring", threshold: 0.90 }
];

export function Workflow() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    return (
        <section ref={containerRef} className="py-16 bg-[#f8f7f5] relative overflow-hidden">
            {/* Background decorative element */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white to-transparent opacity-50 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="mb-12 max-w-3xl">
                    <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-3 block">Наш процесс</span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
                        Простой процесс — <br className="hidden md:block" />измеримый результат
                    </h2>
                    <p className="mt-4 text-lg text-slate-600 max-w-2xl">
                        Структурированный подход к оптимизации автопарка, который гарантирует прозрачность и эффективность на каждом этапе.
                    </p>
                </div>

                {/* Desktop Timeline */}
                <div className="hidden lg:block relative py-10">
                    {/* Connector Line */}
                    <div className="absolute top-24 left-0 w-full h-0.5 bg-slate-200">
                        <motion.div
                            style={{ scaleX: scrollYProgress }}
                            className="absolute top-0 left-0 h-full bg-primary origin-left"
                        />
                    </div>

                    <div className="grid grid-cols-5 gap-4">
                        {steps.map((item, idx) => (
                            <StepItem
                                key={idx}
                                item={item}
                                progress={scrollYProgress}
                            />
                        ))}
                    </div>
                </div>

                {/* Mobile Timeline (Vertical) */}
                <div className="lg:hidden flex flex-col gap-12 relative pl-6 ml-4">
                    {/* Background line for mobile */}
                    <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-slate-200">
                        <motion.div
                            style={{ scaleY: scrollYProgress }}
                            className="absolute top-0 left-0 w-full bg-primary origin-top"
                        />
                    </div>

                    {steps.map((item, idx) => (
                        <MobileStepItem
                            key={idx}
                            item={item}
                            progress={scrollYProgress}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

function StepItem({ item, progress }: { item: typeof steps[0], progress: any }) {
    // Range: light up 5% before and stay lit 5% after the threshold
    const active = useTransform(progress,
        [item.threshold - 0.05, item.threshold, item.threshold + 0.15, item.threshold + 0.20],
        [0, 1, 1, 0] // Fade in and slightly out as we move past, or keep at 1 if preferred. User said "lights up as I scroll".
    );

    const borderColor = useTransform(active, [0, 1], ["rgb(241 245 249)", "#f57a00"]);
    const textColor = useTransform(active, [0, 1], ["rgb(148 163 184)", "#f57a00"]);
    const shadowOpacity = useTransform(active, [0, 1], [0, 0.2]);
    const scale = useTransform(active, [0, 1], [1, 1.05]);

    return (
        <div className="relative group">
            <div className="flex flex-col items-center text-center">
                <motion.div
                    style={{ borderColor, scale, boxShadow: useTransform(shadowOpacity, (v) => `0 10px 25px -5px rgba(245, 122, 0, ${v})`) }}
                    className="w-24 h-24 rounded-full bg-white border-4 flex items-center justify-center z-10 transition-shadow duration-300"
                >
                    <motion.span
                        style={{ color: textColor }}
                        className="material-symbols-outlined text-4xl"
                    >
                        {item.icon}
                    </motion.span>
                </motion.div>
                <div className="mt-8 px-2">
                    <motion.div
                        style={{ color: textColor }}
                        className="text-xs font-bold uppercase tracking-widest mb-1 transition-colors duration-300"
                    >
                        Шаг {item.step}
                    </motion.div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed font-medium">
                        {item.desc}
                    </p>
                </div>
            </div>
        </div>
    );
}

function MobileStepItem({ item, progress }: { item: typeof steps[0], progress: any }) {
    const active = useTransform(progress,
        [item.threshold - 0.05, item.threshold, item.threshold + 0.15, item.threshold + 0.20],
        [0, 1, 1, 0]
    );

    const backgroundColor = useTransform(active, [0, 1], ["#ffffff", "#f57a00"]);
    const borderColor = useTransform(active, [0, 1], ["rgb(203 213 225)", "#f57a00"]);
    const textColor = useTransform(active, [0, 1], ["rgb(100 116 139)", "#ffffff"]);
    const iconColor = useTransform(active, [0, 1], ["rgb(148 163 184)", "#f57a00"]);
    const titleColor = useTransform(active, [0, 1], ["rgb(15 23 42)", "#f57a00"]);

    return (
        <div className="relative pl-8">
            <motion.div
                style={{ backgroundColor, borderColor }}
                className="absolute -left-[17px] top-0 w-8 h-8 rounded-full border-2 flex items-center justify-center shadow-sm z-10"
            >
                <motion.span
                    style={{ color: textColor }}
                    className="text-xs font-bold"
                >
                    {parseInt(item.step)}
                </motion.span>
            </motion.div>
            <div className="flex items-center gap-3 mb-1">
                <motion.span
                    style={{ color: iconColor }}
                    className="material-symbols-outlined text-2xl"
                >
                    {item.icon}
                </motion.span>
                <motion.h3
                    style={{ color: titleColor }}
                    className="text-lg font-bold transition-colors duration-300"
                >
                    {item.title}
                </motion.h3>
            </div>
            <p className="text-slate-500 mt-1 text-sm">{item.desc}</p>
        </div>
    );
}
