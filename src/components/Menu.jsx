import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslation } from 'react-i18next';
import pdfMenu from '../assets/PEČENJARA SLON LETAK FINAL_260208_191613.pdf';
import menuBg from '../assets/Hero-2.jpg (1).jpeg';
import { Download, FileText } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Menu() {
    const { t } = useTranslation();
    const container = useRef();

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from('.cta-card', {
                scrollTrigger: {
                    trigger: container.current,
                    start: 'top 75%'
                },
                scale: 0.95,
                y: 40,
                opacity: 0,
                duration: 0.8,
                ease: 'power3.out'
            });
        }, container);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={container} className="relative w-full py-32 px-8 overflow-hidden" id="menu">
            <div className="absolute inset-0 z-0">
                <img
                    src={menuBg}
                    alt="Menu Background Spread"
                    className="w-full h-full object-cover opacity-60 filter blur-sm"
                />
                <div className="absolute inset-0 bg-primary/90 mix-blend-multiply"></div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto cta-card">
                <div className="bg-background rounded-[3rem] p-10 md:p-16 shadow-2xl border border-white/20 text-center flex flex-col items-center relative overflow-hidden">

                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

                    <div className="w-20 h-20 rounded-full bg-gradient-accent text-white flex items-center justify-center mb-8 shadow-lg shadow-accent/30">
                        <FileText size={32} />
                    </div>

                    <h2 className="font-drama font-bold text-4xl md:text-6xl text-primary tracking-tight mb-4">
                        {t('menu.title')}
                    </h2>
                    <p className="font-sans text-text-dark/70 text-lg md:text-xl max-w-lg mx-auto leading-relaxed mb-10">
                        {t('menu.desc')}
                    </p>

                    <a
                        href={pdfMenu}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative overflow-hidden rounded-full bg-gradient-accent px-10 py-5 text-xl font-bold text-white transition-all hover:scale-105 active:scale-95 shadow-xl shadow-accent/30 flex items-center gap-3 w-full sm:w-auto justify-center"
                    >
                        <span className="relative z-10 flex items-center gap-3">
                            {t('menu.cta')} <Download size={20} strokeWidth={2.5} />
                        </span>
                        <div className="absolute inset-0 -translate-x-full bg-primary transition-transform duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:translate-x-0"></div>
                    </a>
                </div>
            </div>
        </section>
    );
}
