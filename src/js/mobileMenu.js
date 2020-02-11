let menuBtn = document.querySelector(".menu-btn");
let menuList = document.querySelector(".header-menu");
let links = document.querySelectorAll(".header-links>a");

menuBtn.addEventListener("click", toggleMenuList);

function toggleMenuList() {
  menuList.classList.toggle("show");
}

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", closeMenuList);
}

function closeMenuList() {
  menuList.classList.remove("show");
}
