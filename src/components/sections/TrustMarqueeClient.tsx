"use client";

const COMPANIES = [
    "Магнит",
    "Сбербанк",
    "X5 Retail Group",
    "Роснефть",
    "Норильский никель",
    "ВТБ",
    "Северсталь",
    "Яндекс",
    "МТС",
    "Лукойл",
    "Газпром Нефть",
    "РЖД",
];

interface TrustMarqueeClientProps {
    dict: {
        trustedBy: string;
        marketLeaders: string;
    };
}

export const TrustMarqueeClient = ({ dict }: TrustMarqueeClientProps) => {
    return (
        <section className="w-full py-10 md:py-16 overflow-hidden select-none">
            <style>{`
                @keyframes trust-scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .trust-ticker {
                    display: flex;
                    white-space: nowrap;
                    width: max-content;
                    animation: trust-scroll 35s linear infinite;
                }
                .trust-ticker:hover {
                    animation-play-state: paused;
                }
            `}</style>

            {/* Top label */}
            <p className="text-center text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-slate-400/70 mb-6 md:mb-8">
                {dict.trustedBy}
            </p>

            {/* Scrolling strip */}
            <div className="relative overflow-hidden w-full">
                {/* Gradient fade edges */}
                <div className="absolute inset-y-0 left-0 w-20 md:w-48 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-20 md:w-48 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

                <div className="trust-ticker">
                    {/* Render 2 copies for seamless loop */}
                    {[0, 1].map((copy) => (
                        <div key={copy} className="flex items-center shrink-0">
                            {COMPANIES.map((name, i) => (
                                <div key={`${copy}-${i}`} className="inline-flex items-center">
                                    <span className="text-base md:text-xl lg:text-2xl font-semibold text-navy/90 hover:text-primary-main transition-colors duration-300 cursor-default tracking-tight px-1">
                                        {name}
                                    </span>
                                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#A3D977] mx-5 md:mx-8 shrink-0 shadow-[0_0_6px_rgba(163,217,119,0.4)]" />
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom label */}
            <p className="text-center text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-slate-400/70 mt-6 md:mt-8">
                {dict.marketLeaders}
            </p>
        </section>
    );
};
