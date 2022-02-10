const d = document;
const w = window;
const $btn = d.querySelector(".btn-hamburger");
const $nav = d.querySelector("nav");

const removeMenu = () => {
  $nav.classList.remove("isActive");
  $btn.children[0].setAttribute("src", "./assets/images/icon-hamburger.svg");
};

const addMenu = () => {
  $nav.classList.add("isActive");
  $btn.children[0].setAttribute("src", "./assets/images/icon-close.svg");
};

const listining = (eventName) => w.addEventListener(eventName, removeMenu);

listining("scroll");
listining("resize");

d.addEventListener("click", (e) => {
  e.target.matches(`.${$btn.className}`) ||
  e.target.matches(`.${$btn.className} *`)
    ? $nav.classList.contains("isActive")
      ? removeMenu()
      : addMenu()
    : removeMenu();
});
