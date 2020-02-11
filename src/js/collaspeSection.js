let collapseSection = document.querySelectorAll(".collapsible-container");
let toggleBtn = document.querySelectorAll(".toggle-btn");
for (let i = 0; i < toggleBtn.length; i++) {
  toggleBtn[i].addEventListener("click", function() {
    let opened = document.querySelector(".expanded");
    if (opened != null && opened != collapseSection[i]) {
      opened.classList.remove("expanded");
    }
    collapseSection[i].classList.toggle("expanded");
  });
}
