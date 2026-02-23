"use client";

import { motion } from "framer-motion";
import { Verified, Car, Navigation, Fuel, Activity, Map as MapIcon, Play, Volume2, VolumeX } from "lucide-react";

interface HeroOverlaysProps {
    dict: Record<string, string>;
    isMuted: boolean;
    showReplay: boolean;
    toggleMute: () => void;
    handleReplay: () => void;
}

export const HeroOverlays = ({ dict, isMuted, showReplay, toggleMute, handleReplay }: HeroOverlaysProps) => {
    return (
        <>
            {/* Top Left: GPS Status */}
            <motion.div
                initial={{ opacity: 0, x: -40, y: -20 }}
                animate={{ opacity: 1, x: -12, y: 0 }}
                transition={{ delay: 12.5, duration: 1.2, ease: "easeOut" }}
                className="absolute top-2 left-2 sm:-top-4 sm:-left-6 z-40 bg-white/10 backdrop-blur-xl p-2 sm:px-4 sm:py-2 rounded-lg border border-white/20 flex items-center gap-2 sm:gap-3 text-text-inverse shadow-xl"
            >
                <Navigation className="w-3 h-3 sm:w-4 sm:h-4 text-primary-main animate-pulse" />
                <div className="flex flex-col">
                    <span className="hidden sm:inline text-[10px] uppercase font-bold tracking-widest text-text-inverse">{dict.gpsSignal}</span>
                    <span className="text-xs font-mono font-bold text-text-inverse"><span className="hidden sm:inline">{dict.active} / </span>1.2m</span>
                </div>
            </motion.div>

            {/* Top Right: SLA */}
            <motion.div
                initial={{ opacity: 0, x: 40, y: -20 }}
                animate={{ opacity: 1, x: 12, y: 0 }}
                transition={{ delay: 13.0, duration: 1.2, ease: "easeOut" }}
                className="absolute top-2 right-2 sm:-top-4 sm:-right-6 z-40 bg-white/10 backdrop-blur-xl p-2 sm:px-4 sm:py-2 rounded-lg border border-white/20 flex items-center gap-2 sm:gap-3 text-text-inverse shadow-xl"
            >
                <Verified className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
                <div className="flex flex-col text-right">
                    <span className="hidden sm:inline text-[10px] uppercase font-bold tracking-widest text-text-inverse">{dict.slaRate}</span>
                    <span className="text-xs font-mono font-bold text-text-inverse">98.4%</span>
                </div>
            </motion.div>

            {/* Bottom Left: Telemetry */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 12 }}
                transition={{ delay: 13.5, duration: 1.2, ease: "easeOut" }}
                className="absolute bottom-2 left-2 sm:-bottom-4 sm:-left-8 z-40 bg-navy/60 backdrop-blur-xl p-3 sm:p-4 rounded-xl border border-white/10 flex items-center gap-3 sm:gap-4 text-text-inverse shadow-2xl"
            >
                <div className="bg-primary-main/30 p-2 sm:p-2.5 rounded-lg">
                    <Activity className="w-4 h-4 sm:w-5 sm:h-5 text-primary-main" />
                </div>
                <div className="hidden sm:block">
                    <p className="text-[10px] uppercase font-bold tracking-widest text-text-inverse">{dict.telemetry}</p>
                    <p className="text-sm font-mono font-bold text-text-inverse">{dict.surface}: {dict.highway}</p>
                </div>
            </motion.div>

            {/* Bottom Right: Fuel & Fleet */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 14.0, duration: 1.2, ease: "easeOut" }}
                className="absolute bottom-2 right-2 sm:-bottom-6 sm:-right-10 z-40 bg-navy/60 backdrop-blur-xl p-3 sm:p-5 rounded-xl border border-white/10 flex flex-col gap-2 sm:gap-3 text-text-inverse shadow-2xl min-w-[80px] sm:min-w-[180px]"
            >
                <div className="flex items-center justify-between gap-3 sm:gap-4">
                    <div className="flex items-center gap-2 sm:gap-2.5">
                        <Fuel className="w-3 h-3 sm:w-4 sm:h-4 text-primary-main" />
                        <span className="hidden sm:inline text-xs font-bold uppercase text-text-inverse">{dict.fuelLevel}</span>
                    </div>
                    <span className="text-xs font-mono text-primary-main font-bold">74%</span>
                </div>
                <div className="hidden sm:block h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "74%" }}
                        transition={{ delay: 14.5, duration: 1.5, ease: "easeInOut" }}
                        className="h-full bg-primary-main"
                        style={{ boxShadow: "0 0 8px var(--color-primary-main, #f57a00)" }}
                    />
                </div>
                <div className="flex items-center gap-2 sm:gap-3 pt-0 sm:pt-1 sm:border-t border-white/10">
                    <Car className="w-3 h-3 sm:w-4 sm:h-4 text-primary-main" />
                    <span className="text-[10px] sm:text-sm font-bold tracking-tight">5,412 <span className="hidden sm:inline">{dict.activeUnits}</span></span>
                </div>
            </motion.div>

            {/* Final Messaging Reveal */}
            <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { backgroundColor: "rgba(0,0,0,0)", backdropFilter: "blur(0px)" },
                    visible: {
                        backgroundColor: "rgba(0,0,0,0.5)",
                        backdropFilter: "blur(4px)",
                        transition: {
                            delay: 10.0,
                            duration: 1.5,
                            staggerChildren: 1.2,
                            delayChildren: 10.0
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
                        className="text-text-inverse text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tighter drop-shadow-2xl"
                    >
                        {dict.seeTransport}
                    </motion.h2>

                    <motion.p
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        transition={{ duration: 1.8, ease: "easeOut" }}
                        className="text-text-inverse text-xl sm:text-2xl lg:text-3xl font-bold uppercase tracking-tight leading-tight drop-shadow-xl"
                    >
                        {dict.smartOutsourcing} <span className="text-primary-main font-black">{dict.logo}</span>
                    </motion.p>
                </div>
            </motion.div>

            {/* Center-ish Overlay: Transparent Map */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.15 }}
                transition={{ delay: 8.5, duration: 2.5 }}
                className="absolute inset-0 pointer-events-none z-10 flex items-center justify-center"
            >
                <MapIcon className="w-2/3 h-2/3 text-text-inverse opacity-20" />
            </motion.div>

            {/* Action Buttons Container */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4">
                {/* Sound Toggle Button */}
                <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={toggleMute}
                    className="p-3 rounded-full bg-navy/60 backdrop-blur-xl border border-white/10 text-text-inverse shadow-2xl hover:bg-navy/80 transition-colors pointer-events-auto"
                    title={isMuted ? dict.unmuteTooltip : dict.muteTooltip}
                >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </motion.button>

                {/* Replay Overlay */}
                {
                    showReplay && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="pointer-events-auto"
                        >
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={handleReplay}
                                className="group relative flex items-center justify-center p-3 rounded-full bg-primary-main text-text-inverse shadow-[0_0_20px_rgba(var(--color-primary-main-rgb),0.5)]"
                                title={dict.replayTooltip}
                            >
                                <Play className="w-4 h-4 fill-current relative z-10" />
                                <div className="absolute inset-0 rounded-full bg-primary-main animate-ping opacity-20 duration-[3000ms]"></div>
                                <div className="absolute -inset-1 rounded-full bg-primary-main/10 animate-pulse duration-[2000ms]"></div>
                            </motion.button>
                        </motion.div>
                    )
                }
            </div>
        </>
    );
};
