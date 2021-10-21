(function () {
  let variantValue = "1";

  const parameterSwitch = document
    .querySelector(".structure__parameter-switch") // меняем класс в разных секциях
    .querySelector(".param-switch");

  const variantFirst = document
    .querySelector(".structure__parameter-switch") // меняем класс в разных секциях
    .querySelector(".param-switch")
    .querySelectorAll(".param-switch__label")[0];

  const variantLast = document
    .querySelector(".structure__parameter-switch") // меняем класс в разных секциях
    .querySelector(".param-switch")
    .querySelectorAll(".param-switch__label")[1];

  function onChangeParameterSwitch(event) {
    let value = event.target.value;
    variantValue = value;

    switch (variantValue) {
      case "1":
        variantFirst.classList.add("param-switch__label_chosen");
        variantLast.classList.remove("param-switch__label_chosen");

        break;

      case "2":
        variantFirst.classList.remove("param-switch__label_chosen");
        variantLast.classList.add("param-switch__label_chosen");
        break;
    }
  }

  parameterSwitch.addEventListener("change", onChangeParameterSwitch);
  //
})();
