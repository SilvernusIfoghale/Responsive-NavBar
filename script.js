const openBtn = document.querySelector(".open");
const closeBtn = document.querySelector(".close");
const navBar = document.querySelector("ul");

openBtn.addEventListener("click", () => {
  navBar.classList.add("visible");
});
closeBtn.addEventListener("click", () => {
  navBar.classList.remove("visible");
});

navBar.addEventListener("click", () => {
  navBar.classList.remove("visible");
});
