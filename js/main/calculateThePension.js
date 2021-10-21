(function () {
  let genderValue = "65";
  let ageValue = ""; // возраст
  let numberOfYears = ""; // срок инвестирования
  let firstInvestValue = ""; // первичный взнос
  let monthInvestValue = ""; // ежемесячный взнос
  let timePaymentsValue = ""; // срок выплат пенсии
  let pensionValue = ""; // размер выплаты пенсии

  let socialDeduction = false;
  //  firstInvestAccumValue = ""; //  первоначальные накопления
  //  monthInvestAccumValue = ""; // накопления ежемесячных взносов
  //  generalAccumValue = ""; // общие накопления

  let yearPersent = 0.05;

  const switchGender = document
    .querySelector(".calculator__sliders")
    .querySelector(".switch-gender");
  // console.log(switchGender);

  const manSwitch = document
    .querySelector(".calculator__sliders")
    .querySelector(".switch-gender__man");
  // console.log(manSwitch);

  const womanSwitch = document
    .querySelector(".calculator__sliders")
    .querySelector(".switch-gender__woman");
  // console.log(womanSwitch);

  const ageSlider = document
    .querySelector(".calculator__sliders")
    .querySelector(".age-slider");
  // console.log(ageSlider);

  const ageOutputInner = document
    .querySelector(".calculator__sliders")
    .querySelector(".slider-block__age-slider")
    .querySelector(".slider-block__output");
  // console.log(ageOutputInner);

  // delete  time-invest slider-block__time-invest-inner
  const numberOfYearsInner = document
    .querySelector(".slider-block__age-slider")
    .querySelector(".slider-block__time-invest-inner");
  // console.log(numberOfYearsInner);

  const firstInvestSlider = document
    .querySelector(".calculator__sliders")
    .querySelector(".pervonachalnyy-vznos");
  // console.log(firstInvestSlider);

  const firstInvestInner = document
    .querySelector(".calculator__sliders")
    .querySelector(".slider-block__pervonachalnyy-vznos")
    .querySelector(".slider-block__output");
  // console.log(firstInvestInner);

  const monthInvestSlider = document
    .querySelector(".calculator__sliders")
    .querySelector(".yezhemesyachnyy-vznos");
  // console.log(monthInvestSlider);

  const monthInvestInner = document
    .querySelector(".calculator__sliders")
    .querySelector(".slider-block__yezhemesyachnyy-vznos")
    .querySelector(".slider-block__output");
  // console.log(monthInvestInner);

  const timePaymentsSlider = document
    .querySelector(".calculator__sliders")
    .querySelector(".srok-vyplaty");
  // console.log(timePaymentsSlider);

  const timePaymentsInner = document
    .querySelector(".calculator__sliders")
    .querySelector(".slider-block__srok-vyplaty")
    .querySelector(".slider-block__output");
  // console.log(timePaymentsInner);

  const checkbox = document
    .querySelector(".calculator__box")
    .querySelector(".r-checkbox__switch");

  const generalAccumInner = document.querySelector(
    ".pension-info__output-sum-nakoplen"
  );
  // console.log(generalAccumInner);

  const pensionInner = document.querySelector(".pension-info__output-pension");
  // console.log(pensionInner);

  // onload
  function onLoadWindow(event) {
    genderValue = switchGender.children[0].children[0].getAttribute("value");
    // console.log("genderValue:" + genderValue);

    ageValue = ageSlider.getAttribute("value");
    // console.log("ageValue :" + ageValue);
    ageOutputInner.innerHTML = ageValue;

    numberOfYears = genderValue - ageValue;
    // console.log("numberOfYears:" + numberOfYears);
    numberOfYearsInner.innerHTML = `Срок инвестирования ${numberOfYears} (в годах)`;

    firstInvestValue = firstInvestSlider.getAttribute("value");
    // console.log("firstInvestValue:" + firstInvestValue);
    firstInvestInner.innerHTML = `${firstInvestValue} ₽.`;

    monthInvestValue = monthInvestSlider.getAttribute("value");
    // console.log("monthInvestValue:" + monthInvestValue);
    monthInvestInner.innerHTML = `${monthInvestValue} ₽.`;

    timePaymentsValue = timePaymentsSlider.getAttribute("value");
    // console.log("timePaymentsValue:" + timePaymentsValue);
    timePaymentsInner.innerHTML = timePaymentsValue;
  }

  // onLoadWindow(event);
  window.addEventListener("load", onLoadWindow);

  // onChangeSwitchGender
  function onChangeSwitchGender(event) {
    genderValue = switchGender.children[0].children[0].getAttribute("value");

    if (event.type == "change") {
      let value = event.target.value;
      genderValue = value;
    }

    changeStyleSwitchGender(genderValue);
    setValuesAttributesAgeSlider();
    countOnCalculator();
    // console.log("genderValue:" + genderValue);
  }

  function changeStyleSwitchGender() {
    switch (genderValue) {
      case "65":
        manSwitch.classList.remove("switch-gender__not-activated");
        manSwitch.classList.add("switch-gender__activated");
        womanSwitch.classList.remove("switch-gender__activated");
        womanSwitch.classList.add("switch-gender__not-activated");
        break;

      case "60":
        manSwitch.classList.remove("switch-gender__activated");
        manSwitch.classList.add("switch-gender__not-activated");
        womanSwitch.classList.remove("switch-gender__not-activated");
        womanSwitch.classList.add("switch-gender__activated");
        break;
    }
  }

  function setValuesAttributesAgeSlider() {
    switch (genderValue) {
      case "65":
        ageSlider.setAttribute("max", "65");
        ageSlider.setAttribute("value", "32.5");
        break;

      case "60":
        ageSlider.setAttribute("max", "60");
        ageSlider.setAttribute("value", "30");

        break;
    }
  }
  switchGender.addEventListener("change", onChangeSwitchGender);

  //   ageSlider
  function onInputAgeSlider(event) {
    const value = this.value;
    ageValue = Number(value);
    ageOutputInner.innerHTML = ageValue;

    countOnCalculator();
    // console.log("ageValue:" + ageValue);
  }
  function getNumberOfYears() {
    // console.log("genderValue:" + genderValue);
    numberOfYears = genderValue - ageValue;

    numberOfYearsInner.innerHTML = `Срок инвестирования ${numberOfYears} (в годах)`;

    // console.log("numberOfYears:" + numberOfYears);
  }
  ageSlider.addEventListener("input", onInputAgeSlider);

  //   firstInvestSlider
  function onInputFirstInvestSlider(event) {
    let value = this.value;
    firstInvestValue = Number(value);
    firstInvestInner.innerHTML = `${firstInvestValue} ₽.`;

    countOnCalculator();
    // console.log("firstInvestValue:" + firstInvestValue);
  }
  firstInvestSlider.addEventListener("input", onInputFirstInvestSlider);

  // monthInvestSlider
  function onInputMonthInvestSlider(event) {
    const value = this.value;
    monthInvestValue = Number(value);
    monthInvestInner.innerHTML = `${monthInvestValue} ₽.`;

    countOnCalculator();
    // console.log(" monthInvestValue:" + monthInvestValue);
  }
  monthInvestSlider.addEventListener("input", onInputMonthInvestSlider);

  // timePaymentsSlider
  function onInputTimePaymentsSlider(event) {
    const value = this.value;
    timePaymentsValue = Number(value);
    timePaymentsInner.innerHTML = timePaymentsValue;

    countOnCalculator();
    // console.log("timePaymentsValue:" + timePaymentsValue);
  }
  timePaymentsSlider.addEventListener("input", onInputTimePaymentsSlider);

  // checkbox
  function checkSocialDeductionValue() {
    if (checkbox.classList.contains("r-checkbox__switch_invisible")) {
      socialDeductionValue = false;
    } else if (checkbox.classList.contains("r-checkbox__switch_visible")) {
      socialDeductionValue = true;
    }
  }

  function onClickCheckbox() {
    checkbox.classList.toggle("r-checkbox__switch_invisible");
    checkbox.classList.toggle("r-checkbox__switch_visible");

    checkSocialDeductionValue();
  }
  checkbox.addEventListener("click", onClickCheckbox);

  function countOnCalculator(event) {
    getNumberOfYears();

    //
    // console.log("genderValue:" + genderValue);
    // console.log("ageValue:" + ageValue);
    // console.log("numberOfYears:" + numberOfYears);
    // console.log("firstInvestValue:" + firstInvestValue);
    // console.log("monthInvestValue:" + monthInvestValue);
    // console.log("timePaymentsValue:" + timePaymentsValue);
    // console.log("Ok");
    //
    let firstInvestAccumValue = 0;
    let monthInvestAccumValue = 0;
    let generalAccumValue = 0;
    // debugger;

    let generalPercent = 1 + yearPersent;
    const percentNumberOfYears = generalPercent ** numberOfYears;
    firstInvestAccumValue = firstInvestValue * percentNumberOfYears;
    firstInvestAccumValue = Math.round(firstInvestValue);

    // console.log("firstInvestAccumValue:" + firstInvestAccumValue); ///

    let numberOfMonths = numberOfYears * 12; // количество месяцев ежемесячных взносов
    // console.log("numberOfMonths:" + numberOfMonths);

    //  ставка за нескольк лет ((yearPersent * i) / 12 / 2)
    monthInvestAccumValue = 0;
    monthInvestAccumValue = Math.round(
      monthInvestValue * numberOfMonths +
        monthInvestValue *
          (numberOfMonths - 1) *
          ((yearPersent * numberOfMonths) / 24)
    );

    // console.log("monthInvestAccumValue:" + monthInvestAccumValue);

    generalAccumValue = 0;
    generalAccumValue = Math.round(
      firstInvestAccumValue + monthInvestAccumValue
    );

    generalAccumInner.innerHTML = `${generalAccumValue} ₽.`;
    // console.log("generalAccumValue:" + generalAccumValue);

    pensionValue = Math.round(generalAccumValue / timePaymentsValue / 12);
    pensionInner.innerHTML = `${pensionValue} ₽.`;
    // console.log("pensionValue:" + pensionValue);
    // console.log("finish");
  }
  window.addEventListener("load", countOnCalculator);

  // switchGender.addEventListener("change", countOnCalculator);
  // ageSlider.addEventListener("input", onInputAgeSlider);

  //*
})();
