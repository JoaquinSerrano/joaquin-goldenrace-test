import "../styles/main.scss";

import Swal from "sweetalert2";

const form = document.querySelector(".form");
const mail = document.getElementById("email");
const mailContainer = document.querySelector(".input-email-wrapper");
const button = document.querySelector(".button");
const checkbox = document.querySelector("input[type='checkbox']");
const checkmark = document.querySelector(".checkmark");

const mailRegex = /\S+@\S+\.\S+/;

button.addEventListener("click", function () {});

form.addEventListener("submit", function (e) {
  e.preventDefault();

  //const mailRegex = /\S+@\S+\.\S+/;
  let existError = document.querySelector(".error-message");

  // Validación campo mail vacio o formato de mail invalido
  if (mailRegex.test(mail.value) === false && !existError) {
    let errorMessage =
      "Your email address must be in the format of name@domain.com";
    let errorContainer = document.createElement("p");
    errorContainer.classList.add("error-message");
    errorContainer.innerHTML = errorMessage;
    mail.after(errorContainer);
    mailContainer.children[0].classList.remove("input-email-ok");
    return false;
  }

  if (mailRegex.test(mail.value) === false && !existError) {
    return false;
  }

  // Validación campo mail, si es correcto se añade icono y se quita mensaje de error
  if (mailRegex.test(mail.value) === true) {
    mailContainer.children[0].classList.add("input-email-ok");
    if (existError) {
      existError.remove();
    }
  }

  // Validación Checkbox
  if (!checkbox.checked) {
    checkmark.classList.add("checkmark-error");
    return false;
  } else {
    checkmark.classList.remove("checkmark-error");
  }

  // Ventana alerta de envio exitoso
  if (!existError) {
    Swal.fire("Successfully sent!");

    // Impresión de datos de formulario en consola de navegador
    printDataForm();
    button.classList.add("button-success");
    button.innerHTML = "Thank You!!";
  }
});

mail.addEventListener("focusout", function () {
  if (mail.value === "") {
    mailContainer.children[0].classList.remove("input-email-ok");
  }

  if (mailRegex.test(mail.value) === true) {
    let existError = document.querySelector(".error-message");
    mailContainer.children[0].classList.add("input-email-ok");
    if (existError) {
      existError.remove();
    }
  }
});

function printDataForm() {
  const formData = {
    name: form.name.value,
    last_name: form.last_name.value,
    email: form.email.value,
    phone: form.phone.value,
    message: form.message.value,
    terms: form.terms.value,
  };
  console.log(formData);
}
