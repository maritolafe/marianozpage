// Validación del formulario con eventos
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('comentario');
    const nombre = document.getElementById('nombre');
    const email = document.getElementById('email');
    const asunto = document.getElementById('asunto');
    const texta = document.getElementById('texta');
    const submitBtn = document.getElementById('subir');

    // Función para mostrar mensaje de error
    function mostrarError(elemento) {
        // Remover mensaje de error anterior
        const errorAnterior = elemento.parentNode.querySelector('.error-mensaje');
        if (errorAnterior) {
            errorAnterior.remove();
        }

        // Crear y mostrar nuevo mensaje de error
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-mensaje';
        errorDiv.style.color = '#ff0000';
        errorDiv.style.fontSize = '12px';
        errorDiv.style.marginTop = '5px';
        errorDiv.textContent = 'Completar el campo';
        
        elemento.parentNode.appendChild(errorDiv);
        elemento.style.borderColor = '#ff0000';
        elemento.style.color = '#ff0000';
        elemento.style.placeholder = 'Completar el campo';
    }

    // Función para remover error
    function removerError(elemento) {
        const errorAnterior = elemento.parentNode.querySelector('.error-mensaje');
        if (errorAnterior) {
            errorAnterior.remove();
        }
        elemento.style.borderColor = '#00ffff';
        elemento.style.color = '#00ffff';
        
        // Restaurar placeholder original
        if (elemento.id === 'nombre') {
            elemento.placeholder = 'nombre y apellido';
        } else if (elemento.id === 'email') {
            elemento.placeholder = 'email';
        } else if (elemento.id === 'asunto') {
            elemento.placeholder = 'asunto';
        } else if (elemento.id === 'texta') {
            elemento.placeholder = 'comentario';
        }
    }

    // Validar nombre
    function validarNombre() {
        const valor = nombre.value.trim();
        if (!valor || valor.length < 3) {
            mostrarError(nombre);
            return false;
        }
        removerError(nombre);
        return true;
    }

    // Validar email
    function validarEmail() {
        const valor = email.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!valor || !emailRegex.test(valor)) {
            mostrarError(email);
            return false;
        }
        removerError(email);
        return true;
    }

    // Validar asunto
    function validarAsunto() {
        const valor = asunto.value.trim();
        if (!valor || valor.length < 5) {
            mostrarError(asunto);
            return false;
        }
        removerError(asunto);
        return true;
    }

    // Validar comentario
    function validarComentario() {
        const valor = texta.value.trim();
        if (!valor || valor.length < 10) {
            mostrarError(texta);
            return false;
        }
        removerError(texta);
        return true;
    }

    // Validación solo al presionar enviar (submit)

    // Función para mostrar mensaje de éxito
    function mostrarExito() {
        // Remover mensaje anterior si existe
        const mensajeAnterior = form.querySelector('.exito-mensaje');
        if (mensajeAnterior) {
            mensajeAnterior.remove();
        }

        // Crear mensaje de éxito
        const exitoDiv = document.createElement('div');
        exitoDiv.className = 'exito-mensaje';
        exitoDiv.style.color = '#00ff00';
        exitoDiv.style.fontSize = '14px';
        exitoDiv.style.marginTop = '10px';
        exitoDiv.style.textAlign = 'center';
        exitoDiv.style.fontWeight = 'bold';
        exitoDiv.textContent = '¡Enviado con éxito!';
        
        // Insertar después del botón de enviar
        submitBtn.parentNode.insertBefore(exitoDiv, submitBtn.nextSibling);
        
        // Remover mensaje después de 3 segundos
        setTimeout(function() {
            if (exitoDiv.parentNode) {
                exitoDiv.remove();
            }
        }, 3000);
    }

    // Validación al enviar el formulario
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const nombreValido = validarNombre();
        const emailValido = validarEmail();
        const asuntoValido = validarAsunto();
        const comentarioValido = validarComentario();

        // Si algún campo no es válido, enfoca el primero incorrecto
        if (!nombreValido) {
            nombre.focus();
        } else if (!emailValido) {
            email.focus();
        } else if (!asuntoValido) {
            asunto.focus();
        } else if (!comentarioValido) {
            texta.focus();
        }

        if (nombreValido && emailValido && asuntoValido && comentarioValido) {
            // Si todo es válido, mostrar mensaje de éxito
            mostrarExito();
            // Limpiar formulario
            form.reset();
            // Restaurar colores
            [nombre, email, asunto, texta].forEach(removerError);
        }
    });

    // Forzar color de fondo y texto al copiar/pegar en los campos
    [nombre, email, asunto, texta].forEach(function(campo) {
        campo.addEventListener('paste', function() {
            setTimeout(() => {
                campo.style.backgroundColor = '';
                campo.style.color = '';
            }, 10);
        });
        campo.addEventListener('input', function() {
            campo.style.backgroundColor = '';
            campo.style.color = '';
        });
    });

    // Resetear campos y estilos al cerrar el modal de mensaje
    const modal = document.getElementById('modal');
    const closeBtn = document.querySelector('.close');
    if (closeBtn && modal) {
        closeBtn.addEventListener('click', function() {
            form.reset();
            [nombre, email, asunto, texta].forEach(removerError);
            // Restaurar colores
            [nombre, email, asunto, texta].forEach(function(campo) {
                campo.style.backgroundColor = '';
                campo.style.color = '';
            });
        });
    }
}); 