var toggle = document.querySelector("#toggle");
var body = document.querySelector("body");
var close = document.querySelector("#close");

toggle.addEventListener("click", function (e) {
  e.preventDefault();
  body.classList.toggle("with--sidebar");
});

close.addEventListener("click", function () {
  body.classList.remove("with--sidebar");
});
