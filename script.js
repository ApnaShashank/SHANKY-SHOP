'use strict';

// Modal Functionality
const modal = document.querySelector('[data-modal]');
const modalCloseBtn = document.querySelector('[data-modal-close]');
const modalCloseOverlay = document.querySelector('[data-modal-overlay]');

const modalCloseFunc = function () { 
    modal.classList.add('closed');
    modal.style.animation = 'scaleDown .5s ease-out';
    setTimeout(() => modal.classList.remove('closed'), 500);
}

modalCloseOverlay.addEventListener('click', modalCloseFunc);
modalCloseBtn.addEventListener('click', modalCloseFunc);

// Notification Toast
const notificationToast = document.querySelector('[data-toast]');
const toastCloseBtn = document.querySelector('[data-toast-close]');

toastCloseBtn.addEventListener('click', function() {
    notificationToast.classList.add('closed');
    notificationToast.style.animation = 'slideOut .5s ease-out';
    setTimeout(() => notificationToast.classList.remove('closed'), 500);
});

// Mobile Menu
const mobileMenuOpenBtn = document.querySelectorAll('[data-mobile-menu-open-btn]');
const mobileMenu = document.querySelectorAll('[data-mobile-menu]');
const mobileMenuCloseBtn = document.querySelectorAll('[data-mobile-menu-close-btn]');
const overlay = document.querySelector('[data-overlay]');

for (let i = 0; i < mobileMenuOpenBtn.length; i++) {
    const mobileMenuCloseFunc = function () {
        mobileMenu[i].classList.remove('active');
        overlay.classList.remove('active');
        mobileMenu[i].style.animation = 'slideOutLeft .5s ease-out';
        setTimeout(() => mobileMenu[i].classList.remove('active'), 500);
    }

    mobileMenuOpenBtn[i].addEventListener('click', function () {
        mobileMenu[i].classList.add('active');
        overlay.classList.add('active');
        mobileMenu[i].style.animation = 'slideInLeft .5s ease-in';
    })

    mobileMenuCloseBtn[i].addEventListener('click', mobileMenuCloseFunc);
    overlay.addEventListener('click', mobileMenuCloseFunc);
}

// Accordion
const accordionBtn = document.querySelectorAll('[data-accordion-btn]');
const accordion = document.querySelectorAll('[data-accordion]');

for (let i = 0; i < accordionBtn.length; i++) {
    accordionBtn[i].addEventListener('click', function () {
        const clickedBtn = this.nextElementSibling.classList.contains('active');

        for (let j = 0; j < accordion.length; j++) {
            if (clickedBtn) break;
            if (accordion[j].classList.contains('active')) {
                accordion[j].classList.remove('active');
                accordionBtn[j].classList.remove('active');
                accordion[j].style.maxHeight = 0;
                accordion[j].style.padding = 0;
            }
        }

        this.nextElementSibling.classList.toggle('active');
        this.classList.toggle('active');

        if (this.nextElementSibling.classList.contains('active')) {
            this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 'px';
            this.nextElementSibling.style.padding = '13px 0 8px';
            this.nextElementSibling.style.animation = 'expand .5s ease-in';
        } else {
            this.nextElementSibling.style.maxHeight = 0;
            this.nextElementSibling.style.padding = 0;
            this.nextElementSibling.style.animation = 'collapse .5s ease-out';
        }
    });
}

// Auto-scrolling Banner
const sliderContainer = document.querySelector('.slider-container');
let scrollPosition = 0;
let scrollInterval;

function startAutoScroll() {
    scrollInterval = setInterval(() => {
        scrollPosition += 1;
        if (scrollPosition >= sliderContainer.scrollWidth - sliderContainer.clientWidth) {
            scrollPosition = 0;
        }
        sliderContainer.scrollLeft = scrollPosition;
    }, 50);
}

function stopAutoScroll() {
    clearInterval(scrollInterval);
}

sliderContainer.addEventListener('mouseenter', stopAutoScroll);
sliderContainer.addEventListener('mouseleave', startAutoScroll);

startAutoScroll();

// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// Animate on Scroll with Enhanced Effects
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
            section.style.animation = 'fadeInUp 1s ease-in';
        }
    });
});

// Add hover effects for interactive elements
document.querySelectorAll('.btn, .btn-action, .banner-btn, .cta-btn, .add-cart-btn').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
    });
    btn.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});