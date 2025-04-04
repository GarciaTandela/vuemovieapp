const url = 'https://api.themoviedb.org';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: process.env.TOKEN
  }
};

export default {
  async getMovieGenres() {
    const params = '/3/genre/movie/list';
    const query = '?language=en-US';
    const response = await fetch(`${url}${params}${query}`, options);

    if (!response.ok) {
      throw new Error('Could not fetch movie details!');
    }

    const data = await response.json();

    return data;
  },
  async getMovieDetails(id) {
    const params = `/3/movie/${id}`;
    const query = '?language=en-US';
    const response = await fetch(`${url}${params}${query}`, options);

    if (!response.ok) {
      throw new Error('Could not fetch movie details!');
    }

    const data = await response.json();

    return data;
  },
  async getRelatedMovies(genreIds) {
    const params = '/3/discover/movie';
    const query = `?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genreIds}`;
    const response = await fetch(`${url}${params}${query}`, options);

    if (!response.ok) {
      throw new Error('Could not fetch movies by genre!');
    }

    const data = await response.json();

    return data;
  },
  async searchMoviesByFilters(filters) {
    const urlQueries = Object.entries(filters)
      .map((e) => e.join('='))
      .join('&');

    const params = '/3/discover/movie';
    const query = `?include_adult=false&include_video=false&language=en-US&${urlQueries}`;
    const response = await fetch(`${url}${params}${query}`, options);

    if (!response.ok) {
      throw new Error('Could not fetch movies by genre!');
    }

    const data = await response.json();

    return data;
  }
};
