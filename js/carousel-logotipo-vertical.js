// Carrusel vertical infinito para #logotipo en pantallas >= 740px
// Requiere que los logos ya estén cargados en #logotipo

document.addEventListener('DOMContentLoaded', function() {
    const logotipo = document.getElementById('logotipo');
    if (!logotipo) return;

    function isVertical() {
        return window.innerWidth >= 740;
    }

    let animationId;
    let scrollAmount = 0;
    const speed = 0.3; // px por frame (más lento)

    function setupVerticalCarousel() {
        // Limpiar duplicados previos
        Array.from(logotipo.querySelectorAll('.logo-clone')).forEach(e => e.remove());
        // Duplicar los logos para efecto infinito
        const logos = Array.from(logotipo.children);
        logos.forEach(logo => {
            const clone = logo.cloneNode(true);
            clone.classList.add('logo-clone');
            logotipo.appendChild(clone);
        });
        logotipo.scrollTop = 0;
        scrollAmount = 0;
    }

    function animateVerticalCarousel() {
        scrollAmount += speed;
        const totalHeight = logotipo.scrollHeight / 2;
        if (scrollAmount >= totalHeight) {
            scrollAmount = 0;
        }
        logotipo.scrollTop = scrollAmount;
        animationId = requestAnimationFrame(animateVerticalCarousel);
    }


    function stopCarousel() {
        if (animationId) cancelAnimationFrame(animationId);
    }

    // Pausar al hacer hover sobre un logo, reanudar al salir de #conjunto
    function addHoverPause() {
        const conjunto = document.getElementById('conjunto');
        if (!conjunto) return;
        let paused = false;
        // Pausar al entrar en un logo
        logotipo.addEventListener('mouseover', function(e) {
            if (e.target.classList.contains('logo')) {
                stopCarousel();
                paused = true;
            }
        });
        // Reanudar al salir de #conjunto
        conjunto.addEventListener('mouseleave', function() {
            if (paused && isVertical()) {
                animateVerticalCarousel();
                paused = false;
            }
        });
    }

    function handleResize() {
        stopCarousel();
        if (isVertical()) {
            setupVerticalCarousel();
            animateVerticalCarousel();
        } else {
            // Horizontal: usar el carrusel horizontal
            Array.from(logotipo.querySelectorAll('.logo-clone')).forEach(e => e.remove());
            logotipo.scrollLeft = 0;
            scrollAmount = 0;
        }
    }

    window.addEventListener('resize', handleResize);
    handleResize();
    addHoverPause();
});
