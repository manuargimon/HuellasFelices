/* ==========================================================================
   HUELLAS FELICES — main.js
   Validacion de formularios (Bootstrap) + confirmacion de envio.
   No hay backend: al validar correctamente se muestra un mensaje y se
   resetea el formulario.
   ========================================================================== */

(function () {
  "use strict";

  // Selecciona todos los formularios a los que se les aplico la clase
  // 'needs-validation' (index.html y contacto.html).
  const forms = document.querySelectorAll("form.needs-validation");

  forms.forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      event.stopPropagation();

      if (!form.checkValidity()) {
        form.classList.add("was-validated");
        // Enfoca el primer campo invalido para mejorar la accesibilidad
        const firstInvalid = form.querySelector(":invalid");
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      // Formulario valido: como no hay backend, simulamos el envio
      mostrarConfirmacion(form);
      form.reset();
      form.classList.remove("was-validated");
    });
  });

  function mostrarConfirmacion(form) {
    // Evita duplicar el mensaje si el usuario envia el formulario varias veces
    let aviso = form.querySelector(".form-success-msg");
    if (!aviso) {
      aviso = document.createElement("p");
      aviso.className = "form-success-msg fade-in-up";
      aviso.setAttribute("role", "status");
      aviso.style.color = "var(--color-forest)";
      aviso.style.fontWeight = "700";
      aviso.style.marginTop = "0.5rem";
      form.appendChild(aviso);
    }
    aviso.textContent = "¡Gracias! Recibimos tus datos y te vamos a contactar a la brevedad.";
  }
})();
