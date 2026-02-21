import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslation } from 'react-i18next';

import imgBurger from '../assets/Cheesburger.jpg (1).jpeg';
import imgCevapi from '../assets/Ćevapi mali.jpg (1).jpeg';
import imgWrap from '../assets/Tortilja piletina.jpg (1).jpeg';

gsap.registerPlugin(ScrollTrigger);

export default function Protocol() {
    const { t } = useTranslation();
    const container = useRef();

    const steps = [
        {
            id: "01",
            title: t('protocol.steps.1.title'),
            desc: t('protocol.steps.1.desc'),
            image: imgBurger
        },
        {
            id: "02",
            title: t('protocol.steps.2.title'),
            desc: t('protocol.steps.2.desc'),
            image: imgCevapi
        },
        {
            id: "03",
            title: t('protocol.steps.3.title'),
            desc: t('protocol.steps.3.desc'),
            image: imgWrap
        }
    ];

    useEffect(() => {
        let ctx = gsap.context(() => {
            const cards = gsap.utils.toArray('.protocol-card');

            cards.forEach((card, i) => {
                if (i === cards.length - 1) return; // skip last

                ScrollTrigger.create({
                    trigger: card,
                    start: 'top top',
                    pin: true,
                    pinSpacing: false,
                    endTrigger: container.current,
                    end: 'bottom bottom',
                    animation: gsap.to(card, {
                        scale: 0.9 - (cards.length - 1 - i) * 0.05,
                        filter: 'blur(10px)',
                        opacity: 0.4,
                        ease: 'none'
                    }),
                    scrub: true,
                });
            });

        }, container);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={container} className="relative w-full bg-background" id="protocol">
            {steps.map((step, i) => (
                <div
                    key={step.id}
                    className="protocol-card h-[100dvh] w-full sticky top-0 flex items-center justify-center p-8 bg-background border-t border-primary/5"
                >
                    <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                        {/* Image Side */}
                        <div className={`flex justify-center flex-col items-center relative order-2 ${i % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                            <div className="relative w-full max-w-lg aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white/50 bg-white">
                                <img src={step.image} alt={step.title} className="w-full h-full object-cover" />
                            </div>
                        </div>

                        {/* Text Side */}
                        <div className={`order-1 ${i % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                            <div className="font-data font-bold text-gradient-accent text-lg mb-4 tracking-widest flex items-center gap-4">
                                <span className="w-12 h-[2px] bg-gradient-accent inline-block"></span>
                                {t('protocol.sig')} {step.id}
                            </div>
                            <h2 className="font-drama font-bold text-5xl md:text-7xl text-primary tracking-tight mb-6 hidden-text drop-shadow-sm">
                                {step.title}
                            </h2>
                            <p className="font-sans text-xl md:text-2xl text-text-dark/80 leading-relaxed max-w-lg hidden-text font-medium">
                                {step.desc}
                            </p>
                        </div>

                    </div>
                </div>
            ))}
        </section>
    );
}
