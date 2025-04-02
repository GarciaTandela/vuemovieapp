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
      image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    }));
  },
  setMovies(data) {
    this.movies = data.results.map((movie) => ({
      id: movie.id,
      title: movie.title,
      description: movie.overview,
      genreIds: movie.genre_ids.map((id) => {
        return id;
      }),
      image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    }));
  }
};
