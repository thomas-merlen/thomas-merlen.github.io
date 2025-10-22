// Étoiles
for(let i = 0; i < 50; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.top = Math.random() * 100 + '%';
    star.style.left = Math.random() * 100 + '%';
    star.style.animationDelay = Math.random() * 4 + 's';
    document.body.appendChild(star);
}

// Animation au scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
const rect = section.getBoundingClientRect();
const windowHeight = window.innerHeight;
if (rect.top < windowHeight * 0.8) {
    section.classList.add('visible');
}
    });
});

// Afficher les sections visibles au chargement
window.addEventListener('load', () => {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
const rect = section.getBoundingClientRect();
const windowHeight = window.innerHeight;
if (rect.top < windowHeight * 0.8) {
    section.classList.add('visible');
}
    });
});
