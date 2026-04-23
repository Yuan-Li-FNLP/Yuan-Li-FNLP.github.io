/**
 * Yuan Li Personal Homepage - Main JavaScript
 * Apple-esque interactions & animations
 */

(function() {
    'use strict';

    /* ========================================
       Language Toggle
       ======================================== */
    const langToggle = document.getElementById('langToggle');
    const htmlEl = document.documentElement;
    const bodyEl = document.body;
    
    // Default to English
    let currentLang = localStorage.getItem('homepage-lang') || 'en';
    
    function setLanguage(lang) {
        currentLang = lang;
        htmlEl.lang = lang;
        bodyEl.setAttribute('lang', lang);
        localStorage.setItem('homepage-lang', lang);
        
        // Update toggle button text
        if (langToggle) {
            langToggle.setAttribute('aria-label', 
                lang === 'en' ? 'Switch to Chinese' : 'Switch to English'
            );
        }
    }
    
    // Initialize
    setLanguage(currentLang);
    
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            const newLang = currentLang === 'en' ? 'zh' : 'en';
            setLanguage(newLang);
        });
    }

    /* ========================================
       Navigation Scroll Effect
       ======================================== */
    const navbar = document.getElementById('navbar');
    let lastScrollY = 0;
    
    function updateNavbar() {
        const scrollY = window.scrollY;
        
        if (scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        lastScrollY = scrollY;
    }
    
    window.addEventListener('scroll', updateNavbar, { passive: true });
    updateNavbar();

    /* ========================================
       Mobile Navigation Toggle
       ======================================== */
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const isOpen = navMenu.classList.contains('active');
            navToggle.setAttribute('aria-expanded', isOpen);
            
            // Animate hamburger
            const spans = navToggle.querySelectorAll('span');
            if (isOpen) {
                spans[0].style.transform = 'rotate(45deg) translate(4px, 4px)';
                spans[1].style.transform = 'rotate(-45deg) translate(3px, -3px)';
            } else {
                spans[0].style.transform = '';
                spans[1].style.transform = '';
            }
        });
        
        // Close menu on link click
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
                const spans = navToggle.querySelectorAll('span');
                spans[0].style.transform = '';
                spans[1].style.transform = '';
            });
        });
    }

    /* ========================================
       Scroll Reveal Animations
       ======================================== */
    const revealElements = document.querySelectorAll('.section-header, .about-content, .journey-map, .journey-card, .research-card, .pub-category, .edu-item, .skill-card, .contact-link');
    
    // Add reveal class to elements
    revealElements.forEach((el, index) => {
        el.classList.add('reveal');
        // Stagger delays for cards in same row
        const delayClass = `reveal-delay-${(index % 4) + 1}`;
        el.classList.add(delayClass);
    });
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });
    
    revealElements.forEach(el => revealObserver.observe(el));

    /* ========================================
       Journey Line Animation
       ======================================== */
    const journeyLine = document.getElementById('journeyLine');
    const journeyStations = document.querySelectorAll('.journey-station');
    let journeyAnimated = false;
    
    function initJourneyAnimation() {
        if (!journeyLine) return;
        
        // Dynamically calculate path length for precise animation
        const pathLength = journeyLine.getTotalLength();
        journeyLine.style.strokeDasharray = pathLength;
        journeyLine.style.strokeDashoffset = pathLength;
    }
    
    function animateJourney() {
        if (!journeyLine || journeyAnimated) return;
        
        const rect = journeyLine.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        if (rect.top < windowHeight * 0.75) {
            journeyAnimated = true;
            
            // Animate the line drawing
            journeyLine.style.strokeDashoffset = '0';
            
            // Animate stations sequentially
            journeyStations.forEach((station, index) => {
                setTimeout(() => {
                    station.classList.add('active');
                }, 300 + index * 450);
            });
        }
    }
    
    initJourneyAnimation();
    window.addEventListener('scroll', animateJourney, { passive: true });
    animateJourney(); // Check on load

    /* ========================================
       Smooth Scroll for Anchor Links
       ======================================== */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const navHeight = navbar.offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    /* ========================================
       Hero Parallax Effect (subtle)
       ======================================== */
    const heroPhoto = document.querySelector('.hero-photo-wrapper');
    
    if (heroPhoto) {
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            const heroHeight = document.querySelector('.hero').offsetHeight;
            
            if (scrollY < heroHeight) {
                const opacity = 1 - (scrollY / heroHeight) * 0.5;
                const translateY = scrollY * 0.15;
                heroPhoto.style.opacity = Math.max(0.5, opacity);
                heroPhoto.style.transform = `translateY(${translateY}px) scale(${1 + scrollY * 0.0002})`;
            }
        }, { passive: true });
    }

    /* ========================================
       Active Nav Link on Scroll
       ======================================== */
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    function updateActiveNav() {
        const scrollPos = window.scrollY + 100;
        
        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');
            
            if (scrollPos >= top && scrollPos < top + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveNav, { passive: true });

    /* ========================================
       Journey Station Click - Scroll to Card
       ======================================== */
    journeyStations.forEach(station => {
        station.addEventListener('click', () => {
            const stationNum = station.getAttribute('data-station');
            const card = document.querySelector(`.journey-card[data-card="${stationNum}"]`);
            if (card) {
                card.scrollIntoView({ behavior: 'smooth', block: 'center' });
                card.style.transform = 'scale(1.02)';
                setTimeout(() => {
                    card.style.transform = '';
                }, 300);
            }
        });
    });

    /* ========================================
       Prefers Reduced Motion
       ======================================== */
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        // Disable animations
        document.querySelectorAll('.reveal').forEach(el => {
            el.style.transition = 'none';
            el.classList.add('visible');
        });
        
        if (journeyLine) {
            journeyLine.style.transition = 'none';
            journeyLine.style.strokeDashoffset = '0';
        }
    }

    /* ========================================
       Console Easter Egg
       ======================================== */
    console.log('%c👋 Hello there!', 'font-size: 20px; font-weight: bold; color: #2B5F8A;');
    console.log('%cThis is Yuan Li\'s personal homepage. Built with precision and care.', 'font-size: 12px; color: #86868b;');

})();
