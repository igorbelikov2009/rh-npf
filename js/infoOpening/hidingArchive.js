(function () {
  const hidingArchive = document.querySelector(".hiding-archive");

  function chahgeVisibilityHidingArchive() {
    if (!hidingArchive.classList.contains("hiding-archive__visible")) {
      hidingArchive.classList.add("hiding-archive__visible");
    } else {
      setTimeout(() => {
        hidingArchive.classList.remove("hiding-archive__visible");
      }, 500);
    }
  }

  const archiveBackground = hidingArchive.children[0];

  function changeArchiveBackground() {
    if (
      archiveBackground.classList.contains("hiding-archive__background-clear")
    ) {
      archiveBackground.classList.remove("hiding-archive__background-clear");
      archiveBackground.classList.add("hiding-archive__background-blur");
    } else {
      archiveBackground.classList.add("hiding-archive__background-clear");
      archiveBackground.classList.remove("hiding-archive__background-blur");
    }
  }

  const archiveArchive = document.querySelector(".hiding-archive__archive");

  function changeLeftArchiveArchive() {
    if (archiveArchive.classList.contains("hiding-archive__archive_left-100")) {
      setTimeout(() => {
        archiveArchive.classList.remove("hiding-archive__archive_left-100");
        archiveArchive.classList.add("hiding-archive__archive_left-50");
      }, 0);
    } else {
      setTimeout(() => {
        archiveArchive.classList.add("hiding-archive__archive_left-100");
        archiveArchive.classList.remove("hiding-archive__archive_left-50");
      }, 0);
    }
  }

  const topBlock = document.querySelector(".hiding-archive__top-block");

  function changeLeftTopBlock() {
    if (topBlock.classList.contains("hiding-archive__top-block_left-100")) {
      setTimeout(() => {
        topBlock.classList.remove("hiding-archive__top-block_left-100");
        topBlock.classList.add("hiding-archive__top-block_left-50");
      }, 0);
    } else {
      setTimeout(() => {
        topBlock.classList.add("hiding-archive__top-block_left-100");
        topBlock.classList.remove("hiding-archive__top-block_left-50");
      }, 0);
    }
  }

  const mainBody = document.querySelector(".main-body");

  function stopScrolling() {
    if (!mainBody.classList.contains("stop-scrolling")) {
      mainBody.classList.add("stop-scrolling");
    } else {
      mainBody.classList.remove("stop-scrolling");
    }
  }

  function onClickArchiveBackground(event) {
    chahgeVisibilityHidingArchive();
    changeArchiveBackground();
    stopScrolling();
    changeLeftArchiveArchive();
    changeLeftTopBlock();
  }
  archiveBackground.addEventListener("click", onClickArchiveBackground);

  const crossSwitch = document
    .querySelector(".hiding-archive")
    .querySelector(".hiding-archive__icon-cross");

  let onClickCrossSwitch = onClickArchiveBackground;

  crossSwitch.addEventListener("click", onClickCrossSwitch);

  const buttonAktsionerov = mainBody.querySelectorAll(".button-to-archive")[0];
  const buttonPension = mainBody.querySelectorAll(".button-to-archive")[1];
  const buttonReporting = mainBody.querySelectorAll(".button-to-archive")[2];
  const buttonAsset = mainBody.querySelectorAll(".button-to-archive")[3];

  let arrButtons = Array.prototype.slice.call(
    mainBody.querySelectorAll(".button-to-archive")
  );

  let indexElem = 0; // indexClickableButton

  function getIndexElem(event) {
    indexElem = arrButtons.indexOf(event.target);
  }

  const archiveContent = document.querySelector(".hiding-archive__content");
  const archiveAktsionerov = archiveContent.children[0];
  const archivePension = archiveContent.children[1];
  const archiveReporting = archiveContent.children[2];
  const archiveAsset = archiveContent.children[3];
  const numberArchive = Number(archiveContent.children.length);

  function chahgeVisibilityArchiveContentChildren() {
    for (let i = 0; i < numberArchive; i++) {
      archiveContent.children[i].style.cssText = "display: none;";
    }

    archiveContent.children[`${indexElem}`].style.cssText = "display: block;";
  }

  function onClickButton(event) {
    chahgeVisibilityHidingArchive();
    changeArchiveBackground();
    stopScrolling();
    changeLeftArchiveArchive();
    changeLeftTopBlock();

    getIndexElem(event);
    chahgeVisibilityArchiveContentChildren();
  }

  buttonAktsionerov.addEventListener("click", onClickButton);
  buttonPension.addEventListener("click", onClickButton);
  buttonReporting.addEventListener("click", onClickButton);
  buttonAsset.addEventListener("click", onClickButton);

  /*
    // window code == "Escape"
  function onKeydownEscapeWindow(event) {
    if (event.code == "Escape") {
      event.preventDefault();

      menuMobil.classList.remove("menu-mobil__right-20");
    }
  }

  window.addEventListener("keydown", onKeydownEscapeWindow);
  */

  //
})();
