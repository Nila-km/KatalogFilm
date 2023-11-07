// Kode JavaScript ini digunakan untuk mengambil data dari API The Movie Database (TMDb) dan menampilkan daftar film
//populer di dalam elemen HTML dengan ID "movie-container".

const movie_container = document.getElementById("movie-container");

const apiKey = "9ee873b5a844bf9c78d38a6890d4e9aa";
const apiUrl = "https://api.themoviedb.org/3/";
const popularMoviesEndpoint = `${apiUrl}movie/popular?api_key=${apiKey}`;

const movieContainer = document.getElementById("movie-container");

const fetchMovies = async () => {
  try {
    const response = await fetch(popularMoviesEndpoint);
    const data = await response.json();

    data.results.forEach((movie) => {
      createMovieCard(movie);
    });
  } catch (error) {
    console.error("Terjadi kesalahan dalam mengambil data:", error);
  }
};

const createMovieCard = (movie) => {
  const movieCard = document.createElement("div");
  movieCard.classList.add("movie-card");

  const title = movie.title;
  const overview = movie.overview;
  const releaseDate = movie.release_date;
  const posterPath = movie.poster_path ? `https://image.tmdb.org/t/p/w300${movie.poster_path}` : "https://via.placeholder.com/150"; // Gambar placeholder jika poster tidak tersedia

  const movieCardHTML = `
    <div class="poster-container">
        <img src="${posterPath}" alt="${title} Poster">
    </div>
    <div class="info">
        <h3 class="title">${title}</h3>
        <p class="overview">${overview}</p>
        <p class="release-date">Release Date: ${releaseDate}</p>
    </div>
    `;

  movieCard.innerHTML = movieCardHTML;
  movieContainer.appendChild(movieCard);
};

fetchMovies();
