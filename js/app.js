const iconoMenu = document.querySelector(".hero__menu-icon");
const menu = document.querySelector(".hero__links");

iconoMenu.addEventListener("Click", () => {
  menu.classList.toggle("menu-toggle");
});

console.log("funciono otra");
