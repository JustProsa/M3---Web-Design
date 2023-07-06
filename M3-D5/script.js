let bookmarks = document.querySelectorAll(".card .card-body:last-child a i");

bookmarks.forEach(function (bookmark) {
  bookmark.addEventListener("click", function () {
    event.preventDefault();
    if (bookmark.classList.contains("bi-bookmark-fill")) {
      bookmark.classList.remove("bi-bookmark-fill");
      bookmark.classList.add("bi-bookmark");
    } else {
      bookmark.classList.add("bi-bookmark-fill");
      bookmark.classList.remove("bi-bookmark");
    }
  });
});
