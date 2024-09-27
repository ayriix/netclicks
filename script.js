const cardWrapper = document.querySelector(".main__cards");
const searchInput = document.querySelector("#search__input");
const searchButton = document.querySelector("[data-action='search']");
const films = [
  {
    id: 0,
    titleRu: "Марсианин",
    titleEn: "The Martian 2015",
    genre: "Фантастика, приключения",
    rating: 7.8,
    url: "/film.html",
    poster: "img/card.png",
  },
  {
    id: 1,
    titleRu: "Марсианин 2",
    titleEn: "The Martian 2015",
    genre: "Фантастика, приключения",
    rating: 7.8,
    url: "/film.html",
    poster: "img/card.png",
  },
  {
    id: 2,
    titleRu: "Марсианин 3",
    titleEn: "The Martian 2015",
    genre: "Фантастика, приключения",
    rating: 7.8,
    url: "/film.html",
    poster: "img/card.png",
  },
];

const render = (arr) => {
  cardWrapper.innerHTML = "";
  arr.forEach((film) => {
    cardWrapper.insertAdjacentHTML(
      "beforeend",
      `<a href="${film.url}" class="main__item">
        <div class="main__card-image">
            <img src="img/card.png" alt="card" />
        </div>
        <div class="main__card-information">
            <p class="main__card-title">
            <span class="main__card-title--bold">${film.titleRu},</span> ${film.titleEn}
            </p>
            <p class="main__card-genre">${film.genre}</p>
            <p class="main__card-rating">${film.rating}</p>
        </div>
        </a>`
    );
  });
};
searchButton.addEventListener("click", () => {
  render(films.filter((film) => film.titleRu.includes(searchInput.value)));
});
render(films);
