{
  let hidingBlock;
  let plus;
  let minus;

  const mainKeeperHandler = document.querySelector(".main-keeper-handler");

  function onClickExpansionBlock(event) {
    let clickableElement = event.target;
    let startingElement = clickableElement.closest(".expanding");
    if (!startingElement) return;

    plus = startingElement.children[0].children[1].children[0];
    minus = startingElement.children[0].children[1].children[1];
    hidingBlock = startingElement.children[1];

    changeClassPlus();
    changeClassMinus();
    changeVisibilityHidingBlock();
    changeCoordsYHidingBlock();
  }

  mainKeeperHandler.addEventListener("click", onClickExpansionBlock);

  function changeClassPlus() {
    plus.classList.toggle("expanding__plus_show-hiding-block");
    plus.classList.toggle("expanding__plus_hide-hiding-block");
  }

  function changeClassMinus() {
    minus.classList.toggle("expanding__minus_show-hiding-block");
    minus.classList.toggle("expanding__minus_hide-hiding-block");
  }

  function changeVisibilityHidingBlock() {
    setTimeout(
      () => hidingBlock.classList.toggle("expanding__hiding-block_hidden"),
      300
    );
    setTimeout(
      () => hidingBlock.classList.toggle("expanding__hiding-block_visible"),
      300
    );
  }

  function changeCoordsYHidingBlock() {
    setTimeout(
      () =>
        (hidingBlock.style.cssText =
          "transform: translateY(18px); transition: 300mc;"),
      300
    );

    setTimeout(
      () =>
        (hidingBlock.style.cssText =
          "transform: translateY(0px); transition: 300mc;"),
      600
    );
  }

  //
}
