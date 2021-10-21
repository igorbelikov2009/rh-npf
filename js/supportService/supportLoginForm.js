(function () {
  let formValues = {
    name: "",
    phone: "",
    email: "",
    company: "",
    message: "",
  };

  let isFormValid = false;

  function onFocus(event) {
    let startingElement = event.target.closest(".support-form"); // location identification
    if (!startingElement) return; // location identification

    event.target.parentElement.querySelector(".my-form__title").style.cssText =
      " top: 0px; font-size: 11px; transition: all 300ms ease;";

    // console.log(event.target);
    // console.log(event.target.parentElement);
    // console.log(event.target.parentElement.querySelector(".my-form__error"));

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

    if (isFormValid) {
      submitButton.removeAttribute("disabled");
    }
  }

  const allInputs = document
    .querySelector(".support-form")
    .querySelectorAll(".my-form__field");

  const nameInput = allInputs[0];
  const phoneInput = allInputs[1];
  const emailInput = allInputs[2];
  const companyInput = allInputs[3];
  const messageInput = allInputs[4];

  const errorPhoneInput = phoneInput.nextElementSibling;
  const errorEmailInput = emailInput.nextElementSibling;

  //  nameInput
  nameInput.addEventListener("focus", onFocus);

  nameInput.addEventListener("blur", function (event) {
    onBlur(event, this.name);
  });

  nameInput.addEventListener("input", function (event) {
    onInput(event, this.name);
  });

  // phoneInput
  phoneInput.addEventListener("focus", onFocus);
  phoneInput.addEventListener("blur", function (event) {
    onBlur(event, this.name);
  });
  phoneInput.addEventListener("input", function (event) {
    onInput(event, this.name);
  });

  // emailInput
  emailInput.addEventListener("focus", onFocus);
  emailInput.addEventListener("blur", function (event) {
    onBlur(event, this.name);
  });
  emailInput.addEventListener("input", function (event) {
    onInput(event, this.name);
  });

  // companyInput
  companyInput.addEventListener("focus", onFocus);
  companyInput.addEventListener("blur", function (event) {
    onBlur(event, this.name);
  });
  companyInput.addEventListener("input", function (event) {
    onInput(event, this.name);
  });

  // messageInput
  messageInput.addEventListener("focus", onFocus);
  messageInput.addEventListener("blur", function (event) {
    onBlur(event, this.name);
  });
  messageInput.addEventListener("input", function (event) {
    onInput(event, this.name);
  });

  // submitButton
  const submitButton = document
    .querySelector(".support-form")
    .querySelector(".primary-button");

  function checkValidForm() {
    if (formValues.phone.length < 0) {
      return false;
    }
    if (formValues.email.length < 0) {
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
})();
