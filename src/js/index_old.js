import "../styles/main.scss";

// Validation Form

const form = document.querySelector(".form");
const mail = document.getElementById("email");
const mailContainer = document.querySelector(".input-email-wrapper");
const button = document.querySelector(".button");
const checkbox = document.querySelector("input[type='checkbox']");
const checkmark = document.querySelector(".checkmark");

mail.addEventListener("focusout", mailValidationRegex);
button.addEventListener("click", validarForm);

function validarForm(evt) {
  evt.preventDefault();
  // Validación y clase de error en checkbox

  if (!checkbox.checked) {
    checkmark.classList.add("checkmark-error");
    return false;
  } else {
    checkmark.classList.remove("checkmark-error");
  }
}

function mailValidationRegex() {
  let existError = document.querySelector(".error-message");

  if (mail.value == "") {
    mailContainer.children[0].classList.remove("input-email-ok");
    if (existError != null) {
      existError.remove();
    }
  }

  const mailRegex = /\S+@\S+\.\S+/;
  let errorMessage = "";
  let errorContainer = null;

  if (!existError) {
    errorContainer = document.createElement("p");
    errorContainer.classList.add("error-message");
  }

  if (mailRegex.test(mail.value) === false && !existError) {
    errorMessage =
      "Your email address must be in the format of name@domain.com";
    errorContainer.innerHTML = errorMessage;
    mail.after(errorContainer);
    mailContainer.children[0].classList.remove("input-email-ok");
  } else if (mailRegex.test(mail.value) === true && !existError) {
    mailContainer.children[0].classList.add("input-email-ok");
  } else if (mailRegex.test(mail.value) === true && existError) {
    mailContainer.children[0].classList.add("input-email-ok");
    existError.remove();
  }
}

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
