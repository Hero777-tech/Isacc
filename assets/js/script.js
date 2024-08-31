// Smooth Scrolling for Navigation Links
// Smooth Scrolling for Navigation Links
document.querySelectorAll('.main-nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 60, // Adjusting for fixed header height
                behavior: 'smooth'
            });
        }
    });
});

// Responsive Navigation Menu Toggle for Mobile
// Responsive Navigation Menu Toggle for Mobile
function toggleMenu() {
    const menu = document.querySelector('.main-nav ul');
    menu.classList.toggle('open');
}

const menuToggle = document.createElement('div');
menuToggle.className = 'menu-toggle';
menuToggle.innerHTML = '☰';
menuToggle.addEventListener('click', toggleMenu);
document.querySelector('header').appendChild(menuToggle);

window.addEventListener('resize', function() {
    const menu = document.querySelector('.main-nav ul');
    if (window.innerWidth > 768) {
        menu.classList.remove('open');
    }
});



// Intersection Observer for Lazy Loading Images
const lazyImages = document.querySelectorAll('[data-lazy]');
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const image = entry.target;
            image.src = image.dataset.lazy;
            observer.unobserve(image);
        }
    });
}, {
    rootMargin: '50px 0px',
    threshold: 0.01
});

lazyImages.forEach(image => {
    imageObserver.observe(image);
});

// Dynamic Back-to-Top Button
const backToTopButton = document.querySelector('.back-to-top');
const scrollOffset = 200;

window.addEventListener('scroll', () => {
    if (window.pageYOffset > scrollOffset) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});

backToTopButton.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Sticky Header on Scroll
// Sticky Header on Scroll
const header = document.querySelector('header');
const sticky = header.offsetTop;

window.addEventListener('scroll', () => {
    if (window.pageYOffset > sticky) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});

// Dark Mode Toggle
const darkModeToggle = document.createElement('div');
darkModeToggle.className = 'dark-mode-toggle';
darkModeToggle.innerHTML = '🌓';
document.querySelector('header').appendChild(darkModeToggle);

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

if (localStorage.getItem('theme') === 'dark') 
    document.body.classList.add('dark-mode');
// }

// Scroll Spy for Active Navigation Link
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.main-nav ul li a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 70; // Adjusting for fixed header height
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// Hover Effect for Dropdown in Navbar
// Hover Effect for Dropdown in Navbar
const dropdown = document.querySelector('.dropdown');
dropdown.addEventListener('mouseenter', () => {
    const dropdownContent = dropdown.querySelector('.dropdown-content');
    dropdownContent.style.display = 'block';
});

dropdown.addEventListener('mouseleave', () => {
    const dropdownContent = dropdown.querySelector('.dropdown-content');
    dropdownContent.style.display = 'none';
});

// Visitor Counter
// Visitor Counter
function updateVisitorCounter() {
    let count = localStorage.getItem('visitorCount') || 0;
    count++;
    localStorage.setItem('visitorCount', count);
    document.getElementById('visitor-counter').innerText = `Visitor Count: ${count}`;
}

document.addEventListener('DOMContentLoaded', updateVisitorCounter);

// Google Maps Integration
// Google Maps Integration
// Google Maps Integration
function initMap() {
    const mapLocation = { lat: 24.6790902, lng: 92.7513403 }; // Coordinates for Department of CSE, Assam University
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: mapLocation,
    });
    const marker = new google.maps.Marker({
        position: mapLocation,
        map: map,
        title: 'Department of Computer Science & Engineering, Assam University',
    });
}

function loadGoogleMapsScript() {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCcABaamniA6OL5YvYSpB3pFMNrXwXnLwU&callback=initMap`;
    script.defer = true;
    script.async = true;
    document.head.appendChild(script);
}

document.addEventListener('DOMContentLoaded', loadGoogleMapsScript);

// Back-to-Top Button Smooth Scroll
// Back-to-Top Button Smooth Scroll
// Back-to-Top Button Smooth Scroll
document.querySelector('.back-to-top').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});