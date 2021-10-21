(function () {
  let caruselValue = 0;

  const scrollingBlock = document
    .querySelector(".businnes-carousel")
    .querySelector(".businnes-carousel__hidden-block");

  const transmittedText = document
    .querySelector(".businnes-carousel")
    .querySelector(".businnes-carousel__transmitted-text");

  function changeStyleTransmittedText() {
    transmittedText.style.cssText =
      "color: #78828c; font-size: 12px; font-weight: 400;";
    setTimeout(
      () =>
        (transmittedText.style.cssText =
          "color: #28323c; font-size: 18px; font-weight: 400;"),
      500
    );
  }

  function getCaruselValueClickKvadrat(event) {
    let value = event.target.value;
    caruselValue = value;
  }

  function changeSizeKvadrat() {
    let scorableElement = scrollingBlock.querySelectorAll(
      ".businnes-carousel__kvadrat"
    )[caruselValue];

    console.log("Ok");

    scorableElement.classList.add("businnes-carousel__kvadrat-actived");

    if (scorableElement.nextElementSibling) {
      scorableElement.nextElementSibling.classList.remove(
        "businnes-carousel__kvadrat-actived"
      );
    }

    if (scorableElement.previousElementSibling) {
      scorableElement.previousElementSibling.classList.remove(
        "businnes-carousel__kvadrat-actived"
      );
    }
  }

  function changeStyleCarouselImage() {
    let scorableElement = scrollingBlock.querySelectorAll(
      ".businnes-carousel__kvadrat"
    )[caruselValue];

    scorableElement.children[1].children[0].classList.remove(
      "businnes-carousel__image_hidden"
    );
    scorableElement.children[1].children[1].classList.add(
      "businnes-carousel__image_hidden"
    );

    if (scorableElement.nextElementSibling) {
      scorableElement.nextElementSibling.children[1].children[0].classList.add(
        "businnes-carousel__image_hidden"
      );
      scorableElement.nextElementSibling.children[1].children[1].classList.remove(
        "businnes-carousel__image_hidden"
      );
    }

    if (scorableElement.previousElementSibling) {
      scorableElement.previousElementSibling.children[1].children[0].classList.add(
        "businnes-carousel__image_hidden"
      );

      scorableElement.previousElementSibling.children[1].children[1].classList.remove(
        "businnes-carousel__image_hidden"
      );
    }
  }

  function switchCaseCaruselValue() {
    switch (caruselValue) {
      case "0":
        scrollingBlock.style.cssText = "left: 0px; transition: all 600ms ease;";
        transmittedText.innerHTML =
          "Сохранение статуса и образа жизни после выхода на пенсию.";

        break;

      case "1":
        scrollingBlock.style.cssText =
          "left: -224px; transition: all 600ms ease;";
        transmittedText.innerHTML =
          "Увеличение лояльности работников к работодателю.";

        break;

      case "2":
        scrollingBlock.style.cssText =
          "left: -448px; transition: all 600ms ease;";
        transmittedText.innerHTML =
          "Комфортное увольнение на пенсию без существенной потери доходов.";

        break;

      case "3":
        scrollingBlock.style.cssText =
          "left: -672px; transition: all 600ms ease;";
        transmittedText.innerHTML =
          "Уплата пенсионных взносов в пользу работника зависит от соблюдения им трудовой дисциплины.";

        break;

      case "4":
        scrollingBlock.style.cssText =
          "left: -896px; transition: all 600ms ease;";
        transmittedText.innerHTML =
          "Зависимость размера пенсионных взносов от продолжительности участия в пенсионной программе, должностных грейдов и стажа.";

        break;

      case "5":
        scrollingBlock.style.cssText =
          "left: -1120px; transition: all 600ms ease;";
        transmittedText.innerHTML = "Использование льгот по налогу на прибыль.";

        break;

      case "6":
        scrollingBlock.style.cssText =
          "left: -1344px; transition: all 600ms ease;";
        transmittedText.innerHTML =
          "Передача Фонду функции социальной поддержки.";

        break;
    }
  }

  function onClickCarouselKvadrat(event) {
    if (
      event.target.classList.contains("businnes-carousel__radio") ||
      event.target.classList.contains("businnes-carousel__cursor-left") ||
      event.target.classList.contains("businnes-carousel__cursor-right")
    ) {
      changeStyleTransmittedText();
      getCaruselValueClickKvadrat(event);
      changeSizeKvadrat();
      changeStyleCarouselImage();
      switchCaseCaruselValue();
      changeColorArrow();
    }
  }

  scrollingBlock.addEventListener("click", onClickCarouselKvadrat);

  // for arrows
  const arrowLeft = document
    .querySelector(".businnes-carousel")
    .querySelector(".offset-arrows__left-arrow");

  const arrowRight = document
    .querySelector(".businnes-carousel")
    .querySelector(".offset-arrows__right-arrow");

  const arrowLeftDark = arrowLeft.children[1];
  const arrowRightDark = arrowRight.children[1];

  function onLoadColorArrowLeft() {
    if (caruselValue == 0) {
      arrowLeft.classList.add("offset-arrows__left-arrow_no-cursor");
      arrowLeftDark.classList.add("offset-arrows__opacity-04");
    }
  }
  window.addEventListener("load", onLoadColorArrowLeft);

  function changeColorArrow() {
    switch (caruselValue) {
      case "0":
        arrowLeft.classList.add("offset-arrows__left-arrow_no-cursor");
        arrowLeftDark.classList.add("offset-arrows__opacity-04");
        break;

      case "1":
        arrowLeft.classList.remove("offset-arrows__left-arrow_no-cursor");
        arrowLeftDark.classList.remove("offset-arrows__opacity-04");

        break;

      case "5":
        arrowRight.classList.remove("offset-arrows__right-arrow_no-cursor");
        arrowRightDark.classList.remove("offset-arrows__opacity-04");
        break;

      case "6":
        arrowRight.classList.add("offset-arrows__right-arrow_no-cursor");
        arrowRightDark.classList.add("offset-arrows__opacity-04");
        break;
    }
  }

  function onClickArrowLeft() {
    caruselValue = Number(caruselValue);
    caruselValue--;
    if (caruselValue < 0) caruselValue = 0;
    caruselValue = String(caruselValue);

    changeStyleTransmittedText();
    changeSizeKvadrat();
    changeStyleCarouselImage();
    switchCaseCaruselValue();
    changeColorArrow();
  }

  function onClickArrowRight() {
    caruselValue = Number(caruselValue);
    caruselValue++;
    if (caruselValue > 6) caruselValue = 6;
    caruselValue = String(caruselValue);

    changeStyleTransmittedText();
    changeSizeKvadrat();
    changeStyleCarouselImage();
    switchCaseCaruselValue();
    changeColorArrow();
  }

  arrowLeft.addEventListener("click", onClickArrowLeft);
  arrowRight.addEventListener("click", onClickArrowRight);

  //
})();
