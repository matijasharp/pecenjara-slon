import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslation } from 'react-i18next';

// Remaining images
import imgCheese from '../assets/Cheesburger.jpg (1).jpeg';
import imgChili from '../assets/Chilli con carne tortilja.jpg (1).jpeg';
import imgCalamari from '../assets/Pržene lignje.jpg (2).jpeg';
import imgVege from '../assets/Vege Tortilja.jpg (1).jpeg';
import imgCevapiBig from '../assets/Ćevapi.jpg (1).jpeg';
import imgBurgerTop from '../assets/Top Burger.jpg (1).jpeg';

gsap.registerPlugin(ScrollTrigger);

export default function Gallery() {
    const { t } = useTranslation();
    const container = useRef();

    const galleryImages = [
        { src: imgCheese, title: "Cheeseburger", aspect: "aspect-square" },
        { src: imgCalamari, title: "Lignje / Calamari", aspect: "aspect-[4/3]" },
        { src: imgChili, title: "Chili Con Carne", aspect: "aspect-[3/4]" },
        { src: imgCevapiBig, title: "Veliki Ćevapi", aspect: "aspect-[4/3]" },
        { src: imgVege, title: "Vege Tortilja", aspect: "aspect-[3/4]" },
        { src: imgBurgerTop, title: "Top Burger", aspect: "aspect-square" }
    ];

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from('.gallery-img', {
                scrollTrigger: {
                    trigger: container.current,
                    start: 'top 70%',
                },
                y: 80,
                opacity: 0,
                scale: 0.95,
                duration: 1,
                stagger: 0.1,
                ease: 'power3.out'
            });
        }, container);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={container} className="w-full bg-background py-32 px-8 md:px-16" id="gallery">
            <div className="max-w-7xl mx-auto">

                <div className="mb-16">
                    <h2 className="font-drama font-bold text-5xl md:text-7xl tracking-tight text-primary flex gap-3 hidden-text">
                        <span>{t('gallery.title1')}</span>
                        <span className="text-gradient-accent">{t('gallery.title2')}</span>
                    </h2>
                </div>

                {/* CSS-based Masonry Grid */}
                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                    {galleryImages.map((img, idx) => (
                        <div
                            key={idx}
                            className={`gallery-img relative overflow-hidden rounded-[2rem] shadow-lg break-inside-avoid group cursor-pointer ${img.aspect}`}
                        >
                            <img
                                src={img.src}
                                alt={img.title}
                                className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="absolute bottom-6 left-6 -translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                <span className="font-drama text-background font-bold text-xl tracking-tight">{img.title}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Secondary Delivery CTA block */}
                <div className="mt-32 pt-20 border-t border-primary/10 w-full flex flex-col items-center justify-center">
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
