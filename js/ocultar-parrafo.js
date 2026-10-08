// Función para ocultar/mostrar párrafo según el tamaño de pantalla
function controlarParrafo() {
    const caja1 = document.getElementById('caja1');
    const parrafo = caja1.querySelector('p');
    
    if (window.innerWidth <= 739) {
        // Ocultar párrafo en pantallas pequeñas
        if (parrafo) {
            parrafo.style.display = 'none';
        }
    } else {
        // Mostrar párrafo en pantallas grandes
        if (parrafo) {
            parrafo.style.display = 'block';
        }
    }
}

// Ejecutar cuando se carga la página
document.addEventListener('DOMContentLoaded', controlarParrafo);

// Ejecutar cuando cambie el tamaño de la ventana
window.addEventListener('resize', controlarParrafo); 