(function () {
  const selectCompany = document
    .querySelector(".tax-preferences")
    .querySelectorAll(".tax-preferences__select")[0];

  const selectWorkers = document
    .querySelector(".tax-preferences")
    .querySelectorAll(".tax-preferences__select")[1];

  const iconCompanyColored = selectCompany.children[0].children[0];
  const iconCompanyDark = selectCompany.children[0].children[1];

  const iconUsersColored = selectWorkers.children[0].children[0];
  const iconUsersDark = selectWorkers.children[0].children[1];

  const companyTitle = selectCompany.children[1];
  const workersTitle = selectWorkers.children[1];

  const preferencesCompany = document
    .querySelector(".tax-preferences")
    .querySelector(".tax-preferences__company");

  const preferencesWorkers = document
    .querySelector(".tax-preferences")
    .querySelector(".tax-preferences__workers");

  function selectCompanyActived() {
    selectCompany.classList.add("tax-preferences__select_actived");
    iconCompanyColored.classList.add("tax-preferences__image_actived");
    companyTitle.classList.add("tax-preferences__title_actived");

    selectWorkers.classList.remove("tax-preferences__select_actived");
    iconUsersColored.classList.remove("tax-preferences__image_actived");
    workersTitle.classList.remove("tax-preferences__title_actived");
  }

  function onClickSelectCompany() {
    iconCompanyColored.style.cssText = "display: block";
    iconCompanyDark.style.cssText = "display: none";
    iconUsersColored.style.cssText = "display: none";
    iconUsersDark.style.cssText = "display: block";
    preferencesCompany.style.cssText = "display: block";
    preferencesWorkers.style.cssText = "display: none";
    selectCompanyActived();
  }

  selectCompany.addEventListener("click", onClickSelectCompany);

  function selectWorkersAcived() {
    selectCompany.classList.remove("tax-preferences__select_actived");
    iconCompanyColored.classList.remove("tax-preferences__image_actived");
    companyTitle.classList.remove("tax-preferences__title_actived");

    selectWorkers.classList.add("tax-preferences__select_actived");
    iconUsersColored.classList.add("tax-preferences__image_actived");
    workersTitle.classList.add("tax-preferences__title_actived");
  }

  function onClickSelectWorkers() {
    iconCompanyColored.style.cssText = "display: none";
    iconCompanyDark.style.cssText = "display: block";
    iconUsersColored.style.cssText = "display: block";
    iconUsersDark.style.cssText = "display: none";
    preferencesCompany.style.cssText = "display: none";
    preferencesWorkers.style.cssText = "display: block";
    selectWorkersAcived();
  }

  selectWorkers.addEventListener("click", onClickSelectWorkers);
  //
})();
