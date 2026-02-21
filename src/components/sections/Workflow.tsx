"use client";

import { motion } from "framer-motion";

const stepVariants = {
    offscreen: {
        borderColor: "rgb(241 245 249)", // border-slate-100
        scale: 1,
        boxShadow: "0 0 0 rgba(0,0,0,0)",
    },
    onscreen: {
        borderColor: "#f57a00", // border-primary
        scale: 1.05,
        boxShadow: "0 10px 25px -5px rgba(245, 122, 0, 0.2)",
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    }
};

const iconVariants = {
    offscreen: {
        color: "rgb(148 163 184)", // text-slate-400
    },
    onscreen: {
        color: "#f57a00", // text-primary
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    }
};

const textVariants = {
    offscreen: {
        color: "rgb(148 163 184)", // text-slate-400
        opacity: 0.8
    },
    onscreen: {
        color: "#f57a00", // text-primary
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    }
};

// For mobile numbers
const mobileCircleVariants = {
    offscreen: {
        backgroundColor: "#ffffff",
        borderColor: "rgb(203 213 225)", // border-slate-300
    },
    onscreen: {
        backgroundColor: "#f57a00",
        borderColor: "#f57a00",
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    }
};

const mobileNumberVariants = {
    offscreen: {
        color: "rgb(100 116 139)", // text-slate-500
    },
    onscreen: {
        color: "#ffffff",
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    }
};

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
                        <div className="absolute top-0 left-0 h-full bg-primary w-full opacity-10"></div>
                    </div>

                    <div className="grid grid-cols-5 gap-4">
                        {[
                            { step: "01", title: "Анализ и Аудит", desc: "Комплексный аудит текущих маршрутов, затрат и коэффициентов использования.", icon: "analytics" },
                            { step: "02", title: "Модель оптимизации", desc: "Разработка индивидуальной стратегии и имитационной модели.", icon: "model_training" },
                            { step: "03", title: "Подключение систем", desc: "Бесшовная интеграция ИТ-инфраструктуры и телематики транспортных средств.", icon: "hub" },
                            { step: "04", title: "Запуск и Контроль", desc: "Пилотный запуск, корректировки в реальном времени и калибровка процессов.", icon: "rocket_launch" },
                            { step: "05", title: "Месячная аналитика", desc: "Детальная отчетность и циклы непрерывного совершенствования.", icon: "monitoring" }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ once: false, amount: 0.8 }}
                                className="relative group"
                            >
                                <div className="flex flex-col items-center text-center">
                                    <motion.div
                                        variants={stepVariants}
                                        className="w-24 h-24 rounded-full bg-white border-4 flex items-center justify-center z-10 transition-all duration-300 shadow-sm"
                                    >
                                        <motion.span
                                            variants={iconVariants}
                                            className="material-symbols-outlined text-4xl"
                                        >
                                            {item.icon}
                                        </motion.span>
                                    </motion.div>
                                    <div className="mt-6 px-2">
                                        <motion.div
                                            variants={textVariants}
                                            className="text-xs font-bold uppercase tracking-widest mb-1"
                                        >
                                            Шаг {item.step}
                                        </motion.div>
                                        <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                                        <p className="text-sm text-slate-500 leading-relaxed font-medium">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Mobile Timeline (Vertical) */}
                <div className="lg:hidden flex flex-col gap-12 relative pl-6 border-l-2 border-slate-200 ml-4">
                    {[
                        { num: 1, title: "Анализ и Аудит", desc: "Комплексный аудит текущих маршрутов и затрат.", icon: "analytics" },
                        { num: 2, title: "Модель оптимизации", desc: "Разработка стратегии и моделирование.", icon: "model_training" },
                        { num: 3, title: "Подключение систем", desc: "Интеграция ИТ-систем и транспортных средств.", icon: "hub" },
                        { num: 4, title: "Запуск и Контроль", desc: "Пилотный запуск и корректировки.", icon: "rocket_launch" },
                        { num: 5, title: "Месячная аналитика", desc: "Отчетность и улучшения.", icon: "monitoring" }
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: false, amount: 0.9, margin: "-20% 0px -20% 0px" }}
                            className="relative pl-6"
                        >
                            <motion.div
                                variants={mobileCircleVariants}
                                className="absolute -left-[31px] top-0 w-8 h-8 rounded-full border-2 flex items-center justify-center shadow-sm z-10"
                            >
                                <motion.span
                                    variants={mobileNumberVariants}
                                    className="text-xs font-bold"
                                >
                                    {item.num}
                                </motion.span>
                            </motion.div>
                            <div className="flex items-center gap-3 mb-1">
                                <motion.span
                                    variants={iconVariants}
                                    className="material-symbols-outlined text-2xl"
                                >
                                    {item.icon}
                                </motion.span>
                                <motion.h3
                                    variants={textVariants}
                                    className="text-lg font-bold"
                                >
                                    {item.title}
                                </motion.h3>
                            </div>
                            <p className="text-slate-500 mt-1 text-sm">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
