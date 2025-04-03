export default () => ({
  movies: [],
  relatedMovies: [],
  movie: {},
  searchQuery: {
    page: 1,
    sort_by: 'popularity.desc',
    with_genres: '',
    primary_release_year: ''
  },
  totalPages: 0,
  totalResults: 0,
  genresList: [],
  favoritesMovies: []
});
