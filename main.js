function setErrorFor(input, message) {

  const formControl = input.parentElement;
  const small = formControl.querySelector(".error-message");
  formControl.classList.add("error");
  formControl.classList.remove("success");
  small.innerText = message;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;

  const small = formControl.querySelector(".error-message");
  small.innerText = "";

  formControl.classList.remove("error");
  formControl.classList.add("success");

}

function isEmail(email) {

  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

document.addEventListener("DOMContentLoaded", function () {

  const navItems = document.querySelector(".nav-items");
  const burgerButton = document.querySelector(".burger-button");

  burgerButton.addEventListener("click", (e) => {

    e.preventDefault();

    navItems.classList.toggle("active");
    burgerButton.classList.toggle("change");

  });

  const contactForm = document.getElementById("form");

  if (contactForm) {
    const ime = document.getElementById("ime");
    const email = document.getElementById("email");
    const prezime = document.getElementById("prezime");
    const password = document.getElementById("password");
    const password2 = document.getElementById("password2");

    function checkInputs() {

      // Uklanjanje razmaka

      const imeValue = ime.value.trim();
      const emailValue = email.value.trim();
      const prezimeValue = prezime.value.trim();
      const passwordValue = password.value.trim();
      const password2Value = password2.value.trim();


      if (imeValue === "") {
        setErrorFor(ime, "Ovo polje je obavezno");
      } else {
        setSuccessFor(ime);
      }


      if (prezimeValue === "") {
        setErrorFor(prezime, "Ovo polje je obavezno");
      } else {
        setSuccessFor(prezime);
      }


      if (emailValue === "") {
        setErrorFor(email, "Ovo polje je obavezno");
      } else if (!isEmail(emailValue)) {
        setErrorFor(email, "Email nije validan");
      } else {
        setSuccessFor(email);
      }


      if (passwordValue === "") {
        setErrorFor(password, "Ovo polje je obavezno");
      } else {
        setSuccessFor(password);
      }


      if (password2Value === "") {
        setErrorFor(password2, "Ovo polje je obavezno");
      } else if (passwordValue !== password2Value) {
        setErrorFor(password2, "Šifre se ne poklapaju");
      } else {
        setSuccessFor(password2);
      }
    }

    function handleContactFormSubmit(event) {

      checkInputs();
      event.preventDefault();

    }
    contactForm.addEventListener("submit", handleContactFormSubmit);
  }
});