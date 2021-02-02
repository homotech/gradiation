var open = document.querySelector("#open");
var close = document.querySelector("#close");
var navbar = document.querySelector("#navbar");

const navToggle = (choice) => {
  switch (choice) {
    case 1:
      navbar.classList.remove("hidenav");
      navbar.classList.add("shownav");
      open.style.display = "none";
      close.style.display = "block";
      break;
    default:
      navbar.classList.add("hidenav");
      navbar.classList.remove("shownav");
      close.style.display = "none";
      open.style.display = "block";
  }
};

open.addEventListener("click", () => navToggle(1));
close.addEventListener("click", () => navToggle(2));
