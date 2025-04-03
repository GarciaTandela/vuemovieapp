export default {
  setMovieDetail(data) {
    const movie = {
      title: data.title,
      description: data.overview,
      releaseDate: data.release_date,
      genres: data.genres.map((genre) => {
        return genre.name;
      }),
      genreIds: data.genres.map((genre) => {
        return genre.id;
      }),
      image: `https://image.tmdb.org/t/p/w500${data.backdrop_path}`
    };

    this.movie = movie;
  },
  setRelatedMovies(data) {
    this.relatedMovies = data.results.map((movie) => ({
      id: movie.id,
      title: movie.title,
      description: movie.overview,
      genreIds: movie.genre_ids.map((id) => {
        return id;
      }),
      image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      isFavorite: false,
      visible: true
    }));
  },
  setMovies(data) {
    const movies = data.results.map((movie) => {
      let isFavorite = false;
      if (this.favoritesMovies.length > 0) {
        const movieIndex = this.favoritesMovies.findIndex((favorite) => favorite.id === movie.id);
        if (movieIndex !== -1) {
          isFavorite = true;
        }
      }

      return {
        id: movie.id,
        title: movie.title,
        description: movie.overview,
        genreIds: movie.genre_ids,
        image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        isFavorite,
        visible: true
      };
    });

    this.movies = movies;

    this.totalPages = data.total_pages;
    this.totalResults = data.total_results;
  }
};
