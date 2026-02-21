"use client";

import { motion } from "framer-motion";
import { Verified, Car, Navigation, Fuel, Activity, Map as MapIcon, Play } from "lucide-react";
import { useState, useRef } from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";

export const HeroVisuals: React.FC = () => {
    const { t } = useLanguage();
    const [key, setKey] = useState(0);
    const videoRef = useRef<HTMLVideoElement>(null);
    const [showReplay, setShowReplay] = useState(false);

    const handleReplay = () => {
        setKey(prev => prev + 1);
        setShowReplay(false);
        if (videoRef.current) {
            videoRef.current.currentTime = 0;
            videoRef.current.play();
        }
    };


    return (
        <div className="relative lg:h-full min-h-[400px] flex items-center justify-center">
            {/* Main Visual Container - No overflow here to allow elements to pop out */}
            <div className="relative w-full aspect-[16/9] lg:aspect-[4/3] group">

                {/* Video Base - Rounded and Hidden Overflow */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-navy/20">
                    <div className="absolute inset-0 bg-navy/20 z-10 mix-blend-multiply transition-opacity group-hover:opacity-10 pointer-events-none"></div>
                    <video
                        ref={videoRef}
                        src="/0221.mp4"
                        autoPlay
                        muted
                        playsInline
                        loop={false}
                        onEnded={() => setShowReplay(true)}
                        className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                    />
                </div>

                {/* --- Immersive Monitoring Overlay (Flowing beyond edges) --- */}

                <div key={key}>
                    {/* Top Left: GPS Status - Moved higher and delayed */}
                    <motion.div
                        initial={{ opacity: 0, x: -40, y: -20 }}
                        animate={{ opacity: 1, x: -12, y: 0 }}
                        transition={{ delay: 9.5, duration: 1.2, ease: "easeOut" }}
                        className="absolute -top-4 -left-6 z-40 bg-white/10 backdrop-blur-xl px-4 py-2 rounded-lg border border-white/20 flex items-center gap-3 text-white shadow-xl"
                    >
                        <Navigation className="w-4 h-4 text-primary-main animate-pulse" />
                        <div className="flex flex-col">
                            <span className="text-[10px] uppercase font-bold tracking-widest opacity-60">{t("Hero.visuals.gpsSignal")}</span>
                            <span className="text-xs font-mono font-bold">{t("Hero.visuals.active")} / 1.2m</span>
                        </div>
                    </motion.div>

                    {/* Top Right: SLA - Moved higher and delayed */}
                    <motion.div
                        initial={{ opacity: 0, x: 40, y: -20 }}
                        animate={{ opacity: 1, x: 12, y: 0 }}
                        transition={{ delay: 10, duration: 1.2, ease: "easeOut" }}
                        className="absolute -top-4 -right-6 z-40 bg-white/10 backdrop-blur-xl px-4 py-2 rounded-lg border border-white/20 flex items-center gap-3 text-white shadow-xl"
                    >
                        <Verified className="w-4 h-4 text-green-400" />
                        <div className="flex flex-col text-right">
                            <span className="text-[10px] uppercase font-bold tracking-widest opacity-60">{t("Hero.visuals.slaRate")}</span>
                            <span className="text-xs font-mono font-bold">98.4%</span>
                        </div>
                    </motion.div>

                    {/* Bottom Left: Telemetry - Delayed */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 12 }}
                        transition={{ delay: 10.5, duration: 1.2, ease: "easeOut" }}
                        className="absolute -bottom-4 -left-8 z-40 bg-navy/60 backdrop-blur-xl p-4 rounded-xl border border-white/10 flex items-center gap-4 text-white shadow-2xl"
                    >
                        <div className="bg-primary-main/30 p-2.5 rounded-lg">
                            <Activity className="w-5 h-5 text-primary-main" />
                        </div>
                        <div>
                            <p className="text-[10px] uppercase font-bold tracking-widest opacity-60">{t("Hero.visuals.telemetry")}</p>
                            <p className="text-sm font-mono font-bold">{t("Hero.visuals.surface")}: {t("Hero.visuals.highway")}</p>
                        </div>
                    </motion.div>

                    {/* Bottom Right: Fuel & Fleet - Delayed */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 11, duration: 1.2, ease: "easeOut" }}
                        className="absolute -bottom-6 -right-10 z-40 bg-navy/60 backdrop-blur-xl p-5 rounded-xl border border-white/10 flex flex-col gap-3 text-white shadow-2xl min-w-[180px]"
                    >
                        <div className="flex items-center justify-between gap-4">
                            <div className="flex items-center gap-2.5">
                                <Fuel className="w-4 h-4 text-orange-400" />
                                <span className="text-xs font-bold uppercase opacity-80">{t("Hero.visuals.fuelLevel")}</span>
                            </div>
                            <span className="text-xs font-mono text-orange-400 font-bold">74%</span>
                        </div>
                        <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: "74%" }}
                                transition={{ delay: 11.5, duration: 1.5, ease: "easeInOut" }}
                                className="h-full bg-orange-400 shadow-[0_0_8px_rgba(251,146,60,0.5)]"
                            />
                        </div>
                        <div className="flex items-center gap-3 pt-1 border-t border-white/10">
                            <Car className="w-4 h-4 text-primary-main" />
                            <span className="text-sm font-bold tracking-tight">5,412 {t("Hero.visuals.activeUnits")}</span>
                        </div>
                    </motion.div>

                    {/* Final Messaging Reveal - Dynamic Blur and line-by-line */}
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { backgroundColor: "rgba(0,0,0,0)", backdropFilter: "blur(0px)" },
                            visible: {
                                backgroundColor: "rgba(0,0,0,0.5)",
                                backdropFilter: "blur(4px)",
                                transition: {
                                    delay: 7.0,
                                    duration: 1.5,
                                    staggerChildren: 1.2,
                                    delayChildren: 7.0
                                }
                            }
                        }}
                        className="absolute inset-0 z-30 flex items-center justify-center p-8 rounded-2xl pointer-events-none overflow-hidden"
                    >
                        <div className="flex flex-col items-center text-center gap-6">
                            <motion.h2
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0 }
                                }}
                                transition={{ duration: 1.5, ease: "easeOut" }}
                                className="text-white text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tighter drop-shadow-2xl"
                            >
                                {t("Hero.visuals.seeTransport")}
                            </motion.h2>

                            <motion.p
                                variants={{
                                    hidden: { opacity: 0, y: 30 },
                                    visible: { opacity: 1, y: 0 }
                                }}
                                transition={{ duration: 1.8, ease: "easeOut" }}
                                className="text-white/90 text-xl sm:text-2xl lg:text-3xl font-bold uppercase tracking-tight leading-tight drop-shadow-xl"
                            >
                                {t("Hero.visuals.smartOutsourcing")} <span className="text-primary-main font-black">{t("Navigation.logo")}</span>
                            </motion.p>
                        </div>
                    </motion.div>

                    {/* Center-ish Overlay: Transparent Map */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.15 }}
                        transition={{ delay: 5.5, duration: 2.5 }}
                        className="absolute inset-0 pointer-events-none z-10 flex items-center justify-center"
                    >
                        <MapIcon className="w-2/3 h-2/3 text-white opacity-20" />
                    </motion.div>
                </div>

                {/* Replay Overlay - Centered below brand with pulsing orange bulb */}
                {
                    showReplay && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50 pointer-events-auto"
                        >
                            <motion.button
                                initial={{ scale: 0.5 }}
                                animate={{ scale: 1 }}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={handleReplay}
                                className="group relative flex items-center justify-center p-3 rounded-full bg-primary-main text-white shadow-[0_0_20px_rgba(var(--color-primary-main-rgb),0.5)]"
                                title={t("Hero.visuals.replayTooltip")}
                            >
                                <Play className="w-4 h-4 fill-current relative z-10" />

                                {/* Pulse layers - Slower animation */}
                                <div className="absolute inset-0 rounded-full bg-primary-main animate-ping opacity-20 duration-[3000ms]"></div>
                                <div className="absolute -inset-1 rounded-full bg-primary-main/10 animate-pulse duration-[2000ms]"></div>
                            </motion.button>
                        </motion.div>
                    )
                }
            </div >

            {/* Decorative Background element */}
            < div className="absolute -z-10 -right-20 -bottom-20 w-[400px] h-[400px] bg-primary-main/10 rounded-full blur-3xl" ></div >
        </div >
    );
};
