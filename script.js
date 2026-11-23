const formulario = document.getElementById("formularioScarlett");
const mensaje = document.getElementById("mensaje");

formulario.addEventListener("submit", function(evento) {

    evento.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const tema = document.getElementById("tema").value;
    const comentario = document.getElementById("comentario").value.trim();

    // Validar nombre
    if (nombre.length < 3) {
        mensaje.textContent = "Escribe un nombre válido.";
        return;
    }

    // Validar correo
    const expresionCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!expresionCorreo.test(correo)) {
        mensaje.textContent = "Escribe un correo electrónico válido.";
        return;
    }

    // Validar que el tema sea sobre Scarlett Camberos
    if (tema === "") {
        mensaje.textContent = "Selecciona un tema sobre Scarlett Camberos.";
        return;
    }

    // Validar comentario
    if (comentario.length < 10) {
        mensaje.textContent = "Escribe un comentario de al menos 10 caracteres.";
        return;
    }

    mensaje.textContent =
        "¡Formulario de Scarlett Camberos enviado correctamente!";

    formulario.reset();