// Carrusel infinito para #logotipo
// Este script asume que los logos ya están cargados en #logotipo
// y que todos los logos tienen la clase .logo

document.addEventListener('DOMContentLoaded', function() {
    const logotipo = document.getElementById('logotipo');
    if (!logotipo) return;

    // Duplicar los logos para efecto infinito
    const logos = Array.from(logotipo.children);
    logos.forEach(logo => {
        const clone = logo.cloneNode(true);
        clone.classList.add('logo-clone');
        logotipo.appendChild(clone);
    });

    let scrollAmount = 0;
    const speed = 1; // px por frame

    function animateCarousel() {
        scrollAmount += speed;
        if (scrollAmount >= logotipo.scrollWidth / 2) {
            scrollAmount = 0;
        }
        logotipo.scrollLeft = scrollAmount;
        requestAnimationFrame(animateCarousel);
    }

    // Quitar scroll y usar translateX para animar
    logotipo.style.overflow = 'hidden';
    logotipo.scrollLeft = 0;
    requestAnimationFrame(animateCarousel);
});
