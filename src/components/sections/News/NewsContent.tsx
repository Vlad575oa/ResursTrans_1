"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { ScrollImage } from "@/components/ui/ScrollImage";

interface NewsItem {
    id: string;
    key: string;
    image: string;
    title: string;
    date: string;
    description: string;
}

interface NewsContentProps {
    news: NewsItem[];
    titles: {
        pageTitle: string;
        readMore: string;
    };
}

export function NewsContent({ news, titles }: NewsContentProps) {
    return (
        <div className="container mx-auto px-6 py-24 md:py-32 max-w-7xl">
            <motion.header
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-24"
            >
                <span className="text-burnt-terra font-mono text-xs uppercase tracking-[0.3em] font-bold mb-4 block">
                    Press Center
                </span>
                <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter leading-none">
                    {titles.pageTitle}
                </h1>
            </motion.header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {news.map((item, index) => (
                    <motion.article
                        key={item.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group cursor-pointer"
                    >
                        <div className="relative aspect-[4/5] mb-8 overflow-hidden rounded-3xl bg-neutral-200">
                            <ScrollImage
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-anthracite-core/40 via-transparent to-transparent opacity-60" />
                            <div className="absolute top-6 left-6">
                                <div className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/20 flex items-center gap-2">
                                    <Calendar className="w-3 h-3 text-white" />
                                    <span className="text-[10px] font-mono text-white uppercase tracking-wider">
                                        {item.date}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold mb-4 tracking-tight group-hover:text-burnt-terra transition-colors line-clamp-2">
                            {item.title}
                        </h2>
                        <p className="text-anthracite-core/60 mb-6 font-serif italic text-sm leading-relaxed line-clamp-3">
                            {item.description}
                        </p>

                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest group-hover:translate-x-2 transition-transform duration-300">
                            {titles.readMore}
                            <ArrowRight className="w-4 h-4 text-burnt-terra" />
                        </div>
                    </motion.article>
                ))}
            </div>

            {/* Newsletter Placeholder */}
            <div className="mt-32 border-t border-anthracite-core/10 pt-24 text-center">
                <h3 className="text-2xl font-bold mb-4">Подпишитесь на обновления</h3>
                <p className="text-anthracite-core/50 font-serif italic mb-8 max-w-lg mx-auto">Получайте актуальные новости транспортной отрасли и кейсы ResursLogistics напрямую.</p>
                <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
                    <input
                        type="email"
                        placeholder="your@email.com"
                        className="flex-1 px-6 py-4 rounded-full bg-white border border-anthracite-core/10 outline-none focus:border-burnt-terra transition-colors font-serif italic"
                    />
                    <button className="px-8 py-4 bg-anthracite-core text-white rounded-full font-bold hover:bg-burnt-terra transition-all">
                        Subcribe
                    </button>
                </div>
            </div>
        </div>
    );
}
