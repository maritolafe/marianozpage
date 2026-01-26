// Efecto de Parallax con Zoom para el Carousel de Proyectos
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.getElementById('carouselProyectos');
    
    // Verificar que el carousel existe
    if (!carousel) {
        console.log('Carousel de proyectos no encontrado');
        return;
    }
    
    const carouselItems = carousel.querySelectorAll('.carousel-item');
    const carouselInner = carousel.querySelector('.carousel-inner');

    // Agregar estilos CSS dinámicamente
    const style = document.createElement('style');
    style.textContent = `
        .carousel-item {
            transform: scale(0.8);
            transition: all 0.8s ease;
            opacity: 0.7;
        }
        
        .carousel-item.active {
            transform: scale(1);
            opacity: 1;
        }
        
        .carousel-item img {
            transform: translateY(-20px);
            transition: transform 0.6s ease;
        }
        
        .carousel-item.active img {
            transform: translateY(0);
        }
        
        .carousel-item .carousel-caption {
            transform: translateY(30px);
            opacity: 0;
            transition: all 0.6s ease 0.2s;
        }
        
        .carousel-item.active .carousel-caption {
            transform: translateY(0);
            opacity: 1;
        }
    `;
    document.head.appendChild(style);

    // Función para aplicar efecto de zoom
    function aplicarEfectoZoom() {
        carouselItems.forEach(item => {
            if (item.classList.contains('active')) {
                item.style.transform = 'scale(1)';
                item.style.opacity = '1';
            } else {
                item.style.transform = 'scale(0.8)';
                item.style.opacity = '0.7';
            }
        });
    }

    // Observar cambios en el carousel
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                setTimeout(aplicarEfectoZoom, 50);
            }
        });
    });

    // Observar cambios en los elementos del carousel
    carouselItems.forEach(item => {
        observer.observe(item, {
            attributes: true,
            attributeFilter: ['class']
        });
    });

    // Aplicar efecto inicial
    aplicarEfectoZoom();

    // Efecto adicional al hacer hover
    carouselItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            if (this.classList.contains('active')) {
                this.style.transform = 'scale(1.05)';
            }
        });

        item.addEventListener('mouseleave', function() {
            if (this.classList.contains('active')) {
                this.style.transform = 'scale(1)';
            }
        });
    });


    // Avance automático, pausa en hover y reanuda al salir
    // Efecto scroll horizontal con la rueda del mouse en el carrusel
    if (carouselInner) {
        carouselInner.addEventListener('wheel', function(e) {
            if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
                e.preventDefault();
                carouselInner.scrollLeft += e.deltaY;
            }
        }, { passive: false });
    }
    let autoSlideInterval = null;
    const carouselElement = document.getElementById('carouselProyectos');
    function startAutoSlide() {
        if (autoSlideInterval) return;
        autoSlideInterval = setInterval(() => {
            const nextBtn = carouselElement.querySelector('.carousel-control-next');
            if (nextBtn) nextBtn.click();
        }, 3000); // Cambia cada 3 segundos
    }
    function stopAutoSlide() {
        if (autoSlideInterval) {
            clearInterval(autoSlideInterval);
            autoSlideInterval = null;
        }
    }
    // Iniciar avance automático
    startAutoSlide();
    // Pausar al hacer hover sobre el carrusel
    carouselElement.addEventListener('mouseenter', stopAutoSlide);
    // Reanudar al salir del carrusel
    carouselElement.addEventListener('mouseleave', startAutoSlide);

    // Efecto fijo para la sección de proyectos
    const proyectosSection = document.getElementById('proyectos');
    if (proyectosSection) {
        // Agregar estilos para posición fija
        const styleFijo = document.createElement('style');
        styleFijo.textContent = `
            #proyectos {
                position: relative;
                z-index: 10;
            }
            #carouselProyectos {
                position: sticky;
                top: 100px;
                z-index: 15;
            }
        `;
        document.head.appendChild(styleFijo);
    }

    console.log('Efecto de carousel aplicado a la sección de proyectos');
});