import React from 'react';

export const BrandLogo: React.FC = () => {
    const title = "MELLORE";
    const subtitle = "ESTÉTICA AVANÇADA";

    return (
        <div className="flex flex-col items-center justify-center text-brand-gold relative z-10">
            {/* Round Logo Icon - Static */}
            <div className="mb-6 relative w-24 h-24 md:w-32 md:h-32">
                <img
                    src="/images/logo-3d.png"
                    alt="Mellore Logo"
                    className="w-full h-full object-contain rounded-full shadow-2xl shadow-brand-gold/20"
                />
            </div>

            {/* Main Title - Serif Font */}
            <div className="flex mb-2">
                {title.split('').map((char, index) => (
                    <span
                        key={index}
                        className="font-logo-serif text-5xl md:text-7xl font-bold tracking-wider inline-block text-brand-gold"
                        style={{
                            textShadow: '0 4px 12px rgba(192, 160, 98, 0.3)'
                        }}
                    >
                        {char}
                    </span>
                ))}
            </div>

            {/* Subtitle - Sans Font */}
            <div className="flex">
                {subtitle.split('').map((char, index) => (
                    <span
                        key={index}
                        className="font-logo-sans text-[10px] md:text-sm tracking-[0.4em] text-brand-gold/80 inline-block"
                    >
                        {char === ' ' ? '\u00A0' : char}
                    </span>
                ))}
            </div>
        </div>
    );
};
