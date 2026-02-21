import React from 'react';
import { useTranslation } from 'react-i18next';
import imgMascot from '../assets/image (1).png';

export default function Footer() {
    const { t } = useTranslation();
    return (
        <footer className="w-full bg-primary text-background rounded-t-[3rem] md:rounded-t-[4rem] px-8 md:px-16 pt-20 pb-10 mt-10 overflow-hidden" id="visit">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row lg:flex-nowrap lg:items-start lg:justify-between gap-12 mb-16">

                <div className="md:max-w-xl flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-6 md:gap-8">
                    {/* Mascot on the Left */}
                    <a href="/" onClick={(e) => { e.preventDefault(); window.scrollTo(0, 0); window.location.reload(); }} className="cursor-pointer group flex-shrink-0">
                        <img src={imgMascot} alt="Slon Mascot" className="w-32 h-32 md:w-36 md:h-36 object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-300" />
                    </a>

                    {/* Text on the Right */}
                    <div className="flex flex-col items-center md:items-start">
                        <a href="/" onClick={(e) => { e.preventDefault(); window.scrollTo(0, 0); window.location.reload(); }} className="font-drama font-bold text-3xl tracking-tight leading-none mb-3 flex items-center gap-2 uppercase cursor-pointer group">
                            <span className="text-gradient-accent group-hover:opacity-80 transition-opacity duration-300">PEČENJARA</span> <span className="text-white group-hover:opacity-80 transition-opacity duration-300">SLON</span>
                        </a>
                        <p className="font-sans text-background/60 text-base mb-6 font-medium">
                            {t('footer.desc')}
                        </p>
                        <div className="flex flex-col gap-2 font-data text-xs text-background/40">
                            <span className="flex items-center gap-2 font-bold tracking-widest text-background/80">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse hidden"></span>
                                <div className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                </div>
                                {t('footer.status')}
                            </span>
                        </div>
                    </div>
                </div>

                <div className="flex-shrink-0 min-w-[150px]">
                    <h4 className="font-sans font-bold mb-6 text-sm tracking-widest uppercase text-background/80">{t('footer.nav')}</h4>
                    <ul className="space-y-3 font-sans text-sm font-medium text-background/50">
                        <li><a href="#menu" className="hover:text-accent transition-colors">{t('nav.menu')}</a></li>
                        <li><a href="#protocol" className="hover:text-accent transition-colors">{t('nav.quality')}</a></li>
                        <li><a href="#gallery" className="hover:text-accent transition-colors">{t('nav.gallery')}</a></li>
                        <li><a href="#location" className="hover:text-accent transition-colors">{t('nav.location')}</a></li>
                    </ul>
                </div>

                <div className="flex-shrink-0 min-w-[150px]">
                    <h4 className="font-sans font-bold mb-6 text-sm tracking-widest uppercase text-background/80">{t('footer.connect')}</h4>
                    <ul className="space-y-3 font-sans text-sm font-medium text-background/50">
                        <li><a href="https://wolt.com/hr/hrv/zagreb/restaurant/peenjara-slon?gad_source=1&gad_campaignid=23505944635&gbraid=0AAAAA-UL6Ii2lp35YensLWXXg7TjXMq_e&gclid=CjwKCAiAzOXMBhASEiwAe14Saba-ls8lKBadXIBNhrByiQiENltFfz4MxVN4ljWrmlIhylwLJK41VhoCP-MQAvD_BwE" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Wolt Delivery</a></li>
                        <li><a href="https://glovoapp.com/hr/hr/zagreb/stores/pecenjara-slon-zag" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Glovo Delivery</a></li>
                        <li><a href="https://www.instagram.com/pecenjaraslon/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Instagram</a></li>
                        <li><a href="https://web.facebook.com/groups/1435861251343812/?_rdc=1&_rdr#" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Facebook</a></li>
                    </ul>
                </div>
            </div>

            <div className="max-w-6xl mx-auto border-t border-background/10 pt-8 flex flex-col md:flex-row justify-between items-center md:items-start gap-4 pb-4">
                <p className="font-sans text-sm font-medium text-background/40 text-center md:text-left">
                    © {new Date().getFullYear()} PEČENJARA SLON. All rights reserved.
                </p>
                <div className="flex flex-col items-center md:items-end gap-1">
                    <p className="text-[10px] font-medium text-background/30 uppercase tracking-widest flex gap-1 items-center font-sans">
                        Powered by <a href="http://aoraagency.com/" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'Roboto, sans-serif' }} className="font-bold text-background/50 text-xs tracking-normal normal-case hover:text-accent transition-colors">AorAAgency</a>
                    </p>
                    <p className="font-data text-[8px] tracking-widest text-background/20 mt-1">
                        V2.1.0 // FAST FOOD EDITION
                    </p>
                </div>
            </div>
        </footer>
    );
}
