(function () {
  let labelValue = "1";

  const paramSwitch = document
    .querySelector(".overall-info") // меняем класс в разных секциях
    .querySelector(".param-switch");

  const labelFirst = document
    .querySelector(".overall-info") // меняем класс в разных секциях
    .querySelector(".param-switch")
    .querySelectorAll(".param-switch__label")[0];

  const labelLast = document
    .querySelector(".overall-info") // меняем класс в разных секциях
    .querySelector(".param-switch")
    .querySelectorAll(".param-switch__label")[1];

  const topBlock = document.querySelector(".overall-info__content").children[0];

  const bottomBlock = document.querySelector(".overall-info__content")
    .children[1];

  function changeBlockVisibility(event) {
    let value = event.target.value;
    labelValue = value;

    switch (labelValue) {
      case "1":
        topBlock.classList.add("overall-info__content-visible");
        topBlock.classList.remove("overall-info__content-not-visible");
        bottomBlock.classList.add("overall-info__content-not-visible");
        bottomBlock.classList.remove("overall-info__content-visible");

        break;

      case "2":
        topBlock.classList.remove("overall-info__content-visible");
        topBlock.classList.add("overall-info__content-not-visible");
        bottomBlock.classList.remove("overall-info__content-not-visible");
        bottomBlock.classList.add("overall-info__content-visible");

        break;
    }
  }

  function onChangeParamSwitch(event) {
    let value = event.target.value;
    labelValue = value;

    switch (labelValue) {
      case "1":
        labelFirst.classList.add("param-switch__label_chosen");
        labelLast.classList.remove("param-switch__label_chosen");

        break;

      case "2":
        labelFirst.classList.remove("param-switch__label_chosen");
        labelLast.classList.add("param-switch__label_chosen");
        break;
    }

    changeBlockVisibility(event);
  }

  paramSwitch.addEventListener("change", onChangeParamSwitch);
  //
})();
