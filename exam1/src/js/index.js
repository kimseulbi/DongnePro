const dropdownEl = document.querySelector(".btn-dropdown");

dropdownEl.addEventListener("click", e => {
  document.body.classList.add("show");
  console.log("클릭");
});
