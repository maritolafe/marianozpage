


function mostrarSeccion(elementoA) {
  // Obtén el ID de la sección desde el atributo href del enlace
  var id = elementoA.getAttribute("href").slice(1);

  // Restaura el estilo de los demás elementos <li>
  resetearEstilos();

  // Aplica estilos al elemento <li> con el ID correspondiente
  var liElemento = document.getElementById(id);
  if (liElemento) {
    liElemento.style.backgroundColor = 'red';
    liElemento.style.opacity = '0.5';
    liElemento.style.transition='2s';
    liElemento.style.opacity='0'
    liElemento.style.transition='2s';
    liElemento.style.display='block';
     liElemento.style.backgroundColor = 'black';

  }

  // Puedes agregar la alerta si lo necesitas
  //alert("Sección seleccionada: " + id);

  // Agrega el código para navegar a la sección dentro de la página aquí si es necesario
}

function resetearEstilos() {
  // Obtiene todos los elementos <li>
  var listaLi = document.getElementsByTagName("li");

  // Itera sobre todos los elementos <li> y restaura los estilos
  for (var i = 0; i < listaLi.length; i++) {
    listaLi[i].style.backgroundColor = '';
    listaLi[i].style.opacity = '';
  }
}
 
function cv() {
  // Realiza las acciones específicas para la función cv()
  console.log('Mostrando CV');
}
 var miSeccion = document.getElementById('primera');

  // Evento de ejemplo (puedes cambiarlo según tus necesidades)
  miSeccion.addEventListener('click', function() {
    miSeccion.classList.add('transparente');
  });












