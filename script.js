// Change navbar style on scroll
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');

mobileMenu.addEventListener('click', function() {
    mobileMenu.classList.toggle('is-active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when a link is clicked
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            mobileMenu.classList.remove('is-active');
        }
    });
});
