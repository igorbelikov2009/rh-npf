(function () {
  let labelValue = "1";

  const paramSwitch = document
    .querySelector(".notifics") // меняем класс в разных секциях
    .querySelector(".triple-switch");

  const labelContainer = document
    .querySelector(".notifics")
    .querySelector(".triple-switch__label-container");

  const labelFirst = labelContainer.children[0];
  const labelCenter = labelContainer.children[1];
  const labelLast = labelContainer.children[2];
  const numberLabel = Number(labelContainer.children.length);

  const mainBlock = document.querySelector(".notifics__content");
  const topBlock = mainBlock.children[0];
  const centerBlock = mainBlock.children[1];
  const bottomBlock = mainBlock.children[2];

  const numberBlock = Number(mainBlock.children.length);

  function changeBlockVisibility(event) {
    let value = event.target.value;
    labelValue = value;

    for (let i = 0; i < numberLabel; i++) {
      labelContainer.children[i].classList.remove(
        "triple-switch__label_chosen"
      );
    }

    labelContainer.children[labelValue - 1].classList.add(
      "triple-switch__label_chosen"
    );
  }

  function onChangeParamSwitch(event) {
    let value = event.target.value;
    labelValue = value;

    for (let i = 0; i < numberBlock; i++) {
      mainBlock.children[i].classList.add("notifics__content-not-visible");
      mainBlock.children[i].classList.remove("notifics__content-visible");
    }

    mainBlock.children[labelValue - 1].classList.remove(
      "notifics__content-not-visible"
    );
    mainBlock.children[labelValue - 1].classList.add(
      "notifics__content-visible"
    );

    changeBlockVisibility(event);
  }

  paramSwitch.addEventListener("change", onChangeParamSwitch);
  //
})();
