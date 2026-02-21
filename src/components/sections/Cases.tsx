"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";

export function Cases() {
    const { t } = useLanguage();

    return (
        <section className="py-12 lg:py-16 px-6 lg:px-12 bg-white relative">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 -z-10 h-[600px] w-1/3 bg-slate-50"></div>
            <div className="mx-auto max-w-7xl">
                <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                    <div>
                        <span className="text-sm font-bold uppercase tracking-widest text-primary">{t("Cases.successStories")}</span>
                        <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">{t("Cases.title")}</h2>
                    </div>
                    <a className="group flex items-center gap-2 text-sm font-bold text-slate-600 transition-colors hover:text-primary" href="#">
                        {t("Cases.viewAll")}
                        <span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1">arrow_forward</span>
                    </a>
                </div>
                {/* Main Featured Case Card */}
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl lg:grid lg:grid-cols-2">
                    {/* Left Content */}
                    <div className="flex flex-col justify-between p-8 lg:p-12">
                        <div>
                            <div className="mb-6 flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600">
                                    <span className="material-symbols-outlined">inventory_2</span>
                                </div>
                                <span className="text-sm font-semibold text-slate-500">{t("Cases.category")}</span>
                            </div>
                            <h3 className="mb-4 text-2xl font-bold text-slate-900">{t("Cases.caseTitle")}</h3>
                            <div className="space-y-6">
                                <div>
                                    <h4 className="mb-2 text-sm font-bold uppercase tracking-wider text-slate-400">{t("Cases.problem.label")}</h4>
                                    <p className="text-slate-600">{t("Cases.problem.text")}</p>
                                </div>
                                <div>
                                    <h4 className="mb-2 text-sm font-bold uppercase tracking-wider text-slate-400">{t("Cases.solution.label")}</h4>
                                    <p className="text-slate-600">{t("Cases.solution.text")}</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10">
                            <button className="inline-flex items-center gap-2 font-bold text-primary hover:text-orange-600">
                                {t("Cases.readMore")}
                                <span className="material-symbols-outlined text-sm">arrow_outward</span>
                            </button>
                        </div>
                    </div>
                    {/* Right Visual/Data */}
                    <div className="relative bg-slate-50 p-8 lg:border-l lg:border-slate-100 lg:p-12 flex flex-col justify-center">
                        {/* Abstract Graphic Background */}
                        <div className="absolute inset-0 overflow-hidden opacity-10">
                            <div className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-primary blur-3xl"></div>
                            <div className="absolute -bottom-10 -left-10 h-64 w-64 rounded-full bg-blue-500 blur-3xl"></div>
                        </div>
                        <div className="relative z-10">
                            <div className="mb-2 text-sm font-medium text-slate-500">{t("Cases.costReduction")}</div>
                            <div className="mb-8 flex items-baseline gap-4">
                                <span className="text-6xl font-black text-primary">-18%</span>
                                <span className="flex items-center text-sm font-medium text-green-600 bg-green-100 px-2 py-1 rounded-full">
                                    <span className="material-symbols-outlined text-sm mr-1">trending_down</span>
                                    {t("Cases.aboveTarget")}
                                </span>
                            </div>
                            {/* Chart Representation */}
                            <div className="space-y-4">
                                <div className="flex items-center justify-between text-xs font-medium text-slate-500">
                                    <span>{t("Cases.beforeOptimization")}</span>
                                    <span>$1.2M / mo</span>
                                </div>
                                <div className="h-4 w-full overflow-hidden rounded-full bg-slate-200">
                                    <div className="h-full w-full bg-slate-400"></div>
                                </div>
                                <div className="flex items-center justify-between text-xs font-medium text-slate-500">
                                    <span className="text-primary font-bold">{t("Cases.afterOptimization")}</span>
                                    <span className="text-slate-900 font-bold">$984k / mo</span>
                                </div>
                                <div className="h-4 w-full overflow-hidden rounded-full bg-slate-200">
                                    <div className="h-full w-[82%] bg-primary"></div>
                                </div>
                            </div>
                            <div className="mt-8 grid grid-cols-2 gap-4">
                                <div className="rounded-lg bg-white p-4 shadow-sm border border-slate-100">
                                    <div className="text-2xl font-bold text-slate-900">14%</div>
                                    <div className="text-xs text-slate-500">{t("Cases.fuelSaved")}</div>
                                </div>
                                <div className="rounded-lg bg-white p-4 shadow-sm border border-slate-100">
                                    <div className="text-2xl font-bold text-slate-900">2.5hrs</div>
                                    <div className="text-xs text-slate-500">{t("Cases.timeSaved")}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
