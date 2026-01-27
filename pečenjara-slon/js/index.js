const mascots = document.querySelectorAll('.mascot-float');
const navToggle = document.querySelector('.slon-nav-toggle');
const navPill = document.querySelector('.slon-nav-pill');
const navMenu = document.querySelector('.slon-nav-menu');

if (mascots.length) {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
        mascots.forEach((mascot) => mascot.classList.add('mascot-visible'));
    } else {
        const observer = new IntersectionObserver(
            (entries, currentObserver) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('mascot-visible');
                        currentObserver.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.2,
                rootMargin: '0px 0px -10% 0px'
            }
        );

        mascots.forEach((mascot) => observer.observe(mascot));
    }
}

if (navToggle && navPill && navMenu) {
    navToggle.addEventListener('click', () => {
        const isOpen = navPill.classList.toggle('nav-open');
        navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    navMenu.addEventListener('click', (event) => {
        const target = event.target;

        if (target instanceof HTMLAnchorElement) {
            navPill.classList.remove('nav-open');
            navToggle.setAttribute('aria-expanded', 'false');
        }
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 600 && navPill.classList.contains('nav-open')) {
            navPill.classList.remove('nav-open');
            navToggle.setAttribute('aria-expanded', 'false');
        }
    });
}
