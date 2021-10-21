(function () {
  let labelValue = "1";

  const paramSwitch = document
    .querySelector(".spec-depository") // меняем класс в разных секциях
    .querySelector(".param-switch");

  const labelFirst = document
    .querySelector(".spec-depository") // меняем класс в разных секциях
    .querySelector(".param-switch")
    .querySelectorAll(".param-switch__label")[0];

  const labelLast = document
    .querySelector(".spec-depository") // меняем класс в разных секциях
    .querySelector(".param-switch")
    .querySelectorAll(".param-switch__label")[1];

  const topBlock = document.querySelector(".spec-depository__content")
    .children[0];

  const bottomBlock = document.querySelector(".spec-depository__content")
    .children[1];

  function changeBlockVisibility(event) {
    let value = event.target.value;
    labelValue = value;

    switch (labelValue) {
      case "1":
        topBlock.classList.add("spec-depository__content-visible");
        topBlock.classList.remove("spec-depository__content-not-visible");
        bottomBlock.classList.add("spec-depository__content-not-visible");
        bottomBlock.classList.remove("spec-depository__content-visible");

        break;

      case "2":
        topBlock.classList.remove("spec-depository__content-visible");
        topBlock.classList.add("spec-depository__content-not-visible");
        bottomBlock.classList.remove("spec-depository__content-not-visible");
        bottomBlock.classList.add("spec-depository__content-visible");

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
