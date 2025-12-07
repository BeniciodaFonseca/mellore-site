import React, { useEffect, useState } from 'react';
import { BrandLogo } from './BrandLogo';

interface SplashScreenProps {
    onFinish: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onFinish }) => {
    const [isExiting, setIsExiting] = useState(false);
    const [message, setMessage] = useState("Preparando sua experiência...");

    useEffect(() => {
        // Change message after 2.0s (Allow time for letter animation)
        const msgTimer = setTimeout(() => {
            setMessage("Realçando sua beleza única...");
        }, 2000);

        // Start exit animation (slide up) after 3.5s
        const timer = setTimeout(() => {
            setIsExiting(true);
        }, 3500);

        // Notify parent after animation completes (0.8s slide up) - Total 4.3s
        const finishTimer = setTimeout(() => {
            onFinish();
        }, 4300);

        return () => {
            clearTimeout(msgTimer);
            clearTimeout(timer);
            clearTimeout(finishTimer);
        };
    }, [onFinish]);

    return (
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center bg-brand-teal transition-all duration-1000 ease-in-out ${isExiting ? 'animate-slide-up pointer-events-none' : ''
                }`}
        >
            {/* Content Container */}
            <div className={`relative z-10 flex flex-col items-center transition-opacity duration-500 ${isExiting ? 'opacity-0' : 'opacity-100'
                }`}>
                {/* Pulsing Glow Effect - Intense Gold */}
                <div className="absolute inset-0 bg-brand-gold/20 blur-[100px] rounded-full animate-pulse-slow"></div>

                {/* Animated Brand Logo */}
                <div className="relative z-10 scale-110 md:scale-125 transform transition-transform duration-1000">
                    <BrandLogo />
                </div>

                {/* Loading Bar - Thinner & More Elegant */}
                <div className="mt-12 w-32 h-0.5 bg-white/10 rounded-full overflow-hidden relative z-10">
                    <div className="h-full bg-brand-gold animate-loading-bar shadow-[0_0_15px_rgba(192,160,98,0.9)]"></div>
                </div>

                {/* Loading Message - Elegant Typography */}
                <p className="mt-6 text-brand-gold/90 text-xs md:text-sm font-logo-sans tracking-[0.3em] uppercase animate-pulse-slow text-center min-h-[24px] font-medium">
                    {message}
                </p>
            </div>
        </div>
    );
};
