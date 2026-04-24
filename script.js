// script.js — Sean Aba portfolio

// Staggered fade-in on load (CSS handles the animation,
// this just ensures elements without inline delay still animate)
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.project-card');
    cards.forEach((card, i) => {
        card.style.animationDelay = `${0.16 + i * 0.07}s`;
        card.classList.add('fade-in');
    });
});
