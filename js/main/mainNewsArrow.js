(function () {
  let leftArrow = document
    .querySelector(".news-header")
    .querySelector(".news-header__left-arrow");
  console.log(leftArrow);

  let rightArrow = document
    .querySelector(".news-header")
    .querySelector(".news-header__right-arrow");
  console.log(rightArrow);

  let scrollableElement = document.querySelector(".news");

  // Определяем ширину экрана гаджета screenWidthGadget
  let screenWidthGadget = document.documentElement.clientWidth;

  // в зависимости от неё вычисляем значение шага скроллинга scrollingStep
  //  при кликах на leftArrow  и rightArrow

  function getScrollingStep() {
    if (screenWidthGadget < 576) return 0;
    else if (screenWidthGadget < 1024) return 480;
    else return 500;
  }
  let scrollingStep = getScrollingStep();

  leftArrow.onclick = function () {
    let x = -`${scrollingStep}`;
    // обязательно указывать обе координаты, иначе - не работает.
    // Метод element.scrollBy(x, y) работает без единиц измерения
    let y = -`${scrollingStep}`;
    scrollableElement.scrollBy({
      top: x,
      left: y,
      behavior: "smooth", // плавное поведение(прокрутка)
    });
  };

  rightArrow.onclick = function () {
    let x = `${scrollingStep}`;
    // обязательно указывать обе координаты, иначе - не работает
    let y = `${scrollingStep}`;
    scrollableElement.scrollBy({
      top: x,
      left: y,
      behavior: "smooth", // плавное поведение(прокрутка)
    });
  };

  // простая формула, когда задан один шаг скроллинга
  // arrowLeft.onclick = function () {
  //   let x = -500; // обязательно указывать обе координаты, иначе - не работает
  //   let y = -500; // без едениц измерения. Метод element.scrollBy(x, y)
  //   принимает цифры и работает в пикселях

  //   scrolling.scrollBy({
  //     top: x,
  //     left: y,
  //     behavior: "smooth", // плавное поведение(прокрутка)
  //   });
  // };

  // arrowRight.onclick = function () {
  //   let x = 500; // обязательно указывать обе координаты, иначе - не работает
  //   let y = 500;

  //   scrolling.scrollBy({
  //     top: x,
  //     left: y,
  //     behavior: "smooth", // плавное поведение(прокрутка)
  //   });
  // };
})();
