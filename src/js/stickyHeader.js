var header = document.querySelector("header");

window.onscroll = function() {
  window.scrollY > 570
    ? header.classList.add("sticky")
    : header.classList.remove("sticky");
};
