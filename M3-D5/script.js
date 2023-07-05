let navbarDropDowns = document.querySelectorAll(
  "nav:first-of-type ul:first-child li.dropdown"
);

navbarDropDowns.forEach(function (dropdown) {
  let dropDownMenu = dropdown.querySelector("div.dropdown-menu");
  dropdown.addEventListener("click", function () {
    if (dropdown.classList.contains("show")) {
      dropdown.classList.remove("show");
      dropDownMenu.classList.remove("show");
    } else {
      dropdown.classList.add("show");
      dropDownMenu.classList.add("show");
    }
  });
});
