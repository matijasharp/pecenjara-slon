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

// ========================================
// FEATURE ICONS VIEWPORT ANIMATION
// ========================================

const features = document.querySelectorAll('.feature');

if (features.length) {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
        // Show all features immediately if user prefers reduced motion
        features.forEach((feature) => feature.classList.add('feature-visible'));
    } else {
        const featureObserver = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('feature-visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.3,
                rootMargin: '0px 0px -50px 0px'
            }
        );

        features.forEach((feature) => featureObserver.observe(feature));
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

// ========================================
// VIDEO PLAYER FUNCTIONALITY
// ========================================

const videoTrigger = document.getElementById('videoTrigger');
const videoOverlay = document.getElementById('videoOverlay');
const videoCloseBtn = document.getElementById('videoCloseBtn');
const promoVideo = document.getElementById('promoVideo');
const promoAudio = document.getElementById('promoAudio');
const videoPlayPauseBtn = document.getElementById('videoPlayPauseBtn');

if (videoTrigger && videoOverlay && promoVideo && promoAudio && videoPlayPauseBtn) {
    
    // Open video overlay
    function openVideoOverlay() {
        videoOverlay.classList.add('active');
        videoOverlay.setAttribute('aria-hidden', 'false');
        document.body.classList.add('video-open');
        videoCloseBtn.focus();
    }

    // Close video overlay
    function closeVideoOverlay() {
        videoOverlay.classList.remove('active');
        videoOverlay.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('video-open');
        
        // Stop and reset video/audio
        promoVideo.pause();
        promoAudio.pause();
        promoVideo.currentTime = 0;
        promoAudio.currentTime = 0;
        videoPlayPauseBtn.classList.remove('playing');
        
        // Return focus to trigger
        videoTrigger.focus();
    }

    // Toggle play/pause
    function togglePlayPause() {
        if (promoVideo.paused) {
            promoVideo.play();
            promoAudio.play();
            videoPlayPauseBtn.classList.add('playing');
            videoPlayPauseBtn.setAttribute('aria-label', 'Pauziraj video');
        } else {
            promoVideo.pause();
            promoAudio.pause();
            videoPlayPauseBtn.classList.remove('playing');
            videoPlayPauseBtn.setAttribute('aria-label', 'Pokreni video');
        }
    }

    // Sync audio with video time
    function syncAudioWithVideo() {
        if (Math.abs(promoVideo.currentTime - promoAudio.currentTime) > 0.3) {
            promoAudio.currentTime = promoVideo.currentTime;
        }
    }

    // Event: Click on gallery video item
    videoTrigger.addEventListener('click', openVideoOverlay);

    // Event: Keyboard on gallery video item (Enter/Space)
    videoTrigger.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            openVideoOverlay();
        }
    });

    // Event: Close button click
    videoCloseBtn.addEventListener('click', closeVideoOverlay);

    // Event: Click outside video to close
    videoOverlay.addEventListener('click', (e) => {
        if (e.target === videoOverlay) {
            closeVideoOverlay();
        }
    });

    // Event: Escape key to close
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && videoOverlay.classList.contains('active')) {
            closeVideoOverlay();
        }
    });

    // Event: Play/Pause button click
    videoPlayPauseBtn.addEventListener('click', togglePlayPause);

    // Event: Video time update - sync audio
    promoVideo.addEventListener('timeupdate', syncAudioWithVideo);

    // Event: Video seeking - sync audio immediately
    promoVideo.addEventListener('seeking', () => {
        promoAudio.currentTime = promoVideo.currentTime;
    });

    // Event: Video ended - reset state
    promoVideo.addEventListener('ended', () => {
        promoAudio.pause();
        promoAudio.currentTime = 0;
        promoVideo.currentTime = 0;
        videoPlayPauseBtn.classList.remove('playing');
        videoPlayPauseBtn.setAttribute('aria-label', 'Pokreni video');
    });

    // Event: Video play/pause via native controls (if enabled)
    promoVideo.addEventListener('play', () => {
        promoAudio.currentTime = promoVideo.currentTime;
        promoAudio.play();
        videoPlayPauseBtn.classList.add('playing');
    });

    promoVideo.addEventListener('pause', () => {
        if (!promoVideo.ended) {
            promoAudio.pause();
            videoPlayPauseBtn.classList.remove('playing');
        }
    });
}

// ========================================
// FLOATING AUDIO BUTTON FUNCTIONALITY
// ========================================

const floatingAudioBtn = document.getElementById('floatingAudioBtn');
const floatingAudio = document.getElementById('floatingAudio');

if (floatingAudioBtn && floatingAudio) {
    
    // Toggle audio play/pause
    function toggleFloatingAudio() {
        if (floatingAudio.paused) {
            floatingAudio.play();
            floatingAudioBtn.classList.add('playing');
            floatingAudioBtn.setAttribute('aria-label', 'Pauziraj glazbu');
            floatingAudioBtn.setAttribute('title', 'Pauziraj glazbu');
        } else {
            floatingAudio.pause();
            floatingAudioBtn.classList.remove('playing');
            floatingAudioBtn.setAttribute('aria-label', 'Pusti glazbu');
            floatingAudioBtn.setAttribute('title', 'Pusti glazbu');
        }
    }

    // Event: Click on floating audio button
    floatingAudioBtn.addEventListener('click', toggleFloatingAudio);

    // Event: Audio ended - reset state
    floatingAudio.addEventListener('ended', () => {
        floatingAudioBtn.classList.remove('playing');
        floatingAudioBtn.setAttribute('aria-label', 'Pusti glazbu');
        floatingAudioBtn.setAttribute('title', 'Pusti glazbu');
    });

    // Event: Keyboard accessibility (Enter/Space)
    floatingAudioBtn.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleFloatingAudio();
        }
    });
}
