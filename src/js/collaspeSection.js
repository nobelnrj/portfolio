let collapseSection = document.querySelectorAll(".collapsible-container");
let toggleBtn = document.querySelectorAll(".toggle-btn");
let heading = document.querySelectorAll(".collapsible-container>.heading");

for (let i = 0; i < toggleBtn.length; i++) {
  toggleBtn[i].addEventListener("click", function() {
    expandContent(i);
  });
}

for (let i = 0; i < heading.length; i++) {
  heading[i].addEventListener("click", function() {
    expandContent(i);
  });
}

function expandContent(i) {
  let opened = document.querySelector(".expanded");
  if (opened != null && opened != collapseSection[i]) {
    opened.classList.remove("expanded");
  }
  collapseSection[i].classList.toggle("expanded");
}
