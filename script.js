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


document.addEventListener('DOMContentLoaded', () => {
  const carousels = document.querySelectorAll('.carousel');

  carousels.forEach(carousel => {
    const images = Array.from(carousel.querySelectorAll('img'));
    const dots  = Array.from(carousel.querySelectorAll('.dot'));

    // Si pas assez de dots, on en crée autant qu'il faut (sécurité)
    if (dots.length < images.length) {
      const dotsContainer = carousel.querySelector('.dots') || (() => {
        const d = document.createElement('div');
        d.className = 'dots';
        carousel.appendChild(d);
        return d;
      })();
      // recrée les dots manquants
      for (let i = dots.length; i < images.length; i++) {
        const s = document.createElement('span');
        s.className = 'dot';
        dotsContainer.appendChild(s);
      }
    }

    // Re-sélectionne les dots au cas où on en a ajouté
    const updatedDots = Array.from(carousel.querySelectorAll('.dot'));

    // Trouve l'index actif ou utilise 0 par défaut
    let activeIndex = images.findIndex(img => img.classList.contains('active'));
    if (activeIndex === -1) activeIndex = 0;

    // Fonction pour activer une image donnée
    const setActive = (index) => {
      images.forEach((img, i) => img.classList.toggle('active', i === index));
      updatedDots.forEach((d, i) => d.classList.toggle('active', i === index));
    };

    // initialise l'affichage
    setActive(activeIndex);

    // écoute des clics sur les dots
    updatedDots.forEach((dot, index) => {
      dot.addEventListener('click', () => setActive(index));
    });
  });
});