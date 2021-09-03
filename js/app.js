var toggle = document.querySelector("#toggle");
var body = document.querySelector("body");
var close = document.querySelector("#close");
var li = document.querySelectorAll("#mobile li");

toggle.addEventListener("click", function (e) {
  e.preventDefault();
  body.classList.toggle("with--sidebar");
});

close.addEventListener("click", function () {
  body.classList.remove("with--sidebar");
});

for (let i = 0; i < li.length; i++) {
  const element = li[i];
  element.addEventListener("click", function () {
    body.classList.remove("with--sidebar");
  });
}

//SLIDE UP

document.addEventListener("DOMContentLoaded", function () {
  window.onscroll = function (ev) {
    document.getElementById("slideUp").className =
      window.pageYOffset > 100 ? "cVisible" : "cInvisible";
  };
});

//ANIM SCROLL COMPETENCES

var w = window.innerWidth;
var cardFrontend = document.querySelector(".frontendFull");
var cardBackend = document.querySelector(".backendFull");
var cardCMS = document.querySelector(".CMSFull");
var cardWebdesign = document.querySelector(".webdesignFull");
var cardEnvironnement = document.querySelector(".environnementFull");

if (w >= 1280 && w <= 1600) {
  cardFrontend.style.opacity = 0;
  cardBackend.style.opacity = 0;
  cardCMS.style.opacity = 0;
  cardWebdesign.style.opacity = 0;
  cardEnvironnement.style.opacity = 0;

  window.addEventListener("scroll", function (e) {
    let sy = window.scrollY;
    console.log(sy);

    if (sy >= 1900) {
      cardFrontend.style.opacity = 1;
      cardFrontend.classList.add("animate__animated", "animate__fadeInLeft");
    }
    if (sy >= 2400) {
      cardBackend.style.opacity = 1;
      cardBackend.classList.add("animate__animated", "animate__fadeInRight");
    }
    if (sy >= 2900) {
      cardCMS.style.opacity = 1;
      cardCMS.classList.add("animate__animated", "animate__fadeInLeft");
    }

    if (sy >= 3400) {
      cardWebdesign.style.opacity = 1;
      cardWebdesign.classList.add("animate__animated", "animate__fadeInRight");
    }

    if (sy >= 3800) {
      cardEnvironnement.style.opacity = 1;
      cardEnvironnement.classList.add(
        "animate__animated",
        "animate__fadeInLeft"
      );
    }
  });
}
if (w >= 1920) {
  cardFrontend.style.opacity = 0;
  cardBackend.style.opacity = 0;
  cardCMS.style.opacity = 0;
  cardWebdesign.style.opacity = 0;
  cardEnvironnement.style.opacity = 0;

  window.addEventListener("scroll", function (e) {
    let sy = window.scrollY;
    console.log(sy);

    if (sy >= 1588) {
      cardFrontend.style.opacity = 1;
      cardFrontend.classList.add("animate__animated", "animate__fadeInLeft");
    }
    if (sy >= 2088) {
      cardBackend.style.opacity = 1;
      cardBackend.classList.add("animate__animated", "animate__fadeInRight");
    }
    if (sy >= 2588) {
      cardCMS.style.opacity = 1;
      cardCMS.classList.add("animate__animated", "animate__fadeInLeft");
    }

    if (sy >= 2988) {
      cardWebdesign.style.opacity = 1;
      cardWebdesign.classList.add("animate__animated", "animate__fadeInRight");
    }

    if (sy >= 3488) {
      cardEnvironnement.style.opacity = 1;
      cardEnvironnement.classList.add(
        "animate__animated",
        "animate__fadeInLeft"
      );
    }
  });
}

// ANIM SCROLL PARCOURS

var axe = document.querySelector(".parcours h2");
var date1 = document.querySelector(".date");
var diplome = document.querySelector(".card_diplomeweb");
var date2 = document.querySelector(".date_2021");
var stage = document.querySelector(".card_stage");
var date3 = document.querySelector(".date_2020");
var formation = document.querySelector(".card_formation");
var date4 = document.querySelector(".date_2011");
var metier = document.querySelector(".card_metier");
var diplomeMetier = document.querySelector(".card_diplome_metier");
var diplomeGea = document.querySelector(".card_diplome_gea");
var date5 = document.querySelector(".date_2009");
var date6 = document.querySelector(".date_2008");

if (w >= 1600 && w <= 1920) {
  axe.style.display = "none";
  axe.style.opacity = 0;
  date1.style.opacity = 0;
  diplome.style.opacity = 0;
  date2.style.opacity = 0;
  stage.style.opacity = 0;
  date3.style.opacity = 0;
  formation.style.opacity = 0;
  date4.style.opacity = 0;
  date5.style.opacity = 0;
  date6.style.opacity = 0;
  metier.style.opacity = 0;
  diplomeMetier.style.opacity = 0;
  diplomeGea.style.opacity = 0;

  window.addEventListener("scroll", function (e) {
    let sy = window.scrollY;

    if (sy >= 4800) {
      axe.style.display = "block";
      axe.style.opacity = 1;
      axe.style.transitionDuration = "4s";
    }

    if (sy >= 4800) {
      date1.style.opacity = 1;
      date1.classList.add("animate__animated", "animate__fadeIn");
      diplome.classList.add("animate__animated", "animate__fadeIn");
    }
    if (sy >= 5300) {
      date2.style.opacity = 1;
      date2.classList.add("animate__animated", "animate__fadeIn");
      stage.classList.add("animate__animated", "animate__fadeIn");
    }
    if (sy >= 5800) {
      date3.style.opacity = 1;
      date3.classList.add("animate__animated", "animate__fadeIn");
      formation.classList.add("animate__animated", "animate__fadeIn");
    }
    if (sy >= 6300) {
      date4.style.opacity = 1;
      date4.classList.add("animate__animated", "animate__fadeIn");
      metier.classList.add("animate__animated", "animate__fadeIn");
    }
    if (sy >= 6600) {
      date5.style.opacity = 1;
      date5.classList.add("animate__animated", "animate__fadeIn");
      diplomeMetier.classList.add("animate__animated", "animate__fadeIn");
    }
    if (sy >= 6930) {
      date6.style.opacity = 1;
      date6.classList.add("animate__animated", "animate__fadeIn");
      diplomeGea.classList.add("animate__animated", "animate__fadeIn");
    }
  });
}
