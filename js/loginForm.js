(function () {
  // расположение в цетре
  const loginForm = document.querySelector(".login-form");

  let screenWidth = document.documentElement.clientWidth;
  let screenHeight = document.documentElement.clientHeight;
  let loginFormWidth = loginForm.getBoundingClientRect().width;
  let loginFormHeight = loginForm.getBoundingClientRect().height;

  let left = "";
  let top = "";

  function getCoordsLoginForm() {
    left = (screenWidth - loginFormWidth) / 2;
    top = (screenHeight - loginFormHeight) / 2;
    loginForm.style.cssText = `top:${top}px; left: ${left}px`;

    setTimeout(() => {
      loginForm.classList.remove("login-form__scale-1");
      loginForm.classList.add("login-form__scale-01");
    }, 100);
  }
  window.addEventListener("load", getCoordsLoginForm);

  // показать-спрятать loginForm
  const buttonShow = document.querySelector(".header__button-switch");

  function showHideLoginForm() {
    loginForm.classList.toggle("login-form__hide");
    loginForm.classList.toggle("login-form__visible");
  }

  function scaleLoginForm() {
    loginForm.classList.toggle("login-form__scale-1");
    loginForm.classList.toggle("login-form__scale-01");
  }

  function onClickButtonShow() {
    showHideLoginForm();
    scaleLoginForm();
  }

  buttonShow.addEventListener("click", onClickButtonShow);

  const buttonHide = loginForm.querySelector(".login-form__cross-switch");

  function hideloginForm() {
    loginForm.classList.add("login-form__hide");
    loginForm.classList.remove("login-form__visible");
  }

  function onClickButtonHide() {
    hideloginForm();
    scaleLoginForm();
  }

  buttonHide.addEventListener("click", onClickButtonHide);

  // поля
  let formValues = {
    phone: "",
    email: "",
    password: "",
  };

  let isFormValid = false;

  function onFocus(event) {
    let startingElement = event.target.closest(".login-form"); // location identification
    if (!startingElement) return; // location identification

    event.target.parentElement.querySelector(".my-form__title").style.cssText =
      " top: 0px; font-size: 11px; transition: all 300ms ease;";

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
    //
    // console.log(formValues[field]);
    //
    isFormValid = checkValidForm();

    if (isFormValid) {
      submitButton.removeAttribute("disabled");
    }
  }

  const allInputs = document
    .querySelector(".login-form")
    .querySelectorAll(".my-form__field");

  const phoneInput = allInputs[0];
  const emailInput = allInputs[1];
  const passwordInput = allInputs[2];

  const errorPhoneInput = phoneInput.nextElementSibling;
  const errorEmailInput = emailInput.nextElementSibling;
  const errorPasswordInput = passwordInput.nextElementSibling;

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

  // passwordInput
  passwordInput.addEventListener("focus", onFocus);
  passwordInput.addEventListener("blur", function (event) {
    onBlur(event, this.name);
  });
  passwordInput.addEventListener("input", function (event) {
    onInput(event, this.name);
  });

  // submitButton
  const submitButton = document
    .querySelector(".login-form")
    .querySelector(".primary-button");

  function checkValidForm() {
    if (formValues.phone.length < 0) {
      return false;
    }
    if (formValues.email.length < 0) {
      return false;
    }
    if (formValues.password.length < 0) {
      return false;
    }

    return true;
  }

  function eventSubmitButton() {
    if (
      formValues.phone.length !== 11 &&
      !formValues.email.includes("@") &&
      formValues.password.length < 10
    ) {
      errorPhoneInput.innerHTML = "Пожалуйста, укажите номер телефона";
      errorEmailInput.innerHTML = "Пожалуйста, укажите email адрес";
      errorPasswordInput.innerHTML = "Пожалуйста, введите пароль";
    }

    if (formValues.phone.length !== 11) {
      errorPhoneInput.innerHTML = "Пожалуйста, укажите номер телефона";
      return false;
    }

    if (!formValues.email.includes("@")) {
      errorEmailInput.innerHTML = "Пожалуйста, укажите email адрес";
      return false;
    }

    if (formValues.password.length < 10) {
      errorPasswordInput.innerHTML = "Пожалуйста, введите пароль";
      return false;
    }

    console.log(formValues);
  }

  submitButton.addEventListener("click", eventSubmitButton);

  //
  // document.body.onclick = function (event) {
  //   console.log(event.target);
  // };

  //
  //   function onKeydownEnterSubmitButton(event) {
  //     if (event.code == "NumpadEnter" || event.code == "Enter") {
  //       event.preventDefault();

  //       eventSubmitButton();
  //     }
  //   }

  //   submitButton.addEventListener("keydown", onKeydownEnterSubmitButton);
  /* ************  emailInput.focus(); ********************* */
  //
})();
