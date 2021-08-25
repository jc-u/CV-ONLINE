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
