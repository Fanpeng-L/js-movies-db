const API_URL =
  "https://api.themoviedb.org/3/discover/movie?page=1&sort_by=popularity.desc'&api_key=66b4d9bb8ecc7f3ab3cd095884f6962c";

const SEARCH_URL =
  "https://api.themoviedb.org/3/search/movie?api_key=66b4d9bb8ecc7f3ab3cd095884f6962c&query='";

// const IMG_PATH = `https://api.themoviedb.org/3/movie/${movie_id}/images`;

const main = document.querySelector("#main");
const form = document.querySelector("#form");
const search = document.querySelector("#search");

getMovies(API_URL);

async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();
  showMovies(data.results);
}

function showMovies(movies) {
  main.style.display = "none";

  movies.foreach((movie) => {
    const { title, id, poster_path, vote_average, overview } = movie;
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const searchTerm = search.value;

  if (searchTerm && searchTerm !== "") {
    getMovies(SEARCH_URL + searchTerm);
    search.value = "";
  } else {
    window.location.reload();
  }
});
