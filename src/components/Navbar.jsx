import React, { useEffect, useState, useRef } from 'react';
import { Volume2, VolumeX, Globe, Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import gsap from 'gsap';
import mascotImg from '../assets/image (1).png';
import brandAudio from '../assets/Slon.mp3.mpeg';

export default function Navbar() {
    const { t, i18n } = useTranslation();
    const [scrolled, setScrolled] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const initialRender = useRef(true);
    const audioRef = useRef(null);
    const mobileMenuRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleAudio = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        if (isMobileMenuOpen) toggleMobileMenu();
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    useEffect(() => {
        if (initialRender.current) {
            initialRender.current = false;
            gsap.set(mobileMenuRef.current, {
                yPercent: -100,
                borderBottomLeftRadius: '50% 20%',
                borderBottomRightRadius: '50% 20%',
                autoAlpha: 0
            });
            return;
        }

        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
            gsap.to(mobileMenuRef.current, {
                yPercent: 0,
                borderBottomLeftRadius: '0%',
                borderBottomRightRadius: '0%',
                duration: 0.8,
                ease: 'power4.inOut',
                autoAlpha: 1
            });
            gsap.fromTo('.mobile-link',
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, delay: 0.3, ease: 'back.out(1.7)' }
            );
        } else {
            document.body.style.overflow = '';
            gsap.to(mobileMenuRef.current, {
                yPercent: -100,
                borderBottomLeftRadius: '50% 20%',
                borderBottomRightRadius: '50% 20%',
                duration: 0.8,
                ease: 'power4.inOut',
                onComplete: () => gsap.set(mobileMenuRef.current, { autoAlpha: 0 })
            });
        }
    }, [isMobileMenuOpen]);

    return (
        <nav className={`fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 rounded-full px-4 md:px-6 py-3 flex items-center justify-between gap-4 md:gap-4 lg:gap-8 w-[95%] max-w-5xl ${scrolled
            ? 'bg-background/90 backdrop-blur-xl text-primary border border-primary/10 shadow-lg'
            : 'bg-background/40 backdrop-blur-md text-primary border border-white/20 shadow-md'
            }`}>
            {/* Audio Element */}
            <audio ref={audioRef} src={brandAudio} loop preload="auto" />

            {/* Brand / Logo */}
            <a href="/" onClick={(e) => { e.preventDefault(); window.scrollTo(0, 0); window.location.reload(); }} className="flex items-center gap-3 cursor-pointer group">
                <img src={mascotImg} alt="Elephant Chef" className="w-10 h-10 md:w-12 md:h-12 object-contain group-hover:scale-110 transition-transform duration-300" />
                <div className="font-drama font-bold text-lg md:text-2xl tracking-tight leading-none whitespace-nowrap uppercase group-hover:opacity-80 transition-opacity duration-300">
                    <span className="text-gradient-accent">PEČENJARA</span> <span className="text-primary">SLON</span>
                </div>
            </a>

            {/* Links */}
            <div className="hidden md:flex items-center gap-4 lg:gap-8 font-sans text-sm font-bold text-primary/80">
                <a href="#menu" className="hover:text-accent hover:-translate-y-[1px] transition-all">{t('nav.menu')}</a>
                <a href="#protocol" className="hover:text-accent hover:-translate-y-[1px] transition-all">{t('nav.quality')}</a>
                <a href="#gallery" className="hover:text-accent hover:-translate-y-[1px] transition-all">{t('nav.gallery')}</a>
                <a href="#location" className="hover:text-accent hover:-translate-y-[1px] transition-all">{t('nav.location')}</a>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2 md:gap-3 z-[60]">

                {/* Language Switcher Desktop */}
                <div className="group relative dropdown curser-pointer hidden md:block">
                    <button className="flex items-center gap-1 font-sans text-xs font-bold text-primary/60 hover:text-primary transition-colors px-2 py-1">
                        <Globe size={16} />
                        <span className="uppercase">{i18n.language}</span>
                    </button>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-16 bg-background rounded-xl shadow-xl border border-text-dark/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all flex flex-col overflow-hidden">
                        <button onClick={() => changeLanguage('hr')} className="hover:bg-primary/5 px-2 py-2 text-xs font-bold font-sans uppercase">HR</button>
                        <button onClick={() => changeLanguage('en')} className="hover:bg-primary/5 px-2 py-2 text-xs font-bold font-sans uppercase border-t border-text-dark/5">EN</button>
                        <button onClick={() => changeLanguage('de')} className="hover:bg-primary/5 px-2 py-2 text-xs font-bold font-sans uppercase border-t border-text-dark/5">DE</button>
                    </div>
                </div>

                <button
                    onClick={toggleAudio}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/5 text-primary hover:bg-primary/10 transition-colors"
                    title="Toggle Music"
                >
                    {isPlaying ? <Volume2 size={18} /> : <VolumeX size={18} />}
                </button>

                <a href="#delivery" className="group relative overflow-hidden rounded-full bg-gradient-accent px-5 py-2.5 text-sm font-bold text-white transition-transform hover:scale-105 active:scale-95 whitespace-nowrap shadow-md shadow-accent/20 hidden sm:block">
                    <span className="relative z-10">{t('nav.order')}</span>
                    <div className="absolute inset-0 -translate-x-full bg-primary transition-transform duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:translate-x-0"></div>
                </a>

                {/* Mobile Hamburger Toggle */}
                <button
                    onClick={toggleMobileMenu}
                    className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-primary/5 text-primary hover:bg-primary/10 transition-colors z-[60]"
                >
                    {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>

            {/* Fullscreen Mobile Overlay */}
            <div
                ref={mobileMenuRef}
                className="fixed inset-0 w-full h-[100dvh] bg-background z-[55] flex flex-col justify-center items-center overflow-hidden invisible"
            >
                <div className="flex flex-col items-center gap-8 w-full px-8">
                    {/* Mascot & Brand big display */}
                    <a href="/" onClick={(e) => { e.preventDefault(); window.scrollTo(0, 0); window.location.reload(); }} className="mobile-link flex flex-col items-center gap-4 mb-4 cursor-pointer group">
                        <img src={mascotImg} alt="Mascot" className="w-20 h-20 object-contain drop-shadow-lg group-hover:scale-105 transition-transform duration-300" />
                        <div className="font-drama font-bold text-3xl tracking-tight leading-none text-center group-hover:opacity-80 transition-opacity duration-300">
                            <span className="text-gradient-accent">PEČENJARA</span> <span className="text-primary">SLON</span>
                        </div>
                    </a>

                    <div className="flex flex-col items-center gap-6 w-full max-w-sm">
                        <a href="#menu" onClick={toggleMobileMenu} className="mobile-link w-full text-center text-3xl font-drama font-bold text-primary hover:text-accent transition-colors py-2 border-b border-primary/10">
                            {t('nav.menu')}
                        </a>
                        <a href="#protocol" onClick={toggleMobileMenu} className="mobile-link w-full text-center text-3xl font-drama font-bold text-primary hover:text-accent transition-colors py-2 border-b border-primary/10">
                            {t('nav.quality')}
                        </a>
                        <a href="#gallery" onClick={toggleMobileMenu} className="mobile-link w-full text-center text-3xl font-drama font-bold text-primary hover:text-accent transition-colors py-2 border-b border-primary/10">
                            {t('nav.gallery')}
                        </a>
                        <a href="#location" onClick={toggleMobileMenu} className="mobile-link w-full text-center text-3xl font-drama font-bold text-primary hover:text-accent transition-colors py-2 border-b border-primary/10">
                            {t('nav.location')}
                        </a>
                        <a href="#delivery" onClick={toggleMobileMenu} className="mobile-link w-full text-center bg-gradient-accent text-white py-4 rounded-full text-2xl font-drama font-bold mt-4 shadow-lg active:scale-95 transition-transform">
                            {t('nav.order')}
                        </a>
                    </div>

                    <div className="mobile-link flex items-center gap-4 mt-8 bg-primary/5 p-2 rounded-full">
                        <button onClick={() => changeLanguage('hr')} className={`w-12 h-12 rounded-full font-bold font-sans text-sm ${i18n.language === 'hr' ? 'bg-primary text-white scale-110 shadow-md' : 'text-primary'}`}>HR</button>
                        <button onClick={() => changeLanguage('en')} className={`w-12 h-12 rounded-full font-bold font-sans text-sm ${i18n.language === 'en' ? 'bg-primary text-white scale-110 shadow-md' : 'text-primary'}`}>EN</button>
                        <button onClick={() => changeLanguage('de')} className={`w-12 h-12 rounded-full font-bold font-sans text-sm ${i18n.language === 'de' ? 'bg-primary text-white scale-110 shadow-md' : 'text-primary'}`}>DE</button>
                    </div>

                    {/* Agency Credit */}
                    <p className="mobile-link text-[10px] font-medium text-primary/40 uppercase tracking-widest mt-auto mb-8 flex gap-1 items-center font-sans">
                        Powered by <a href="http://aoraagency.com/" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'Roboto, sans-serif' }} className="font-bold text-primary/60 text-xs tracking-normal normal-case hover:text-accent transition-colors">AorAAgency</a>
                    </p>
                </div>
            </div>

        </nav>
    );
}
