"use client";

import { Truck, UserCheck, Headset, Fuel, BarChart3 } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function Solutions() {
    const { t } = useLanguage();

    const features = [
        {
            key: "fleetManagement",
            icon: Truck
        },
        {
            key: "driverOutsourcing",
            icon: UserCheck
        },
        {
            key: "dispatchService",
            icon: Headset
        },
        {
            key: "fuelControl",
            icon: Fuel
        },
        {
            key: "analyticsReporting",
            icon: BarChart3
        }
    ];

    return (
        <section className="py-12 lg:py-16 px-6 lg:px-12 bg-section-2" id="services">
            <div className="mx-auto max-w-7xl">
                <div className="mb-16 flex flex-col gap-4 text-center md:text-left">
                    <h2 className="text-3xl font-extrabold tracking-tight text-text-primary sm:text-4xl md:text-5xl lg:max-w-2xl">
                        {t("Solutions.title")}
                    </h2>
                    <p className="max-w-xl text-lg text-text-body">
                        {t("Solutions.description")}
                    </p>
                </div>

                {/* Grid of 5 Cards */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature, index) => (
                        <div
                            key={feature.key}
                            className={`group flex flex-col gap-4 rounded-xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:border-primary-main/50 hover:shadow-lg ${index === 4 ? "sm:col-span-2 lg:col-span-1" : ""}`}
                        >
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-main/10 text-primary-main transition-colors group-hover:bg-primary-main group-hover:text-white">
                                <feature.icon className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="mb-2 text-xl font-bold text-text-primary">
                                    {t(`Solutions.${feature.key}.title`)}
                                </h3>
                                <p className="text-sm leading-relaxed text-text-muted">
                                    {t(`Solutions.${feature.key}.desc`)}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
