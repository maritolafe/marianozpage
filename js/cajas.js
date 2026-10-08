function mostrar(){
var lista =document.getElementById('lista');
if(lista.style.display =='none'){
lista.style.display ='block'


}else{
lista.style.display ='none'
}
}
// parte de caja criticas...
// Obtener elementos del DOM
var modal = document.getElementById("modal");
var cBoton = document.getElementById("c1");
var cerraButton = document.getElementsByClassName("close")[0];

// Abrir la ventana modal al hacer clic en el botón
cBoton.addEventListener("click", function() {
  modal.style.display = "block";
});

// Cerrar la ventana modal al hacer clic en el botón de cierre
cerraButton.addEventListener("click", function() {
  modal.style.display = "none";
});

// Cerrar la ventana modal al hacer clic fuera de ella
window.addEventListener("click", function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});
