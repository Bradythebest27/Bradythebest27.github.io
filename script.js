// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add animations on scroll
window.addEventListener('scroll', function() {
    const fadeInElements = document.querySelectorAll('.fade-in');
    const slideUpElements = document.querySelectorAll('.slide-up');

    fadeInElements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementPosition < windowHeight - 100) {
            element.classList.add('animate');
        }
    });

    slideUpElements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementPosition < windowHeight - 100) {
            element.classList.add('animate');
        }
    });
});

// add scroll of languages
window.onload = function() {
    const container = document.querySelector('.container');
    const languageIcons = document.querySelectorAll('.language-icon');
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
    const iconSize = 100;
    const centerX = containerWidth / 2;
    const centerY = containerHeight / 2;
    const radius = containerWidth / 2 - iconSize / 2;
    const speed = 0.01; // Adjust the speed as desired

    function animate() {
        let angle = 0;
        languageIcons.forEach(icon => {
            const x = centerX + radius * Math.cos(angle);
            const y = centerY + radius * Math.sin(angle);
            icon.style.left = `${x - iconSize / 2}px`;
            icon.style.top = `${y - iconSize / 2}px`;
            angle += (2 * Math.PI) / languageIcons.length;
        });
        requestAnimationFrame(animate);
    }

    animate();
};