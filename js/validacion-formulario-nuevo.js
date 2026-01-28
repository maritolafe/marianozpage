// Validación y envío AJAX para FormSubmit + Bootstrap 5
function validarYEnviarFormulario(e) {
  const form = document.getElementById('comentario');
  const nombre = document.getElementById('nombre');
  const email = document.getElementById('email');
  const asunto = document.getElementById('asunto');
  const texta = document.getElementById('texta');
  const mensajeExito = document.getElementById('mensaje-exito');

  // Validación simple
  let valido = true;
  [nombre, email, asunto, texta].forEach(input => {
    input.classList.remove('is-invalid');
    if (!input.value.trim() || (input.hasAttribute('minlength') && input.value.trim().length < input.getAttribute('minlength'))) {
      input.classList.add('is-invalid');
      valido = false;
    }
  });

  // Validación de email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value.trim())) {
    email.classList.add('is-invalid');
    valido = false;
  }

  if (!valido) {
    return false; // No enviar si hay errores
  }

  // Enviar con fetch a FormSubmit
  const formData = new FormData(form);
  fetch(form.action, {
    method: 'POST',
    body: formData,
    headers: { 'Accept': 'application/json' }
  })
    .then(response => {
      if (response.ok) {
        mensajeExito.style.display = 'block';
        mensajeExito.className = 'alert alert-success mt-3';
        mensajeExito.textContent = '¡Formulario enviado correctamente!';
        form.reset();
        setTimeout(() => { mensajeExito.style.display = 'none'; }, 4000);
      } else {
        mensajeExito.style.display = 'block';
        mensajeExito.className = 'alert alert-danger mt-3';
        mensajeExito.textContent = 'Error al enviar el formulario. Intente nuevamente.';
      }
    })
    .catch(() => {
      mensajeExito.style.display = 'block';
      mensajeExito.className = 'alert alert-danger mt-3';
      mensajeExito.textContent = 'Error al enviar el formulario. Intente nuevamente.';
    });

  e.preventDefault(); // Solo aquí se previene el envío para usar fetch
  return false;
}
