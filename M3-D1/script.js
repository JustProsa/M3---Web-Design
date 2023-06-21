// EXTRA Crea con JavaScript la funzionalità per rimuovere il link "twitter" sotto alla sezione "Altro" nell'elemento "aside". Deve avvenire al caricamento della pagina, automticamente.
// EXTRA Crea con JavaScript la funzionalità per rimuovere il corrispondente elemento padre dal DOM cliccando sul link "Continua a leggere".
// EXTRA Crea con JavaScript la funzionalità per creare un alert col nome dell'autore ogni volta che il cursore passa sopra l'autore del post.

// 1

window.addEventListener("DOMContentLoaded", function removeLink() {
  let linkToRemove = document.querySelector(
    "aside div:nth-child(3) ol li:nth-child(2)"
  );
  if (linkToRemove) {
    linkToRemove.remove();
  }
});

// 2

let links = document.getElementsByTagName("a");

for (let link of links) {
  let text = link.textContent;
  let parentElement = link.parentElement;

  if (text === "Continua a leggere" || text === "Continua a leggere...") {
    link.addEventListener("click", function () {
      parentElement.remove();
    });
  }
}

// 3

let authors = document.querySelectorAll(".blog-post .blog-post-meta a");

for (let author of authors) {
  let authorName = author.textContent;
  author.addEventListener("mouseover", function () {
    alert(authorName);
  });
}
