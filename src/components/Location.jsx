import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslation } from 'react-i18next';
import { MapPin, Clock, Navigation, Phone } from 'lucide-react';
import heroSpread from '../assets/Hero-3.jpg (1).jpeg'; // Using Hero 3 as a stylistic backdrop for location
import interiorImg from '../assets/slon-interior.png'; // Real Interior

gsap.registerPlugin(ScrollTrigger);

export default function Location() {
    const { t } = useTranslation();
    const container = useRef();

    const mapLink = "https://www.google.com/maps/place/Pe%C4%8Denjara+Slon/@45.8171484,15.8867712,17z/data=!4m6!3m5!1s0x4765d179c855eee3:0x21de92826e59607b!8m2!3d45.8171484!4d15.8867712!16s%2Fg%2F11wpp2sfwv?entry=ttu&g_ep=EgoyMDI2MDIxOC4wIKXMDSoASAFQAw%3D%3D";

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from('.loc-elem', {
                scrollTrigger: {
                    trigger: container.current,
                    start: 'top 75%'
                },
                y: 40,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: 'power3.out'
            });
        }, container);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={container} className="relative w-full py-32 overflow-hidden bg-primary" id="location">
            {/* Background Decor */}
            <div className="absolute inset-0 z-0 opacity-20 object-cover">
                <img src={heroSpread} alt="Background" className="w-full h-full object-cover filter blur-md grayscale" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-primary"></div>
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-8 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Info Side */}
                <div className="flex flex-col text-background">
                    <div className="loc-elem mb-6 flex items-center gap-3">
                        <span className="w-10 h-[2px] bg-gradient-accent inline-block"></span>
                        <span className="font-data font-bold tracking-widest text-gradient-accent uppercase text-sm">
                            {t('location.title')}
                        </span>
                    </div>

                    <h2 className="loc-elem font-drama font-bold text-5xl md:text-7xl mb-6 leading-tight hidden-text uppercase">
                        <span className="text-gradient-accent">PEČENJARA</span> <span className="text-white">SLON</span>
                    </h2>
                    <p className="loc-elem font-sans text-background/80 text-lg md:text-xl mb-12 max-w-md">
                        {t('location.desc')}
                    </p>

                    <div className="loc-elem flex flex-col gap-8 mb-12 border-L border-accent/20 pl-6 border-l-2">
                        <div>
                            <div className="flex items-center gap-2 font-data text-gradient-accent font-bold mb-2">
                                <MapPin size={18} /> {t('location.addressLabel')}
                            </div>
                            <p className="font-sans text-xl font-medium">{t('location.address')}</p>
                        </div>

                        <div>
                            <div className="flex items-center gap-2 font-data text-gradient-accent font-bold mb-2">
                                <Clock size={18} /> {t('location.hoursLabel')}
                            </div>
                            <p className="font-sans text-lg text-background/80">{t('location.hours1')}</p>
                            <p className="font-sans text-lg text-background/80">{t('location.hours2')}</p>
                        </div>

                        <div>
                            <div className="flex items-center gap-2 font-data text-gradient-accent font-bold mb-2">
                                <Phone size={18} /> {t('location.phoneLabel')}
                            </div>
                            <a href="tel:+38517001256" className="font-sans text-xl font-medium hover:text-accent transition-colors block w-fit">
                                {t('location.phone')}
                            </a>
                        </div>
                    </div>

                    <a
                        href={mapLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="loc-elem group relative overflow-hidden rounded-full bg-gradient-accent px-8 py-4 text-lg font-bold text-white transition-all hover:scale-105 active:scale-95 shadow-xl shadow-accent/20 flex items-center gap-3 w-fit"
                    >
                        <span className="relative z-10 flex items-center gap-3">
                            <Navigation size={20} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                            {t('location.btn')}
                        </span>
                        <div className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:translate-x-0"></div>
                    </a>
                </div>

                {/* Map / Visual Side */}
                <div className="loc-elem relative w-full aspect-square md:aspect-video lg:aspect-square bg-primary rounded-[3rem] overflow-hidden shadow-2xl border-4 border-primary/20 flex items-center justify-center p-2 group">
                    {/* Interior image map link */}
                    <a href={mapLink} target="_blank" rel="noopener noreferrer" className="relative w-full h-full rounded-[2.5rem] overflow-hidden block">
                        <div className="absolute inset-0 bg-black/50 z-10 transition-colors group-hover:bg-black/30"></div>
                        <img src={interiorImg} alt="Pečenjara Slon Interior" className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-700 group-hover:scale-105" />

                        {/* Map UI Elements */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gradient-accent flex flex-col items-center group-hover:-translate-y-6 transition-transform duration-500 z-20">
                            <div className="w-16 h-16 bg-gradient-accent text-white rounded-full flex items-center justify-center shadow-lg shadow-accent/40 mb-2">
                                <MapPin size={32} />
                            </div>
                            <div className="bg-primary text-white font-data text-xs font-bold px-4 py-2 rounded-full shadow-lg whitespace-nowrap uppercase">
                                PEČENJARA SLON
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
}
