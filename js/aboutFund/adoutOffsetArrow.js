(function () {
  const arrowLeft = document.querySelector(".offset-arrows__left-arrow");
  const arrowRight = document.querySelector(".offset-arrows__right-arrow");
  const column = document.querySelectorAll(".history-scrolling__column");
  const scrollableElement = document.querySelector(
    ".history-scrolling__hidden-block"
  );

  let screenWidth = document.documentElement.clientWidth;
  let widthColumn = column[0].offsetWidth;
  let amountChildren = scrollableElement.children.length;
  let overallWidth = widthColumn * amountChildren;

  scrollWidth = "";
  let right = 0;
  let q = 0;

  // get value q
  function getValueQclickArrowLeft() {
    if (q !== 0) q--;
    if (q < 0) q = 0;
  }

  function getValueQclickArrowRight() {
    if (screenWidth < 855) if (q < amountChildren - 1) q++;
    if (screenWidth > 855) if (q < amountChildren - 2) q++;
  }

  // scrolling
  function scrollToTheLeft() {
    scrollWidth = q * widthColumn;
    right = scrollWidth;

    scrollableElement.style.cssText = `right: ${right}px`;
  }

  function scrollToTheRight() {
    scrollWidth = q * widthColumn;
    right = scrollWidth;

    if (screenWidth < 855) {
      if (scrollWidth >= overallWidth) {
        right = overallWidth - widthColumn;
      }
    }

    if (screenWidth > 855) {
      if (scrollWidth >= overallWidth - widthColumn) {
        right = overallWidth - 2 * widthColumn;
      }
    }

    scrollableElement.style.cssText = `right: ${right}px`;
  }

  function onClickArrowLeft() {
    getValueQclickArrowLeft();
    scrollToTheLeft();
    changeColorArrowOnClickArrowLeft();
    changeTransparencyColumnArrowLeft();
  }
  arrowLeft.addEventListener("click", onClickArrowLeft);

  function onClickArrowRight() {
    getValueQclickArrowRight();
    scrollToTheRight();
    changeColorArrowOnClickArrowRight();
    changeTransparencyColumnArrowRight();
  }
  arrowRight.addEventListener("click", onClickArrowRight);

  // меняем цвет у стрелок и свойства курсора на "cursor: default;"
  const arrowLeftDark = arrowLeft.children[1];
  const arrowRightDark = arrowRight.children[1];

  function onLoadColorArrowLeft() {
    if (scrollWidth == 0) {
      arrowLeft.classList.add("offset-arrows__left-arrow_no-cursor");
      arrowLeftDark.classList.add("offset-arrows__opacity-04");
    }
  }
  window.addEventListener("load", onLoadColorArrowLeft);

  function changeColorArrowOnClickArrowLeft() {
    arrowRight.classList.remove("offset-arrows__right-arrow_no-cursor");
    arrowRightDark.classList.remove("offset-arrows__opacity-04");

    if (right == 0) {
      arrowLeft.classList.add("offset-arrows__left-arrow_no-cursor");
      arrowLeftDark.classList.add("offset-arrows__opacity-04");
    }
  }

  function changeColorArrowOnClickArrowRight() {
    arrowLeft.classList.remove("offset-arrows__left-arrow_no-cursor");
    arrowLeftDark.classList.remove("offset-arrows__opacity-04");

    if (screenWidth < 855) {
      if (right == overallWidth - widthColumn) {
        arrowRight.classList.add("offset-arrows__right-arrow_no-cursor");
        arrowRightDark.classList.add("offset-arrows__opacity-04");
      }
    } else if (screenWidth > 855) {
      if (right == overallWidth - 2 * widthColumn) {
        arrowRight.classList.add("offset-arrows__right-arrow_no-cursor");
        arrowRightDark.classList.add("offset-arrows__opacity-04");
      }
    }
  }

  /* в зависимости от ширины экрана screenWidth (< 855 или > 855 )
   определяем отутствие размытия элементов column[0] и column[1] во время загрузки window */

  function onLoadCheckForBlurElement() {
    if (screenWidth < 855) {
      column[0].classList.add("history-scrolling__column_clear");
    } else {
      column[0].classList.add("history-scrolling__column_clear");
      column[1].classList.add("history-scrolling__column_clear");
    }
  }
  window.addEventListener("load", onLoadCheckForBlurElement);

  //  меняем прозрачность у "history-scrolling__column"

  function changeTransparencyColumnArrowLeft() {
    if (scrollWidth < 0) return false;

    for (let i = 0; i < amountChildren; i++) {
      column[i].classList.remove("history-scrolling__column_clear");
    }

    if (screenWidth > 855) {
      column[q].classList.add("history-scrolling__column_clear");
      column[q + 1].classList.add("history-scrolling__column_clear");
    }

    if (screenWidth < 855) {
      column[q].classList.add("history-scrolling__column_clear");
    }
  }

  function changeTransparencyColumnArrowRight() {
    for (let i = 0; i < amountChildren; i++) {
      column[i].classList.remove("history-scrolling__column_clear");
    }

    if (screenWidth < 855) {
      if (scrollWidth <= overallWidth - widthColumn) {
        column[q].classList.add("history-scrolling__column_clear");
      }
    }

    if (screenWidth > 855) {
      if (scrollWidth < overallWidth - widthColumn) {
        column[q].classList.add("history-scrolling__column_clear");
        column[q + 1].classList.add("history-scrolling__column_clear");
      }
    }
  }

  //
})();
