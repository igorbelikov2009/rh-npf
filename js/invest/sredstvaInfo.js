{
  let table;
  let plus;
  let minus;

  function onClickExpansionBlock(clickableElement) {
    table = clickableElement.parentElement.lastElementChild;
    plus = clickableElement.children[1].children[0];
    minus = clickableElement.children[1].children[1];

    setTimeout(() => table.classList.toggle("table__not-hidden"), 300);
    setTimeout(() => table.classList.toggle("table__hidden"), 300);

    changeCoordsYTable();
    changeClassPlus();
    changeClassMinus();
  }

  function changeCoordsYTable() {
    if (table.classList.contains("table__hidden")) {
      setTimeout(
        () =>
          (table.style.cssText =
            "transform: translateY(18px); transition: 300mc;"),
        300
      );

      setTimeout(
        () =>
          (table.style.cssText =
            "transform: translateY(0px); transition: 300mc;"),
        600
      );
    }
  }

  function changeClassPlus() {
    plus.classList.toggle("sredstva-info__plus_show-table");
    plus.classList.toggle("sredstva-info__plus_hide-table");
  }

  function changeClassMinus() {
    minus.classList.toggle("sredstva-info__minus_show-table");
    minus.classList.toggle("sredstva-info__minus_hide-table");
  }
}

// обработчик на каждом элементе в HTML
