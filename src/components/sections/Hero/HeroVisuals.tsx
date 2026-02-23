"use client";

import { Play, Volume2, VolumeX } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import dynamic from "next/dynamic";

const HeroOverlays = dynamic(() => import("./HeroOverlays").then(m => m.HeroOverlays));

export const HeroVisuals = ({ dict }: { dict: Record<string, string> }) => {
    const [key, setKey] = useState(0);
    const videoRef = useRef<HTMLVideoElement>(null);
    const [showReplay, setShowReplay] = useState(false);
    const [isMuted, setIsMuted] = useState(true);
    const [videoSrc, setVideoSrc] = useState<string | null>(null);

    useEffect(() => {
        // Start loading the video slightly after the primary content
        // to free up bandwidth for CSS/Fonts (LCP elements)
        const timer = setTimeout(() => {
            setVideoSrc("/0221.mp4");
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    const toggleMute = () => {
        if (videoRef.current) {
            const nextMuted = !isMuted;
            videoRef.current.muted = nextMuted;
            setIsMuted(nextMuted);
        }
    };

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
                    {videoSrc ? (
                        <video
                            ref={videoRef}
                            src={videoSrc}
                            autoPlay
                            muted={isMuted}
                            playsInline
                            loop={false}
                            poster="/hero-poster.jpg"
                            onEnded={() => setShowReplay(true)}
                            className="w-full h-full object-cover transform transition-transform duration-700 scale-[1.10] md:scale-[1.15] group-hover:scale-[1.15] md:group-hover:scale-[1.20]"
                        />
                    ) : (
                        <div className="w-full h-full bg-navy/20 flex items-center justify-center">
                            {/* Fallback to poster or loading state while source is being delayed */}
                            <img
                                src="/hero-poster.jpg"
                                alt="Hero preview"
                                className="w-full h-full object-cover transform scale-[1.10] md:scale-[1.15]"
                            />
                        </div>
                    )}
                </div>

                {/* --- Immersive Monitoring Overlay (Flowing beyond edges) --- */}

                <div key={key}>
                    <HeroOverlays
                        dict={dict}
                        isMuted={isMuted}
                        showReplay={showReplay}
                        toggleMute={toggleMute}
                        handleReplay={handleReplay}
                    />
                </div>
            </div >

            {/* Decorative Background element */}
            < div className="absolute -z-10 -right-20 -bottom-20 w-[400px] h-[400px] bg-primary-main/10 rounded-full blur-3xl" ></div >
        </div >
    );
};
