function toggleMenu() {
    var menu = document.getElementById('menu');
    menu.classList.toggle('d-none');
}

function mostrarSeccion(enlace) {
    const secciones = document.querySelectorAll('main section');
    secciones.forEach(seccion => {
        seccion.classList.add('d-none');
    });
    const seccionMostrar = document.querySelector(enlace.getAttribute('href'));
    seccionMostrar.classList.remove('d-none');
}

function cursos() {
    document.getElementById('tabla1').classList.toggle('d-none');
}

function cursos2() {
    document.getElementById('tabla2').classList.toggle('d-none');
}

function hacer() {
    document.getElementById('modal').style.display = 'block';
}

window.onclick = function(event) {
    var modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

document.querySelector('.close').onclick = function() {
    document.getElementById('modal').style.display = 'none';
}
