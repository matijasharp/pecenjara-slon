import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useTranslation } from 'react-i18next';
import heroSpread from '../assets/Hero-1.jpg (1).jpeg';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
    const { t } = useTranslation();
    const container = useRef();

    useEffect(() => {
        let ctx = gsap.context(() => {
            // Small delay to wait for loader to finish its exit
            gsap.from('.hero-elem', {
                y: 50,
                opacity: 0,
                duration: 1.2,
                stagger: 0.1,
                ease: 'power3.out',
                delay: 2.2
            });

            gsap.to('.hero-bounce', {
                y: 10,
                repeat: -1,
                yoyo: true,
                ease: 'power1.inOut',
                duration: 1.5,
                delay: 3.5
            });
        }, container);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={container} className="relative h-[100dvh] w-full flex items-center justify-center pb-12 px-8 overflow-hidden bg-primary">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src={heroSpread}
                    alt="Pečenjara Slon Food Spread"
                    className="w-full h-full object-cover opacity-80"
                />
                {/* Dark overlay to ensure text is readable but keeps the appetizing food visible */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-primary/30 mix-blend-multiply"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-5xl text-background flex flex-col items-center text-center w-full mt-24">
                <h1 className="flex flex-col items-center">
                    <span className="hero-elem font-sans font-bold text-xl md:text-3xl tracking-widest text-background/80 uppercase mb-4">
                        {t('hero.subtitle')}
                    </span>
                    <span className="hero-elem font-drama text-6xl md:text-8xl lg:text-[9rem] leading-[0.9] text-white drop-shadow-2xl">
                        {t('hero.title1')}<br />
                        <span className="text-gradient-accent italic">{t('hero.title2')}</span>
                    </span>
                </h1>
                <p className="hero-elem mt-8 font-sans text-lg md:text-2xl max-w-2xl text-background/90 leading-relaxed font-medium drop-shadow-md">
                    {t('hero.desc')}
                </p>
                <div className="hero-elem mt-12 flex flex-col sm:flex-row gap-4">
                    <a href="#menu" className="group relative overflow-hidden rounded-full bg-gradient-accent px-8 py-4 text-lg font-bold text-white transition-transform hover:scale-105 active:scale-95 shadow-xl shadow-accent/30 flex items-center gap-2">
                        <span className="relative z-10">{t('hero.cta')}</span>
                        <div className="absolute inset-0 -translate-x-full bg-primary transition-transform duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:translate-x-0"></div>
                    </a>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hero-elem hero-bounce opacity-60 text-white flex flex-col items-center gap-2">
                <span className="font-data text-xs tracking-widest uppercase">{t('hero.scroll')}</span>
                <ArrowDown size={20} />
            </div>
        </section>
    );
}
