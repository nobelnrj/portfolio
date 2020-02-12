let themeBtn = document.querySelector(".theme-btn");
let body = document.querySelector("body");

themeBtn.addEventListener("click", toggleTheme);

function toggleTheme() {
  body.classList.toggle("theme-dark");
  if (body.classList.contains("theme-dark")) {
    document.cookie = "darkMode = true";
  } else {
    document.cookie = "darkMode = false";
  }
}

document.addEventListener("DOMContentLoaded", function() {
  console.log("loaded");
  if (
    document.cookie.split(";").filter(item => item.includes("darkMode=true"))
      .length
  ) {
    document.querySelector("body").classList.add("theme-dark");
    toogleBtn.classList.add("on");
  } else if (
    document.cookie.split(";").filter(item => item.includes("darkMode=false"))
      .length
  ) {
    document.querySelector("body").classList.remove("theme-dark");
    toogleBtn.classList.remove("on");
  }
});
