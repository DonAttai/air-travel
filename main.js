const hamburger = document.querySelector(".hamburger");
const navItems = document.querySelector(".nav-items");

hamburger.addEventListener("click", () => {
  navItems.classList.toggle("active");
});

[...navItems.children].forEach((li) => {
  li.addEventListener("click", () => {
    navItems.classList.toggle("active");
  });
});
