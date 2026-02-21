import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import mascotImg from '../assets/image (1).png';
import { useTranslation } from 'react-i18next';

export default function Loader({ onComplete }) {
    const container = useRef();
    const mascot = useRef();
    const progressText = useRef();
    const { t } = useTranslation();

    useEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline({
                onComplete: onComplete
            });

            // Pulse animation for mascot while loading
            gsap.to(mascot.current, {
                scale: 1.1,
                yoyo: true,
                repeat: 3, // Simulate loading pulses
                duration: 0.5,
                ease: 'power1.inOut'
            });

            // Simulate progress counting up
            gsap.to(progressText.current, {
                innerText: 100,
                duration: 1.5,
                snap: { innerText: 1 },
                ease: 'power1.inOut'
            });

            // Final reveal
            tl.delay(1.6)
                .to(mascot.current, {
                    scale: 0.8,
                    opacity: 0,
                    duration: 0.5,
                    ease: 'power3.inOut'
                })
                .to(progressText.current, {
                    opacity: 0,
                    duration: 0.3
                }, "<")
                .to(container.current, {
                    yPercent: -100,
                    duration: 1,
                    ease: 'power4.inOut',
                    borderBottomLeftRadius: '50% 20%',
                    borderBottomRightRadius: '50% 20%'
                }, "-=0.2");

        }, container);

        return () => ctx.revert();
    }, [onComplete]);

    return (
        <div ref={container} className="fixed inset-0 z-[100] bg-primary flex flex-col items-center justify-center pointer-events-none origin-bottom text-background">
            <div className="relative flex flex-col items-center justify-center">
                <img
                    ref={mascot}
                    src={mascotImg}
                    alt="Pečenjara Slon Loader"
                    className="w-32 h-32 md:w-48 md:h-48 object-contain drop-shadow-2xl"
                />
                <div className="mt-8 flex items-center justify-center gap-2 font-data text-gradient-accent font-bold tracking-widest text-lg">
                    <span ref={progressText}>0</span>% // UČITAVANJE
                </div>
            </div>
        </div>
    );
}
