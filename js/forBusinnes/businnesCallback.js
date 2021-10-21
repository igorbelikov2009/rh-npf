(function () {
  let formValues = {
    name: "",
    phone: "",
    email: "",
    company: "",
  };

  let isFormValid = false;

  function onFocus(event) {
    let startingElement = event.target.closest(".businnes-callback__form"); // location identification
    if (!startingElement) return; // location identification

    event.target.parentElement.querySelector(".my-form__title").style.cssText =
      " top: 0px; font-size: 11px; transition: all 300ms ease;";

    // console.log(event.target.parentElement);
    if (event.target.parentElement.querySelector(".my-form__error")) {
      event.target.parentElement.querySelector(".my-form__error").innerHTML =
        "";
    }
  }

  function onBlur(event, field) {
    if (formValues[field].length == 0) {
      event.target.parentElement.querySelector(
        ".my-form__title"
      ).style.cssText =
        " top: 24px; font-size: 16px; transition: all 300ms ease;";
    }
  }

  function onInput(event, field) {
    formValues[field] = event.target.value;

    isFormValid = checkValidForm();
  }

  //  nameInput
  const nameInput = document
    .querySelector(".businnes-callback__form")
    .querySelectorAll(".my-form__field")[0];

  nameInput.addEventListener("focus", onFocus);

  nameInput.addEventListener("blur", function (event) {
    onBlur(event, "name");
  });

  nameInput.addEventListener("input", function (event) {
    onInput(event, "name");
  });

  // phoneInput
  const phoneInput = document
    .querySelector(".businnes-callback__form")
    .querySelectorAll(".my-form__field")[1];

  const errorPhoneInput = document
    .querySelector(".businnes-callback__form")
    .querySelectorAll(".my-form__error")[0];

  phoneInput.addEventListener("focus", onFocus);

  phoneInput.addEventListener("blur", function (event) {
    onBlur(event, "phone");
  });

  phoneInput.addEventListener("input", function (event) {
    onInput(event, "phone");
  });

  // emailInput
  const emailInput = document
    .querySelector(".businnes-callback__form")
    .querySelectorAll(".my-form__field")[2];

  const errorEmailInput = document
    .querySelector(".businnes-callback__form")
    .querySelectorAll(".my-form__error")[1];

  emailInput.addEventListener("focus", onFocus);

  emailInput.addEventListener("blur", function (event) {
    onBlur(event, "email");
  });

  emailInput.addEventListener("input", function (event) {
    onInput(event, "email");
  });

  // companyInput
  const companyInput = document
    .querySelector(".businnes-callback__form")
    .querySelectorAll(".my-form__field")[3];

  companyInput.addEventListener("focus", onFocus);
  companyInput.addEventListener("blur", function (event) {
    onBlur(event, "company");
  });
  companyInput.addEventListener("input", function (event) {
    onInput(event, "company");
  });

  // submitButton
  const submitButton = document
    .querySelector(".businnes-callback__form")
    .querySelector(".primary-button");

  function checkValidForm() {
    if (formValues.phone.length !== 11) {
      return false;
    }
    if (!formValues.email.includes("@")) {
      return false;
    }

    return true;
  }

  function eventSubmitButton() {
    if (formValues.phone.length !== 11 && !formValues.email.includes("@")) {
      errorPhoneInput.innerHTML = "Пожалуйста, укажите номер телефона";
      errorEmailInput.innerHTML = "Пожалуйста, укажите email адрес";
    }

    if (formValues.phone.length !== 11) {
      errorPhoneInput.innerHTML = "Пожалуйста, укажите номер телефона";
      return false;
    }

    if (!formValues.email.includes("@")) {
      errorEmailInput.innerHTML = "Пожалуйста, укажите email адрес";
      return false;
    }

    console.log(formValues);
  }

  submitButton.addEventListener("click", eventSubmitButton);

  //
})();
