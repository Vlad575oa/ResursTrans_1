"use client";

import { motion } from "framer-motion";
import { Terminal, Cpu, Network, Database, ChevronRight } from "lucide-react";

interface TechItem {
    title: string;
    desc: string;
    icon: React.ReactNode;
    status: string;
    metric: string;
}

interface TechnologyContentProps {
    titles: {
        pageTitle: string;
        systemArchitecture: string;
        systemsOperational: string;
        manifesto: string;
        techSpecs: string;
        architecture: string;
        latency: string;
        security: string;
    };
    techStack: TechItem[];
}

export function TechnologyContent({ titles, techStack }: TechnologyContentProps) {
    return (
        <div className="container mx-auto px-6 py-24 relative z-10">
            {/* Header */}
            <header className="mb-20 border-b border-white/20 pb-6 flex flex-col md:flex-row justify-between items-end">
                <div>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-2 text-[#0F766E] mb-4"
                    >
                        <Terminal className="w-4 h-4" />
                        <span className="text-xs tracking-widest">{titles.systemArchitecture}</span>
                    </motion.div>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase">
                        {titles.pageTitle}
                    </h1>
                </div>
                <div className="text-right mt-6 md:mt-0">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0F766E]/10 border border-[#0F766E]/30 rounded-sm">
                        <span className="w-2 h-2 bg-[#0F766E] rounded-full animate-pulse" />
                        <span className="text-xs text-[#0F766E]">{titles.systemsOperational}</span>
                    </div>
                </div>
            </header>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Left Column: Manifesto/Intro */}
                <div className="lg:col-span-4 space-y-8">
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg leading-relaxed text-white/70 font-sans"
                    >
                        {titles.manifesto}
                    </motion.p>

                    <div className="p-6 border border-white/10 bg-white/5 backdrop-blur-sm rounded-sm">
                        <h3 className="text-sm uppercase text-gray-400 mb-4 border-b border-white/10 pb-2">{titles.techSpecs}</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex justify-between">
                                <span>{titles.architecture}:</span> <span className="text-white">Microservices</span>
                            </li>
                            <li className="flex justify-between">
                                <span>{titles.latency}:</span> <span className="text-[#0F766E]">&lt; 50ms</span>
                            </li>
                            <li className="flex justify-between">
                                <span>{titles.security}:</span> <span className="text-white">Enterprise Grade</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Right Column: Stack List */}
                <div className="lg:col-span-8 space-y-4">
                    {techStack.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.15 }}
                            className="group relative border border-foreground/10 bg-foreground/5 hover:bg-foreground/10 transition-colors p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start md:items-center"
                        >
                            {/* Active Line Animation */}
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#0F766E] scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-300" />

                            <div className="p-3 bg-foreground/5 rounded-sm border border-foreground/10 text-[#0F766E]">
                                {item.icon}
                            </div>

                            <div className="flex-grow">
                                <div className="flex items-center gap-3 mb-2">
                                    <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white group-hover:text-[#0F766E] transition-colors">
                                        {item.title}
                                    </h3>
                                    <span className="text-[10px] border border-white/20 px-1 py-0.5 rounded text-gray-400">
                                        {item.status}
                                    </span>
                                </div>
                                <p className="text-gray-400 font-sans text-sm md:text-base max-w-xl">
                                    {item.desc}
                                </p>
                            </div>

                            <div className="md:text-right min-w-[140px]">
                                <div className="text-xs text-gray-500 mb-1">PERFORMANCE</div>
                                <div className="text-[#0F766E] font-bold text-lg">{item.metric}</div>
                            </div>

                            <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors ml-auto md:ml-0" />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Animated Data Stream Footer */}
            <div className="mt-24 border-t border-white/10 pt-6 flex justify-between items-center text-xs text-gray-600 font-mono">
                <div className="animate-pulse"> CONNECTING TO SERVER... </div>
                <div className="flex gap-4">
                    <span>LAT: 55.7558 N</span>
                    <span>LON: 37.6173 E</span>
                </div>
            </div>
        </div>
    );
}
