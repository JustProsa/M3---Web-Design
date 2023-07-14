const searchBtn = document.getElementById("search-btn");
const searchBar = document.getElementById("search-bar");

searchBtn.addEventListener("click", function () {
  if (searchBar.classList.contains("visible")) {
    searchBar.classList.remove("visible");
    searchBar.classList.add("invisible");
  } else {
    searchBar.classList.remove("invisible");
    searchBar.classList.add("visible");
  }
});

let movieRows = Array.from(document.querySelectorAll(".movie-row div.row"));
let arrowsLeft = Array.from(document.getElementsByClassName("arrow-left"));
let arrowsRight = Array.from(document.getElementsByClassName("arrow-right"));
console.log(movieRows);
console.log(arrowsLeft);
console.log(arrowsRight);

for (let i = 0; i < movieRows.length; i++) {
  arrowsLeft[i].addEventListener("click", function () {
    movieRows[i].scrollTo({
      left: 100,
      behavior: "smooth",
    });
  });

  arrowsRight[i].addEventListener("click", function () {
    movieRows[i].scrollTo({
      left: -100,
      behavior: "smooth",
    });
  });
}

function updateOpacity() {
  const movieCards = document.querySelectorAll(".movie-row div.row div");
  // console.log(movieCards);

  for (let i = 0; i < movieCards.length; i++) {
    const card = movieCards[i];
    const rect = card.getBoundingClientRect();
    const isFullyVisible = rect.left >= 0 && rect.right <= window.innerWidth;

    if (isFullyVisible) {
      card.style.opacity = "1";
    } else {
      card.style.opacity = "0.4";
    }
  }
}

window.addEventListener("scroll", updateOpacity);
window.addEventListener("resize", updateOpacity);
