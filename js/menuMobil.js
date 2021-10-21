(function () {
  const buttonLines = document
    .querySelector(".header")
    .querySelector(".header__button-lines");

  const menuMobil = document.querySelector(".menu-mobil");

  function onClickButtonLines() {
    menuMobil.classList.remove("menu-mobil__hide");
    menuMobil.classList.add("menu-mobil__visible");

    setTimeout(() => {
      menuMobil.classList.add("menu-mobil__right-20");
    }, 100);
  }

  buttonLines.addEventListener("click", onClickButtonLines);

  const crossSwitch = menuMobil.querySelector(".menu-mobil__cross-switch");

  function onClickCrossSwith() {
    menuMobil.classList.remove("menu-mobil__right-20");

    setTimeout(() => {
      menuMobil.classList.add("menu-mobil__hide");
    }, 500);

    setTimeout(() => {
      menuMobil.classList.remove("menu-mobil__visible");
    }, 500);
  }

  crossSwitch.addEventListener("click", onClickCrossSwith);

  // window code == "Escape"
  function onKeydownEscapeWindow(event) {
    if (event.code == "Escape") {
      event.preventDefault();

      onClickCrossSwith();
    }
  }

  window.addEventListener("keydown", onKeydownEscapeWindow);
})();
