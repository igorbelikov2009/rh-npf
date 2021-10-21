(function () {
  let reportingValue = "";

  const visibleBlock = document
    .querySelector(".reporting")
    .querySelector(".switching__visible");
  const hidingBlock = document
    .querySelector(".reporting")
    .querySelector(".switching__hiding-block");
  const innerBlock = document
    .querySelector(".reporting")
    .querySelector(".switching__inner");
  const bottomSpase = document
    .querySelector(".reporting")
    .querySelector(".switching__bottom-spase");
  const imageTriangle = document
    .querySelector(".reporting")
    .querySelector(".switching__image");
  const whiteLine = document
    .querySelector(".reporting")
    .querySelector(".switching__white-line");
  const blackLine = document
    .querySelector(".reporting")
    .querySelector(".switching__white-line").children;
  const topBottoms = document
    .querySelector(".reporting")
    .querySelector(".switching__scrollable-block");
  const bottomButtons = document
    .querySelector(".reporting")
    .querySelector(".switching__list-bottom-buttons");
  const numberButtons = topBottoms.children.length;

  const blueLine = document
    .querySelector(".reporting")
    .querySelector(".switching__duplicate-blue-line");

  const reportingBlock = document.querySelector(".reporting");

  function hideOrShowHidingBlock() {
    hidingBlock.classList.toggle("switching__hiding-block_show");
    hidingBlock.classList.toggle("switching__hiding-block_hide");
  }

  // выравниваем по центру высоты HidingBlock
  function alignScrollingHidingBlock() {
    hidingBlock.scrollIntoView({ block: "center", behavior: "smooth" });
  }

  // меняем позиционирование HidingBlock на fixed
  let q = 0;

  function changePositionHidingBlock() {
    let visibleWidth = visibleBlock.getBoundingClientRect().width - 12;
    let visibleBottom = visibleBlock.getBoundingClientRect().bottom;
    let visibleX = visibleBlock.getBoundingClientRect().x + 6;

    if (q % 2 == 0) {
      hidingBlock.removeAttribute("style");
    } else {
      hidingBlock.style.cssText = `width: ${visibleWidth}px; position: fixed; top:${visibleBottom}px; left: ${visibleX}px`;
    }
  }

  // Меняем background у reportingBlock
  function changeBackgroundReportingBlock() {
    reportingBlock.classList.toggle("reporting__background-gray");
    reportingBlock.classList.toggle("reporting__background-white");
  }

  function changeBackgroundInnerBlock() {
    innerBlock.classList.toggle("switching__inner_backgr-white");
    innerBlock.classList.toggle("switching__inner_backgr-gray");
  }

  function changeBackgroundBottomSpase() {
    bottomSpase.classList.toggle("switching__bottom-spase_background-d0f0f6d1");
    bottomSpase.classList.toggle("switching__bottom-spase_background-fff");
  }

  function changeDegRotateImageTriangle() {
    imageTriangle.classList.toggle("switching__image_rotate-180");
    imageTriangle.classList.toggle("switching__image_rotate-0");
  }

  function changeHeightWhiteLine() {
    whiteLine.classList.toggle("switching__white-line_height-2");
    whiteLine.classList.toggle("switching__white-line_height-1");
  }

  function changeWidthBlackLine() {
    blackLine[0].classList.toggle("switching__black-line_width-0");
    blackLine[0].classList.toggle("switching__black-line_width-50");
    blackLine[1].classList.toggle("switching__black-line_width-0");
    blackLine[1].classList.toggle("switching__black-line_width-50");
  }

  function changeColorBorderVisibleBlock() {
    visibleBlock.classList.toggle("switching__visible_border-gray");
    visibleBlock.classList.toggle("switching__visible_border-white");
  }

  // смена стилей VisibleBlock
  function changeStyleVisibleBlock() {
    changeBackgroundInnerBlock();
    changeBackgroundBottomSpase();
    changeDegRotateImageTriangle();
    changeHeightWhiteLine();
    changeWidthBlackLine();
    changeColorBorderVisibleBlock();
  }

  // прячем-показываем blueLine
  function hideOrShowBlueLine() {
    blueLine.classList.toggle("switching__duplicate-blue-line_background-blue");
    blueLine.classList.toggle("switching__duplicate-blue-line_background-gray");
  }

  // clicableElement(event.target) = visibleBlock
  // Обработчик висит на visibleBlock = ".switching__visible"
  function onClickVisibleBlock() {
    // выравниваем по центру высоты HidingBlock
    alignScrollingHidingBlock();
    // прячем-показываем HidingBlock
    hideOrShowHidingBlock();
    // прячем-показываем BlueLine
    hideOrShowBlueLine();
    // смена стилей VisibleBlock
    changeStyleVisibleBlock();
    // Меняем background у reportingBlock
    changeBackgroundReportingBlock(); ////////////////
    // меняем позиционирование HidingBlock на fixed
    // qChange();
    q++;
    setTimeout(() => changePositionHidingBlock(), 500);
  }
  visibleBlock.addEventListener("click", onClickVisibleBlock);

  // прячем HidingBlock
  function hideHidingBlock() {
    hidingBlock.classList.remove("switching__hiding-block_show");
    hidingBlock.classList.add("switching__hiding-block_hide");
  }

  // прячем blueLine
  function hideBlueLine() {
    blueLine.classList.remove("switching__duplicate-blue-line_background-blue");
    blueLine.classList.add("switching__duplicate-blue-line_background-gray");
  }

  // получаем reportingValue - значение выбранного input type="radio"
  // ".switching__top-input" или ".switching__bottom-input"
  function getReportingValue(event) {
    if (
      event.target.classList.contains("switching__top-input") ||
      event.target.classList.contains("switching__bottom-input")
    ) {
      let switchTarget = event.target;
      let value = switchTarget.value;

      reportingValue = value;
    }
  }

  // скрываем все currentBlock но открываем выбранный currentBlock("reporting__block")
  function changeStyleCurrentBlock() {
    for (let i = 0; i < numberButtons; i++) {
      let currentBlock = document.querySelector(".reporting__list").children[i];
      currentBlock.style.cssText = "display: none;";
    }

    document.querySelector(".reporting__list").children[
      reportingValue
    ].style.cssText = "display: block;";
  }

  // Меняем стили на "switching__top-input".
  // Снимаем со всех topInput класс-модификатор "_choosed"
  // Добавляем класс-модификатор "_choosed" выбранному topInput
  function changeStyleTopInput(event) {
    for (let i = 0; i < numberButtons; i++) {
      topBottoms.children[i].classList.remove("switching__top-button_choosed");
    }

    topBottoms.children[`${numberButtons - 1 - reportingValue}`].classList.add(
      "switching__top-button_choosed"
    );
  }

  // Меняем стили на "switching__bottom-button".
  // Снимаем со всех bottomInput класс-модификатор "_choosed"
  // Добавляем класс-модификатор "_choosed" выбранному bottomInput
  function changeStyleBottomInput(event) {
    for (let i = 0; i < numberButtons; i++) {
      bottomButtons.children[i].classList.remove(
        "switching__bottom-button_choosed"
      );
    }

    bottomButtons.children[
      `${numberButtons - 1 - reportingValue}`
    ].classList.add("switching__bottom-button_choosed");
  }

  // Меняем текст (номер года) в "switching__inner-elem"
  const innerElem = document
    .querySelector(".reporting")
    .querySelector(".switching__inner-elem");

  const duplicateInnerElem = document
    .querySelector(".reporting")
    .querySelector(".switching__duplicate-inner-text");

  function changeTextInnerElem() {
    switch (reportingValue) {
      case "0":
        innerElem.innerHTML = "2015";
        duplicateInnerElem.innerHTML = "2015";

        break;

      case "1":
        innerElem.innerHTML = "2016";
        duplicateInnerElem.innerHTML = "2016";

        break;

      case "2":
        innerElem.innerHTML = "2017";
        duplicateInnerElem.innerHTML = "2017";

        break;
      case "3":
        innerElem.innerHTML = "2018";
        duplicateInnerElem.innerHTML = "2018";

        break;
      case "4":
        innerElem.innerHTML = "2019";
        duplicateInnerElem.innerHTML = "2019";

        break;
      case "5":
        innerElem.innerHTML = "2020";
        duplicateInnerElem.innerHTML = "2020";

        break;
      case "6":
        innerElem.innerHTML = "2021";
        duplicateInnerElem.innerHTML = "2021";

        break;
    }
  }

  // clicableElement(event.target) = ".switching__top-input".
  // Обработчик висит на topBottoms = ".switching__scrollable-block"
  function onClickTopInput(event) {
    if (!event.target.classList.contains("switching__top-input")) return;

    getReportingValue(event);
    hideHidingBlock();
    hideBlueLine();
    changeStyleTopInput(event);
    changeStyleBottomInput(event);
    changeStyleCurrentBlock();
    changeStyleVisibleBlock();
    setTimeout(() => changeTextInnerElem(), 100);
    // Меняем background у reportingBlock
    changeBackgroundReportingBlock();
    // меняем позиционирование HidingBlock на fixed
    // qChange();
    q++;
    setTimeout(() => changePositionHidingBlock(), 500);
  }
  topBottoms.addEventListener("click", onClickTopInput);

  // clicableElement(event.target) = ".switching__bottom-input".
  // Обработчик висит на bottomButtons = ".switching__list-bottom-buttons"
  function onClickBottomInput(event) {
    if (!event.target.classList.contains("switching__bottom-input")) return;

    getReportingValue(event);
    changeStyleTopInput(event);
    changeStyleBottomInput(event);
    changeStyleCurrentBlock();
    setTimeout(() => changeTextInnerElem(), 100);
  }

  bottomButtons.addEventListener("click", onClickBottomInput);
  //
})();
