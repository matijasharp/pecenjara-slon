import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslation } from 'react-i18next';
import philosophyBg from '../assets/Top Burger.jpg (1).jpeg';

gsap.registerPlugin(ScrollTrigger);

export default function Philosophy() {
    const { t } = useTranslation();
    const container = useRef();
    const bgImage = useRef();

    useEffect(() => {
        let ctx = gsap.context(() => {
            // Parallax background
            gsap.to(bgImage.current, {
                yPercent: 30,
                ease: 'none',
                scrollTrigger: {
                    trigger: container.current,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true
                }
            });

            // Text reveal
            gsap.from('.reveal-line', {
                scrollTrigger: {
                    trigger: container.current,
                    start: 'top 60%',
                },
                y: 50,
                opacity: 0,
                duration: 1.2,
                stagger: 0.15,
                ease: 'power3.out'
            });
        }, container);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={container} className="relative w-full py-48 overflow-hidden bg-primary">
            <div className="absolute inset-0 bg-primary/80 z-10 mix-blend-multiply pointer-events-none"></div>

            <div
                ref={bgImage}
                className="absolute inset-0 -top-[20%] h-[140%] w-full z-0 opacity-40 mix-blend-luminosity"
                style={{
                    backgroundImage: `url("${philosophyBg}")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />

            <div className="relative z-20 max-w-5xl mx-auto px-8 flex flex-col items-center justify-center text-center">
                <div className="overflow-hidden mb-6">
                    <p className="reveal-line font-sans font-bold text-xl md:text-2xl text-background/60 tracking-widest uppercase">
                        {t('philosophy.sub')}
                    </p>
                </div>

                <h2 className="flex flex-col gap-2 items-center">
                    <span className="reveal-line font-drama text-6xl md:text-8xl lg:text-9xl text-background leading-none drop-shadow-xl">
                        {t('philosophy.title1')}
                    </span>
                    <span className="reveal-line font-drama text-7xl md:text-9xl lg:text-[10rem] text-gradient-accent leading-[0.85] mt-2 drop-shadow-2xl">
                        {t('philosophy.title2')}
                    </span>
                </h2>
            </div>
        </section>
    );
}
