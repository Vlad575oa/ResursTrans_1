"use client";

import Image, { ImageProps } from "next/image";
import { useRef, useState, useEffect } from "react";

interface ScrollImageProps extends ImageProps {
    containerClassName?: string;
}

export function ScrollImage({ containerClassName = "", className = "", ...props }: ScrollImageProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [inCenter, setInCenter] = useState(false);

    useEffect(() => {
        // Only run intersection observer on mobile/tablet to save performance on desktop
        if (window.innerWidth >= 768) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setInCenter(entry.isIntersecting);
            },
            {
                // Triggers later (middle 10% of the screen)
                rootMargin: "-45% 0px -45% 0px",
                threshold: 0,
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div ref={ref} className={`relative w-full h-full ${containerClassName}`}>
            <Image
                {...props}
                className={`${className} transition-all duration-700 md:grayscale md:group-hover:grayscale-0 ${inCenter ? 'max-md:grayscale-0 max-md:scale-105' : 'max-md:grayscale max-md:scale-100'}`}
            />
        </div>
    );
}
