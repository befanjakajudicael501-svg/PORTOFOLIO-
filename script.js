 let currentSlide = 0;
const slides = document.querySelectorAll('.slides');

function showNextSlide() {
    // On cache l'image actuelle
    slides[currentSlide].classList.remove('active');

    // On passe à l'image suivante
    currentSlide = (currentSlide + 1) % slides.length;

    // On affiche l'image suivante
    slides[currentSlide].classList.add('active');
}

// Changement toutes les 5 secondes
if (slides.length > 0) {
    setInterval(showNextSlide, 5000);
}