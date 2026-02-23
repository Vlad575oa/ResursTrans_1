

const COMPANIES = [
    "Лукойл",
    "Газпром Нефть",
    "РЖД",
    "Магнит",
    "Сбербанк",
    "X5 Retail Group",
    "Роснефть",
    "Норильский никель",
    "ВТБ",
    "Северсталь",
    "Яндекс",
    "МТС",
];

// Duplicate list for seamless looping
const TICKER_ITEMS = [...COMPANIES, ...COMPANIES];

const SEPARATOR = (
    <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary-main mx-6 align-middle opacity-60" />
);

export const HeroTicker = ({ dict }: { dict: { trustedBy: string, marketLeaders: string } }) => {
    return (
        <div className="w-full py-8 bg-transparent overflow-hidden select-none">
            {/* Static label above */}
            <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-4">
                {dict.trustedBy}
            </p>

            {/* Scrolling strip */}
            <div className="relative overflow-hidden">
                <div
                    className="flex items-center whitespace-nowrap"
                    style={{
                        animation: "marquee 28s linear infinite",
                        width: "max-content"
                    }}
                >
                    {TICKER_ITEMS.map((name, i) => (
                        <span key={i} className="inline-flex items-center">
                            <span className="text-base font-semibold text-text-primary hover:text-primary-main transition-colors cursor-default">
                                {name}
                            </span>
                            {SEPARATOR}
                        </span>
                    ))}
                </div>
            </div>

            {/* Static label below - Uniform and same size as top label */}
            <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-text-muted mt-6">
                {dict.marketLeaders}
            </p>
        </div>
    );
};
