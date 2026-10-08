// Funciones para manejar los logos y mostrar sus descripciones

// Variables globales
var cuadrodein;
var cuadrito2;

// Inicialización cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar variables después de que el DOM esté listo
    cuadrodein = document.getElementById('cuadrodein');
    cuadrito2 = document.getElementById('cuadrito2');
    
    // Mostrar descripción general por defecto
    mostrarDescripcionGeneral();
    
    // Agregar eventos click a los logos para mejor usabilidad
    const logos = document.querySelectorAll('.logo');
    logos.forEach(logo => {
        logo.addEventListener('click', function() {
            // Obtener el ID del logo y llamar a la función correspondiente
            const logoId = this.id;
            if (window[logoId]) {
                window[logoId]();
            }
        });
    });
});

// Función para mostrar descripción de C
function c() {
    ocultarTodos();
    document.getElementById('1').style.display = 'block';
    cuadrodein.style.display = 'block';
    cuadrito2.style.display = 'none';
}

// Función para mostrar descripción de JavaScript
function javascript() {
    ocultarTodos();
    document.getElementById('2').style.display = 'block';
    cuadrodein.style.display = 'block';
    cuadrito2.style.display = 'none';
}

// Función para mostrar descripción de HTML
function html() {
    ocultarTodos();
    document.getElementById('3').style.display = 'block';
    cuadrodein.style.display = 'block';
    cuadrito2.style.display = 'none';
}

// Función para mostrar descripción de CSS
function css() {
    ocultarTodos();
    document.getElementById('4').style.display = 'block';
    cuadrodein.style.display = 'block';
    cuadrito2.style.display = 'none';
}

// Función para mostrar descripción de PHP
function php() {
    ocultarTodos();
    document.getElementById('5').style.display = 'block';
    cuadrodein.style.display = 'block';
    cuadrito2.style.display = 'none';
}

// Función para mostrar descripción de COBOL
function cobol() {
    ocultarTodos();
    document.getElementById('6').style.display = 'block';
    cuadrodein.style.display = 'block';
    cuadrito2.style.display = 'none';
}

// Función para mostrar descripción de jQuery
function jquery() {
    ocultarTodos();
    document.getElementById('7').style.display = 'block';
    cuadrodein.style.display = 'block';
    cuadrito2.style.display = 'none';
}

// Función para mostrar descripción de Angular
function angular() {
    ocultarTodos();
    document.getElementById('8').style.display = 'block';
    cuadrodein.style.display = 'block';
    cuadrito2.style.display = 'none';
}

// Función para mostrar descripción de React
function react() {
    ocultarTodos();
    document.getElementById('9').style.display = 'block';
    cuadrodein.style.display = 'block';
    cuadrito2.style.display = 'none';
}

// Función para mostrar descripción de Bootstrap
function bootstrap() {
    ocultarTodos();
    document.getElementById('10').style.display = 'block';
    cuadrodein.style.display = 'block';
    cuadrito2.style.display = 'none';
}

// Función para mostrar descripción de WordPress
function workpress() {
    ocultarTodos();
    document.getElementById('11').style.display = 'block';
    cuadrodein.style.display = 'block';
    cuadrito2.style.display = 'none';
}

// Función para mostrar descripción de SQL
function sql() {
    ocultarTodos();
    document.getElementById('12').style.display = 'block';
    cuadrodein.style.display = 'block';
    cuadrito2.style.display = 'none';
}

// Función para mostrar descripción de BD2
function bd2() {
    ocultarTodos();
    document.getElementById('13').style.display = 'block';
    cuadrodein.style.display = 'block';
    cuadrito2.style.display = 'none';
}

// Función auxiliar para ocultar todas las descripciones
function ocultarTodos() {
    // Ocultar todas las descripciones individuales
    for (let i = 1; i <= 13; i++) {
        const elemento = document.getElementById(i.toString());
        if (elemento) {
            elemento.style.display = 'none';
        }
    }
}

// Función para mostrar la descripción general (cuadrito2)
function mostrarDescripcionGeneral() {
    ocultarTodos();
    if (cuadrodein) cuadrodein.style.display = 'none';
    if (cuadrito2) cuadrito2.style.display = 'block';
} 