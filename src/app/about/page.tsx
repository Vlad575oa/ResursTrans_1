"use client";

import { Navigation } from "@/components/ui/Navigation";
import { Footer } from "@/components/sections/Footer";
import { Timeline } from "@/components/about/Timeline";
import Image from "next/image";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { motion } from "framer-motion";

export default function AboutPage() {
    const { t } = useLanguage();

    return (
        <div className="bg-cloud-dancer text-anthracite-core antialiased overflow-x-hidden min-h-screen selection:bg-burnt-terra selection:text-white">
            <Navigation />

            <main className="pt-20">
                {/* Hero section */}
                <section className="relative py-12 md:py-24 bg-white overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                            alt="Corporate office"
                            fill
                            className="object-cover opacity-10 grayscale"
                            priority
                            fetchPriority="high"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/40 to-white" />
                    </div>

                    <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-burnt-terra font-mono text-xs uppercase tracking-[0.3em] font-bold mb-3 block">
                                Corporate Evolution
                            </span>
                            <h1 className="text-6xl md:text-9xl font-black text-anthracite-core mb-6 tracking-tighter leading-none">
                                {t("AboutPage.heroTitle")}
                            </h1>
                            <p className="text-xl md:text-2xl text-anthracite-core/60 max-w-2xl mx-auto leading-relaxed font-serif italic">
                                {t("AboutPage.heroDescription")}
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Timeline section */}
                <Timeline />
            </main>

            <Footer />
        </div>
    );
}
