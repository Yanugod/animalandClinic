const iconoMenu = document.querySelector(".hero__menu-icon");
const menu = document.querySelector(".hero__links");

iconoMenu.addEventListener("click", () => {
  menu.classList.toggle("menu-toggle");
});
