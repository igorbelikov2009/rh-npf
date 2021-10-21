(function () {
  const barNav = document
    .querySelector(".management")
    .querySelector(".management__bar-nav");
  const managementBLock = document.querySelector(".management");

  function changeStyleBarNav() {
    let coordsY = managementBLock.getBoundingClientRect().top;

    if (coordsY > 0) {
      barNav.style.cssText = "position: absolute;";
    }

    if (coordsY <= 0) {
      barNav.style.cssText = "position: fixed;";
    }
  }
  window.addEventListener("scroll", changeStyleBarNav);
  window.addEventListener("load", changeStyleBarNav);

  const bloc01 = document.querySelector(".management__content").children[0];
  const bloc02 = document.querySelectorAll(".management__department")[0];
  const bloc03 = document.querySelectorAll(".management__department")[1];
  const bloc04 = document.querySelectorAll(".management__department")[2];
  const bloc05 = document.querySelectorAll(".management__department")[3];
  const bloc06 = document.querySelectorAll(".management__department")[4];
  const bloc07 = document.querySelectorAll(".management__department")[5];

  let top1, top2, top3, top4, top5, top6, top7;
  let bottom1, bottom2, bottom3, bottom4, bottom5, bottom6, bottom7;
  let d1, d2, d3, d4, d5, d6, d7;

  top1 = bloc01.getBoundingClientRect().top;
  top2 = bloc02.getBoundingClientRect().top;
  top3 = bloc03.getBoundingClientRect().top;
  top4 = bloc04.getBoundingClientRect().top;
  top5 = bloc05.getBoundingClientRect().top;
  top6 = bloc06.getBoundingClientRect().top;
  top7 = bloc07.getBoundingClientRect().top;

  bottom1 = bloc01.getBoundingClientRect().bottom;
  bottom2 = bloc02.getBoundingClientRect().bottom;
  bottom3 = bloc03.getBoundingClientRect().bottom;
  bottom4 = bloc04.getBoundingClientRect().bottom;
  bottom5 = bloc05.getBoundingClientRect().bottom;
  bottom6 = bloc06.getBoundingClientRect().bottom;
  bottom7 = bloc07.getBoundingClientRect().bottom;

  d1 = bottom1 - top1;
  d2 = bottom2 - top2;
  d3 = bottom3 - top3;
  d4 = bottom4 - top4;
  d5 = bottom5 - top5;
  d6 = bottom6 - top6;
  d7 = bottom7 - top7;

  const barIcon = document
    .querySelector(".management")
    .querySelector(".management__bar-icon");

  let screenSize = document.documentElement.clientWidth;

  // management__main

  function changeStyleBarICon() {
    if (screenSize < 944) return;

    if (pageYOffset >= 528 && pageYOffset < 528 + d1) {
      barIcon.style.cssText = "top: 0px;";
    } else if (pageYOffset >= 528 + d1 && pageYOffset < 528 + d1 + d2) {
      barIcon.style.cssText = "top: 48px;";
    } else if (
      pageYOffset >= 528 + d1 + d2 &&
      pageYOffset < 528 + d1 + d2 + d3
    ) {
      barIcon.style.cssText = "top: 96px;";
    } else if (
      pageYOffset >= 528 + d1 + d2 + d3 &&
      pageYOffset < 528 + d1 + d2 + d3 + d4
    ) {
      barIcon.style.cssText = "top: 144px;";
    } else if (
      pageYOffset >= 528 + d1 + d2 + d3 + d4 &&
      pageYOffset < 528 + d1 + d2 + d3 + d4 + d5
    ) {
      barIcon.style.cssText = "top: 192px;";
    } else if (
      pageYOffset >= 528 + d1 + d2 + d3 + d4 + d5 &&
      pageYOffset < 528 + d1 + d2 + d3 + d4 + d5 + d6
    ) {
      barIcon.style.cssText = "top: 240px;";
    } else if (
      pageYOffset >= 528 + d1 + d2 + d3 + d4 + d5 + d6 &&
      pageYOffset < 528 + d1 + d2 + d3 + d4 + d5 + d6 + d7
    ) {
      barIcon.style.cssText = "top: 288px;";
    }
  }

  window.addEventListener("scroll", changeStyleBarICon);
  window.addEventListener("load", changeStyleBarICon);
})();
