// Bottone di ricerca che attiva e disattiva la barra
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

//Scorrimento destra e sinistra immagini dei film !!NON FUNZIONA

let movieRows = Array.from(document.querySelectorAll(".movie-row div.row"));
let arrowsLeft = Array.from(document.getElementsByClassName("arrow-left"));
let arrowsRight = Array.from(document.getElementsByClassName("arrow-right"));
console.log(movieRows);
console.log(arrowsLeft);
console.log(arrowsRight);

for (let i = 0; i < movieRows.length; i++) {
  arrowsLeft[i].addEventListener("click", function () {
    let currentPosition = parseInt(movieRows[i].style.left) || 0;
    let newPosition = currentPosition + 10; // Sposta l'elemento di 100px verso destra

    // Verifica se la nuova posizione è maggiore di 0 (limite sinistro)
    if (newPosition <= 0) {
      movieRows[i].style.left = newPosition + "%";
      console.log(newPosition);
    }
  });

  arrowsRight[i].addEventListener("click", function () {
    let currentPosition = parseInt(movieRows[i].style.left) || 0;
    let newPosition = currentPosition - 10; // Sposta l'elemento di 100px verso sinistra
    // Verifica se la nuova posizione è minore o uguale a 0 (limite destro)
    if (newPosition >= -130) {
      movieRows[i].style.left = newPosition + "%";
      console.log(newPosition);
    }
  });
}

//Modifica l'opacità delle immagini se sono parzialmente fuori dalla finestra di visualizzazione

function updateOpacity() {
  const movieCards = document.querySelectorAll(".movie-row div.row div");
  // console.log(movieCards);

  for (let i = 0; i < movieCards.length; i++) {
    const card = movieCards[i];
    const rect = card.getBoundingClientRect();
    const isFullyVisible = rect.left >= 0 && rect.right <= window.innerWidth;

    if (isFullyVisible) {
      card.style.opacity = "1";
      card.style.transition = "opacity 0.3s ease";
    } else {
      card.style.opacity = "0.4";
      card.style.transition = "opacity 0.3s ease";
    }
  }

  const allElements = document.querySelectorAll(".movie-row-container");

  for (let i = 0; i < allElements.length; i++) {
    const element = allElements[i];
    const rect = element.getBoundingClientRect();
    const isFullyVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;

    if (isFullyVisible) {
      element.style.opacity = "1";
      element.style.transition = "opacity 0.3s ease";
    } else {
      element.style.opacity = "0.4";
      element.style.transition = "opacity 0.3s ease";
    }
  }
}

window.addEventListener("scroll", updateOpacity);
window.addEventListener("resize", updateOpacity);
