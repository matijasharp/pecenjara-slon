import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Dictionary definitions
const resources = {
    hr: {
        translation: {
            "nav": {
                "menu": "Jelovnik",
                "quality": "Kvaliteta",
                "potpis": "Potpis",
                "gallery": "Galerija",
                "location": "Lokacija",
                "order": "Naruči Odmah"
            },
            "hero": {
                "subtitle": "Lokalno, svježe svaki dan. Savršeno pečeno iskustvo prepuno okusa.",
                "title1": "Svježe. Brzo.",
                "title2": "Legendarno.",
                "desc": "Pripremamo najbolje burgere, vrhunski roštilj, sočne tortille i neodoljive lignje.",
                "cta": "Istraži Jelovnik",
                "scroll": "Skrolaj"
            },
            "features": {
                "title1": "Bez prečaca.",
                "title2": "Samo prava hrana.",
                "card1": {
                    "title": "Vrhunski sastojci",
                    "desc": "Sve počinje odabirom. Biramo najbolje komade koje pripremamo s ljubavi tako da okus klope koju poslužujemo svaki put izuva iz cipela",
                    "anim1": "Vrhunsko meso",
                    "anim1desc": "Bez dodataka, samo vrhunski komadi.",
                    "anim2": "Uvijek Sviježe",
                    "anim2desc": "Nadopunjujemo svježe namirnice svaki dan.",
                    "anim3": "Naši Umaci",
                    "anim3desc": "Tajna koja diže svaki zalogaj."
                },
                "card2": {
                    "title": "Brza usluga",
                    "desc": "Vrhunska klopa brzinski. Svježe pečeno i posluženo u rekordnom roku tako da ne čekaš, a kvaliteta izuva iz cipela.",
                    "feed": "Status Narudžbe",
                    "feed1": "Narudžba primljena.",
                    "feed2": "Zagrijavanje roštilja...",
                    "feed3": "Meso se peče...",
                    "feed4": "Kvaliteta provjerena.",
                    "feed5": "Spremno za vas."
                },
                "card3": {
                    "title": "Srce susjedstva",
                    "desc": "Glavno okupljalište u kvartu. Pravo mjesto da sletiš, zgrabiš najjači roštilj i uživaš s ekipom.",
                    "hub": "PEČENJARA SLON",
                    "open": "Otvoreno Svaki Dan",
                    "visit": "Posjeti Nas"
                }
            },
            "philosophy": {
                "sub": "Većina brze hrane fokusira se na: prečace.",
                "title1": "Mi se fokusiramo na:",
                "title2": "Okus."
            },
            "protocol": {
                "sig": "POTPIS",
                "steps": {
                    "1": {
                        "title": "Standard",
                        "desc": "Kvartovski klasik. 100% juneća pljeskavica, topljeni cheddar, hrskavo povrće i naš potpisni umak u toplom, mekanom pecivu."
                    },
                    "2": {
                        "title": "Klasika",
                        "desc": "Tradicija na tanjuru. Savršeno pečeni ćevapi posluženi u vrućem, mekom somunu ili pecivu."
                    },
                    "3": {
                        "title": "Svježi Wrap",
                        "desc": "Lagano, brzo i brutalno fino. Svježe pečena piletina i hrskava salata zamotani za savršen zalogaj u hodu."
                    }
                }
            },
            "menu": {
                "title": "Puni doživljaj.",
                "desc": "Burgeri, Ćevapi, Tortilje, Lignje i još mnogo toga. Pregledajte našu cjelokupnu ponudu i pronađite točno ono za čim žudite danas.",
                "cta": "Pogledaj cijeli jelovnik"
            },
            "gallery": {
                "title1": "Naši",
                "title2": "Favoriti."
            },
            "location": {
                "title": "Pronađi nas",
                "desc": "Posjetite našu pečenjaru na lokaciji! Svježe pripremljena hrana čeka na vas.",
                "addressLabel": "Adresa",
                "address": "Gospodska Ul. 28, 10000 Zagreb",
                "hoursLabel": "Radno vrijeme",
                "hours1": "Pon - Sub: 10:00 - 22:00",
                "hours2": "Ned: 14:00 - 22:00",
                "phoneLabel": "Telefon",
                "phone": "+385 1 700 1256",
                "btn": "Upute do lokacije"
            },
            "footer": {
                "desc": "Vrhunski roštilj i top klopa uvijek spremna. Si balPro čiz u Slonu?",
                "status": "ROŠTILJ JE AKTIVAN",
                "nav": "Navigacija",
                "connect": "Poveži se"
            }
        }
    },
    en: {
        translation: {
            "nav": {
                "menu": "Full Menu",
                "quality": "Quality",
                "potpis": "Signature",
                "gallery": "Gallery",
                "location": "Locations",
                "order": "Order Now"
            },
            "hero": {
                "subtitle": "Local, fresh every day. A perfectly cooked experience full of flavors.",
                "title1": "Fresh. Fast.",
                "title2": "Legendary.",
                "desc": "We prepare the best burgers, premium grill, juicy wraps, and irresistible calamari.",
                "cta": "Explore the Menu",
                "scroll": "Scroll"
            },
            "features": {
                "title1": "No shortcuts.",
                "title2": "Just real comfort food.",
                "card1": {
                    "title": "Prime Ingredients",
                    "desc": "It all starts with the sourcing. We pick the best cuts and serve food that ensures maximum flavor in every bite.",
                    "anim1": "Premium Meat",
                    "anim1desc": "No fillers, just premium cuts.",
                    "anim2": "Always Fresh",
                    "anim2desc": "We restock fresh ingredients every single day.",
                    "anim3": "Signature Sauces",
                    "anim3desc": "Crafted flavors to elevate every bite."
                },
                "card2": {
                    "title": "Fast Service",
                    "desc": "Premium comfort food. Freshly grilled and served in record time so you never wait, while the quality knocks your socks off.",
                    "feed": "Order Status",
                    "feed1": "Order confirmed.",
                    "feed2": "Heating grill to optimal temp.",
                    "feed3": "Fresh meat sizzling...",
                    "feed4": "Quality verified 100%.",
                    "feed5": "Ready for you."
                },
                "card3": {
                    "title": "Heart of the neighborhood",
                    "desc": "The main gathering place in the block. The right place to land, grab the best grill, and enjoy with the crew.",
                    "hub": "PEČENJARA SLON",
                    "open": "Open Daily",
                    "visit": "Visit Us"
                }
            },
            "philosophy": {
                "sub": "Most fast food focuses on: shortcuts.",
                "title1": "We focus on:",
                "title2": "Flavor."
            },
            "protocol": {
                "sig": "SIGNATURE",
                "steps": {
                    "1": {
                        "title": "The Standard",
                        "desc": "A towering classic. Premium 100% beef patty, melted cheddar, crisp vegetables, and our signature sauce housed in a freshly toasted bun."
                    },
                    "2": {
                        "title": "The Classic",
                        "desc": "Generations of tradition on a plate. Perfectly grilled ćevapi served inside a warm, handcrafted somun or bun."
                    },
                    "3": {
                        "title": "The Fresh Wrap",
                        "desc": "Light, fast, and packed with flavor. Freshly grilled chicken and crisp salad wrapped tightly for the perfect bite on the go."
                    }
                }
            },
            "menu": {
                "title": "The Full Experience.",
                "desc": "Burgers, Ćevapi, Wraps, Calamari, and more. Browse our complete offering and find exactly what you are craving today.",
                "cta": "View Full Menu"
            },
            "gallery": {
                "title1": "Our",
                "title2": "Favorites."
            },
            "location": {
                "title": "Find Us",
                "desc": "Visit our grill at the main location! Freshly prepared comfort food awaits you.",
                "addressLabel": "Address",
                "address": "Gospodska Ul. 28, 10000 Zagreb",
                "hoursLabel": "Opening Hours",
                "hours1": "Mon - Sat: 10:00 - 22:00",
                "hours2": "Sun: 14:00 - 22:00",
                "phoneLabel": "Phone",
                "phone": "+385 1 700 1256",
                "btn": "Get Directions"
            },
            "footer": {
                "desc": "Freshly grilled comfort food served fast. Built for speed, destined for flavor.",
                "status": "GRILL IS ACTIVE",
                "nav": "Navigation",
                "connect": "Connect"
            }
        }
    },
    de: {
        translation: {
            "nav": {
                "menu": "Speisekarte",
                "quality": "Qualität",
                "potpis": "Signatur",
                "gallery": "Galerie",
                "location": "Standorte",
                "order": "Jetzt Bestellen"
            },
            "hero": {
                "subtitle": "Lokal, täglich frisch. Ein perfekt gegrilltes Erlebnis voller Geschmack.",
                "title1": "Frisch. Schnell.",
                "title2": "Legendär.",
                "desc": "Wir bereiten die besten Burger, Premium-Grill, saftige Wraps und unwiderstehliche Calamari zu.",
                "cta": "Speisekarte Entdecken",
                "scroll": "Scrollen"
            },
            "features": {
                "title1": "Keine Abkürzungen.",
                "title2": "Echtes Comfort Food.",
                "card1": {
                    "title": "Erstklassige Zutaten",
                    "desc": "Alles beginnt bei der Beschaffung. Wir wählen die besten Stücke und servieren Essen, das maximalen Geschmack in jedem Bissen garantiert.",
                    "anim1": "Premium Fleisch",
                    "anim1desc": "Keine Füllstoffe, nur Premium-Stücke.",
                    "anim2": "Immer Frisch",
                    "anim2desc": "Wir füllen täglich frische Zutaten auf.",
                    "anim3": "Unsere Saucen",
                    "anim3desc": "Handgemachte Aromen."
                },
                "card2": {
                    "title": "Schneller Service",
                    "desc": "Premium Comfort Food. Frisch gegrillt und in Rekordzeit serviert, damit Du nie wartest, während die Qualität Dich umhaut.",
                    "feed": "Bestellstatus",
                    "feed1": "Bestellung bestätigt.",
                    "feed2": "Grill wird erhitzt...",
                    "feed3": "Fleisch brutzelt...",
                    "feed4": "Qualität geprüft.",
                    "feed5": "Bereit für dich."
                },
                "card3": {
                    "title": "Herz der Nachbarschaft",
                    "desc": "Der Haupttreffpunkt im Viertel. Der richtige Ort, um vorbeizuschauen, den besten Grill zu schnappen und mit der Crew zu genießen.",
                    "hub": "PEČENJARA SLON",
                    "open": "Täglich Geöffnet",
                    "visit": "Besuche Uns"
                }
            },
            "philosophy": {
                "sub": "Das meiste Fast Food konzentriert sich auf: Abkürzungen.",
                "title1": "Wir konzentrieren uns auf:",
                "title2": "Geschmack."
            },
            "protocol": {
                "sig": "SIGNATUR",
                "steps": {
                    "1": {
                        "title": "Der Standard",
                        "desc": "Ein überragender Klassiker. 100% Rindfleisch, geschmolzener Cheddar, knackiges Gemüse und unsere Signature-Sauce in einem frisch gerösteten Brötchen."
                    },
                    "2": {
                        "title": "Der Klassiker",
                        "desc": "Generationen von Tradition auf einem Teller. Perfekt gegrillte Ćevapi serviert in warmem, handgemachtem Somun oder Brötchen."
                    },
                    "3": {
                        "title": "Der Rohe Wrap",
                        "desc": "Leicht, schnell und voller Geschmack. Frisch gegrilltes Hähnchen und knackiger Salat fest gewickelt für unterwegs."
                    }
                }
            },
            "menu": {
                "title": "Das Volle Erlebnis.",
                "desc": "Burger, Ćevapi, Wraps, Calamari und mehr. Durchstöbere unser komplettes Angebot.",
                "cta": "Speisekarte Ansehen"
            },
            "gallery": {
                "title1": "Unsere",
                "title2": "Favoriten."
            },
            "location": {
                "title": "Finde Uns",
                "desc": "Besuche unseren Grill am Hauptstandort! Frisch zubereitetes Comfort Food wartet.",
                "addressLabel": "Adresse",
                "address": "Gospodska Ul. 28, 10000 Zagreb",
                "hoursLabel": "Öffnungszeiten",
                "hours1": "Mo - Sa: 10:00 - 22:00",
                "hours2": "So: 14:00 - 22:00",
                "phoneLabel": "Telefon",
                "phone": "+385 1 700 1256",
                "btn": "Route Berechnen"
            },
            "footer": {
                "desc": "Frisch gegrilltes Comfort Food, schnell serviert. Gebaut für Geschwindigkeit, bestimmt für Geschmack.",
                "status": "GRILL IST AKTIV",
                "nav": "Navigation",
                "connect": "Verbinden"
            }
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "hr", // Default language string
        fallbackLng: "en",
        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;
