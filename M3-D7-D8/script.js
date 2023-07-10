// const btnLeft = document.getElementsByClassName("scrollLeft");
// const btnRight = document.getElementsByClassName("scrollRight");
const movieRow = document.getElementsByClassName("movie-row");

for (let row of movieRow) {
  const btnLeft = document.getElementsByClassName("scrollLeft");
  const btnRight = document.getElementsByClassName("scrollRight");

  for (let btn of btnLeft) {
    btn.addEventListener("click", function () {
      scroll("left", 200);
    });
  }

  for (let btnR of btnRight) {
    btnR.addEventListener("click", function () {
      scroll("right", 200);
    });
  }

  function scroll(direction, scrollAmount) {
    const currentScrollPosition = movieRow.scrollLeft;
    let newPosition;

    if (direction === "left") {
      newPosition = currentScrollPosition - scrollAmount;
    } else if (direction === "right") {
      newPosition = currentScrollPosition + scrollAmount;
    }

    movieRow.scrollTo({
      left: newPosition,
      behavior: "smooth",
    });
  }
}
