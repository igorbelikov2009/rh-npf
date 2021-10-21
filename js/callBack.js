(function () {
  // расположение в цетре
  const callBack = document.querySelector(".call-back");
  const topBlock = document.querySelector(".top-block");

  const topBlockWidth = topBlock.getBoundingClientRect().width;
  const topBlockHeight = topBlock.getBoundingClientRect().height;
  const callBackWidth = callBack.getBoundingClientRect().width;
  const callBackHeight = callBack.getBoundingClientRect().height;

  let left = "";
  let top = "";

  function getCoordsPositionCenter() {
    left = (topBlockWidth - callBackWidth) / 2;
    top = (topBlockHeight - callBackHeight) / 2;

    callBack.style.cssText = `top:${top}px; left: ${left}px; opacity: 1`;
  }

  function getCoordsPositionRight() {
    left = topBlockWidth - callBackWidth;
    top = 0;

    callBack.style.cssText = `top:${top}px; left: ${left}px; opacity: 0`;
  }

  function getCoordsPositionLeft() {
    top = 0;
    left = 0;
    callBack.style.cssText = `top:${top}px; left: ${left}px; opacity: 0`;
  }

  // obratnyyZvonok
  const obratnyyZvonok = document.querySelector(".header__obratnyy-zvonok");

  function onClickObratnyyZvonok() {
    if (left == 0 && top == 0) {
      getCoordsPositionCenter();
    } else if (left == (topBlockWidth - callBackWidth) / 2) {
      getCoordsPositionRight();
    } else if (left == topBlockWidth - callBackWidth) {
      getCoordsPositionLeft();

      setTimeout(() => {
        getCoordsPositionCenter();
      }, 500);
    }
  }

  obratnyyZvonok.addEventListener("click", onClickObratnyyZvonok);

  // event.code == "Escape"
  function onKeydownEscapeWindow(event) {
    if (event.code == "Escape") {
      getCoordsPositionLeft();
    }
  }

  window.addEventListener("keydown", onKeydownEscapeWindow);

  //  obratnyyZvonok2
  const menuMobil = document.querySelector(".menu-mobil");

  const obratnyyZvonok2 = document.querySelector(
    ".menu-mobil__obratnyy-zvonok"
  );

  function onClickObratnyyZvonok2() {
    menuMobil.classList.remove("menu-mobil__right-20");

    setTimeout(() => {
      menuMobil.classList.add("menu-mobil__hide");
    }, 500);

    setTimeout(() => {
      menuMobil.classList.remove("menu-mobil__visible");
    }, 500);

    getCoordsPositionCenter();
  }

  obratnyyZvonok2.addEventListener("click", onClickObratnyyZvonok2);

  // buttonHide
  const buttonHide = document.querySelector(".call-back__button-hide");

  function onClickButtonHide() {
    getCoordsPositionRight();
  }

  buttonHide.addEventListener("click", onClickButtonHide);

  // работа с формой (полями)
  let formValues = {
    name: "",
    phone: "",
  };

  let isFormValid = false;

  function onFocus(event) {
    let startingElement = event.target.closest(".call-back"); // location identification
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

    isFormValid = checkValidForm();

    if (isFormValid) {
      submitButton.removeAttribute("disabled");
    }
  }

  const allInputs = document
    .querySelector(".call-back")
    .querySelectorAll(".my-form__field");

  const nameInput = allInputs[0];
  const phoneInput = allInputs[1];

  const errorPhoneInput = phoneInput.nextElementSibling;

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

  // submitButton
  const submitButton = document
    .querySelector(".call-back")
    .querySelector(".primary-button");

  function checkValidForm() {
    if (formValues.phone.length < 0) {
      return false;
    }

    return true;
  }

  function eventSubmitButton() {
    if (formValues.phone.length !== 11) {
      errorPhoneInput.innerHTML = "Пожалуйста, укажите номер телефона";
      return false;
    }

    console.log(formValues);
  }

  submitButton.addEventListener("click", eventSubmitButton);
})();
