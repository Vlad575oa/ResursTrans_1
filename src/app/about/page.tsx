import { Navigation } from "@/components/ui/Navigation";
import { Footer } from "@/components/sections/Footer";
import { Timeline } from "@/components/about/Timeline";
import Image from "next/image";

export const metadata = {
    title: "О нас | РесурсТранс",
    description: "История компании РесурсТранс, лидера рынка аутсорсинга транспортных услуг.",
};

export default function AboutPage() {
    return (
        <div className="bg-background-light text-slate-900 antialiased overflow-x-hidden min-h-screen">
            <Navigation />

            <main className="pt-20">
                {/* Hero section */}
                <section className="relative py-24 md:py-32 bg-white overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                            alt="Corporate office"
                            fill
                            className="object-cover opacity-10"
                            priority
                            fetchPriority="high"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white" />
                    </div>

                    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-12">
                        <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tight">
                            Наша <span className="text-primary relative inline-block">
                                История
                                <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" />
                                </svg>
                            </span>
                        </h1>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                            От небольшого стартапа до федерального лидера в управлении транспортными активами бизнеса.
                        </p>
                    </div>
                </section>

                {/* Timeline section */}
                <Timeline />
            </main>

            <Footer />
        </div>
    );
}
