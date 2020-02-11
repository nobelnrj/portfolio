let logo = document.querySelectorAll(".name-logo>span");
let heroName = document.querySelectorAll(".section-heading>span");

for (let j = 0; j < logo.length; j++) {
  logo[j].addEventListener("mouseover", function() {
    heroName[j].classList.add("highlight");
  });
  logo[j].addEventListener("mouseout", function() {
    heroName[j].classList.remove("highlight");
  });
}
