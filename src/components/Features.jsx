import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FileText, Printer, MapPin, Map } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import interiorImg from '../assets/slon-interior.png'; // Real Interior

gsap.registerPlugin(ScrollTrigger);

// Card 1: Order Tickets on a rail
function TicketRail({ t }) {
    const [cards, setCards] = useState([
        { id: 1, title: t('features.card1.anim1'), desc: t('features.card1.anim1desc') },
        { id: 2, title: t('features.card1.anim2'), desc: t('features.card1.anim2desc') },
        { id: 3, title: t('features.card1.anim3'), desc: t('features.card1.anim3desc') }
    ]);

    useEffect(() => {
        // Keep translations synced if language changes
        setCards([
            { id: 1, title: t('features.card1.anim1'), desc: t('features.card1.anim1desc') },
            { id: 2, title: t('features.card1.anim2'), desc: t('features.card1.anim2desc') },
            { id: 3, title: t('features.card1.anim3'), desc: t('features.card1.anim3desc') }
        ]);
    }, [t]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCards(prev => {
                const newCards = [...prev];
                const last = newCards.pop();
                newCards.unshift(last);
                return newCards;
            });
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="h-64 relative w-full flex items-center justify-center pt-6">
            <div className="absolute top-4 left-4 right-4 h-2 bg-text-dark/10 rounded-full z-10 shadow-inner"></div>
            {cards.map((card, idx) => {
                const isFirst = idx === 0;
                const isSecond = idx === 1;

                let x = isFirst ? 0 : isSecond ? -15 : -30;
                let scale = isFirst ? 1 : isSecond ? 0.95 : 0.9;
                let opacity = isFirst ? 1 : isSecond ? 0.6 : 0.3;
                let zIndex = 3 - idx;

                return (
                    <div
                        key={card.id}
                        className="absolute w-full max-w-[16rem] bg-[#fffcf5] border-t-8 border-accent p-5 pt-8 shadow-xl transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ticket-cutout"
                        style={{
                            transform: `translateX(${x}px) scale(${scale})`,
                            opacity,
                            zIndex
                        }}
                    >
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[14px] w-4 h-4 bg-primary/20 rounded-full clip-ticket-hole"></div>
                        <div className="flex items-center gap-3 mb-2">
                            <h3 className="font-drama text-lg font-bold text-primary">{card.title}</h3>
                        </div>
                        <p className="text-text-dark/60 font-sans text-xs font-medium">{card.desc}</p>
                        <div className="mt-4 border-t border-dashed border-text-dark/20 pt-2 flex justify-between font-data text-xs text-text-dark/40">
                            <span>{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                            <span>ZAG-0{card.id}</span>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

// Card 2: Receipt Printer
function ReceiptPrinter({ t }) {
    const container = useRef();
    const receipt = useRef();

    const messages = React.useMemo(() => [
        t('features.card2.feed1'),
        t('features.card2.feed2'),
        t('features.card2.feed3'),
        t('features.card2.feed4'),
        t('features.card2.feed5')
    ], [t]);

    useEffect(() => {
        let ctx = gsap.context(() => {
            // 1. Receipt slides up completely from the bottom
            // 2. Checkmarks appear sequentially
            // 3. Receipt rips and falls away (downwards)
            const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

            tl.set(receipt.current, { y: 250 }) // Start hidden inside printer at bottom
                .to(receipt.current, { y: 0, duration: 1, ease: "power3.out" }); // Slide up

            // Animate the checkmarks
            messages.forEach((_, i) => {
                tl.to(`.check-${i}`, { opacity: 1, scale: 1, duration: 0.25, ease: "back.out(2)" }, `+=${0.4}`);
                tl.to(`.text-${i}`, { color: "#111111", duration: 0.2 }, `<`);
            });

            tl.to(receipt.current, { opacity: 0, y: -40, duration: 0.5, ease: "power2.in" }, "+=1.5")
                .set(messages.map((_, i) => `.check-${i}`), { opacity: 0, scale: 0.5 })
                .set(messages.map((_, i) => `.text-${i}`), { color: "#9ca3af" });

        }, container);
        return () => ctx.revert();
    }, [messages]);

    return (
        <div ref={container} className="h-64 relative w-full rounded-3xl bg-background border border-text-dark/10 p-6 shadow-xl flex flex-col items-center justify-end overflow-hidden pb-12">

            {/* Receipt Paper (now above the printer slot logically) */}
            <div ref={receipt} className="w-[85%] bg-white border border-gray-200 mb-2 shadow-lg p-5 flex flex-col gap-3 font-sans text-xs z-10 relative ticket-cutout-inverted">
                <div className="text-center font-bold border-b border-dashed border-gray-300 pb-2 mb-1 uppercase text-primary tracking-widest text-[10px]">
                    {t('features.card2.feed')}
                </div>
                {messages.map((m, i) => (
                    <div key={i} className="flex gap-3 items-center text-gray-400">
                        <div className="relative w-4 h-4 flex-shrink-0">
                            {/* Outline placeholder */}
                            <div className="absolute inset-0 rounded border border-gray-300"></div>
                            {/* Actual checkmark */}
                            <div className={`check-${i} absolute inset-0 rounded bg-green-500 border-none text-white opacity-0 scale-50 flex items-center justify-center`}>
                                <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[10px] h-[10px]">
                                    <path d="M2.5 7.5L5.5 10.5L11.5 3.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                        <span className={`text-${i} font-medium`}>{m}</span>
                    </div>
                ))}
            </div>

            {/* Printer Slot (now at the bottom) */}
            <div className="absolute bottom-0 left-0 right-0 h-10 bg-[#222] z-20 flex justify-center items-start pt-1 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
                <div className="w-1/2 h-1 bg-black rounded-full mt-1"></div>
            </div>

        </div>
    );
}

// Card 3: Location Map Pin
function MapScheduler({ t }) {
    const container = useRef();
    const pin = useRef();
    const rings = useRef();

    useEffect(() => {
        let ctx = gsap.context(() => {
            // Bouncing pin
            gsap.to(pin.current, {
                y: -10,
                repeat: -1,
                yoyo: true,
                duration: 0.8,
                ease: "power1.inOut"
            });
            // Pulsing rings
            gsap.to(rings.current.children, {
                scale: 2.5,
                opacity: 0,
                stagger: 0.6,
                duration: 2,
                repeat: -1,
                ease: "power2.out"
            });
        }, container);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={container} className="h-64 relative w-full rounded-3xl bg-primary text-background border border-primary/10 p-6 shadow-xl flex flex-col justify-between overflow-hidden">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/60 z-10 mix-blend-multiply"></div>
                <img src={interiorImg} alt="Pečenjara Slon Interior" className="w-full h-full object-cover z-0 opacity-80" />
            </div>

            <div className="flex items-center gap-2 mb-4 z-10 w-fit pointer-events-none text-white relative">
                <Map size={20} className="text-accent" />
                <h3 className="font-drama font-bold text-xl">{t('features.card3.hub')}</h3>
            </div>

            <div className="flex-1 flex justify-center items-center relative z-10">
                <div className="relative">
                    <div ref={rings} className="absolute inset-0 top-6">
                        <div className="absolute w-8 h-2 rounded-[50%] bg-accent opacity-80 left-1/2 -translate-x-1/2 origin-center"></div>
                        <div className="absolute w-8 h-2 rounded-[50%] bg-accent opacity-80 left-1/2 -translate-x-1/2 origin-center"></div>
                    </div>
                    <div ref={pin} className="text-accent relative z-20">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                        </svg>
                    </div>
                </div>
            </div>

            <div className="mt-4 flex flex-col justify-end relative z-10 pointer-events-none">
                <p className="text-xs text-white/70 mb-2 font-bold uppercase tracking-widest text-right">{t('features.card3.open')}</p>
                <a href="#location" className="pointer-events-auto save-btn text-center block w-full self-end bg-gradient-accent text-background px-5 py-2 rounded-full font-sans text-xs font-bold shadow-lg shadow-accent/20 transition-transform hover:scale-105 active:scale-95">
                    {t('features.card3.visit')}
                </a>
            </div>
        </div>
    );
}

export default function Features() {
    const { t } = useTranslation();
    const container = useRef();

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from('.feature-card', {
                scrollTrigger: {
                    trigger: container.current,
                    start: 'top 75%',
                },
                y: 60,
                opacity: 0,
                duration: 1,
                stagger: 0.15,
                ease: 'power3.out'
            });
        }, container);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={container} className="w-full bg-[#F5F2Eb] py-32 px-8 md:px-16" id="features">
            <div className="max-w-6xl mx-auto">
                <div className="mb-20 max-w-2xl">
                    <h2 className="font-drama font-bold text-4xl md:text-6xl tracking-tight text-primary">
                        {t('features.title1')}
                    </h2>
                    <p className="font-sans font-medium text-2xl md:text-3xl text-gradient-accent mt-4">
                        {t('features.title2')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                    <div className="feature-card flex flex-col gap-6">
                        <TicketRail t={t} />
                        <div>
                            <h3 className="font-drama font-bold text-2xl text-primary mb-2">{t('features.card1.title')}</h3>
                            <p className="font-sans text-text-dark/80 text-base leading-relaxed">{t('features.card1.desc')}</p>
                        </div>
                    </div>

                    <div className="feature-card flex flex-col gap-6">
                        <ReceiptPrinter t={t} />
                        <div>
                            <h3 className="font-drama font-bold text-2xl text-primary mb-2">{t('features.card2.title')}</h3>
                            <p className="font-sans text-text-dark/80 text-base leading-relaxed">{t('features.card2.desc')}</p>
                        </div>
                    </div>

                    <div className="feature-card flex flex-col gap-6">
                        <MapScheduler t={t} />
                        <div>
                            <h3 className="font-drama font-bold text-2xl text-primary mb-2">{t('features.card3.title')}</h3>
                            <p className="font-sans text-text-dark/80 text-base leading-relaxed">{t('features.card3.desc')}</p>
                        </div>
                    </div>
                </div>

                {/* Delivery CTA block */}
                <div id="delivery" className="mt-32 pt-20 border-t border-primary/10 w-full flex flex-col items-center justify-center fade-in-cta">
                    <h2 className="font-drama font-bold text-3xl md:text-5xl text-primary mb-8 tracking-tight text-center">
                        Dostava na vaša vrata.
                    </h2>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center w-full max-w-3xl">
                        <a href="https://wolt.com/hr/hrv/zagreb/restaurant/peenjara-slon?gad_source=1&gad_campaignid=23505944635&gbraid=0AAAAA-UL6Ii2lp35YensLWXXg7TjXMq_e&gclid=CjwKCAiAzOXMBhASEiwAe14Saba-ls8lKBadXIBNhrByiQiENltFfz4MxVN4ljWrmlIhylwLJK41VhoCP-MQAvD_BwE" target="_blank" rel="noopener noreferrer" className="flex-1 text-center bg-[#009DE0] text-white font-drama font-bold text-2xl px-12 py-5 rounded-full hover:scale-105 active:scale-95 transition-transform shadow-lg uppercase tracking-wider">
                            NARUČI WOLT
                        </a>
                        <a href="https://glovoapp.com/hr/hr/zagreb/stores/pecenjara-slon-zag" target="_blank" rel="noopener noreferrer" className="flex-1 text-center bg-[#FFC244] text-black font-drama font-bold text-2xl px-12 py-5 rounded-full hover:scale-105 active:scale-95 transition-transform shadow-lg uppercase tracking-wider">
                            NARUČI GLOVO
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
}
