const iconoMenu = document.querySelector(".menu-bar");
const menu = document.querySelector(".hero__links");

iconoMenu.addEventListener("click", () => {
  menu.classList.toggle("menu-toggle");
 });
