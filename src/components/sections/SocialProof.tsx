export function SocialProof() {
    return (
        <section className="bg-navy-custom py-14 text-white">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 md:gap-0">
                    {/* Metric 1 */}
                    <div className="flex flex-col items-center justify-center text-center md:border-r md:border-white/10 md:px-4">
                        <span className="text-4xl lg:text-5xl font-black tracking-tight text-primary">15+</span>
                        <span className="mt-3 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Years Experience</span>
                    </div>
                    {/* Metric 2 */}
                    <div className="flex flex-col items-center justify-center text-center md:border-r md:border-white/10 md:px-4">
                        <span className="text-4xl lg:text-5xl font-black tracking-tight text-white">5k+</span>
                        <span className="mt-3 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Active Units</span>
                    </div>
                    {/* Metric 3 */}
                    <div className="flex flex-col items-center justify-center text-center md:border-r md:border-white/10 md:px-4">
                        <span className="text-4xl lg:text-5xl font-black tracking-tight text-white">20+</span>
                        <span className="mt-3 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Regions Covered</span>
                    </div>
                    {/* Metric 4 */}
                    <div className="flex flex-col items-center justify-center text-center md:border-r md:border-white/10 md:px-4">
                        <span className="text-4xl lg:text-5xl font-black tracking-tight text-white">98%</span>
                        <span className="mt-3 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">SLA Adherence</span>
                    </div>
                    {/* Metric 5 */}
                    <div className="flex flex-col items-center justify-center text-center md:px-4">
                        <span className="text-4xl lg:text-5xl font-black tracking-tight text-white">1M+</span>
                        <span className="mt-3 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Km Monthly</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
