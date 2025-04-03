const url = 'https://api.themoviedb.org';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNTY3YmI5NDdkZmFmY2M2ZTE3M2ViOTVmNjQ1MjdiYiIsIm5iZiI6MTcyODU4OTM0My40MTg3OTYsInN1YiI6IjY3MDgyYzRlMWQ5NmRjNmQ0NzZhNTRlYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QzOYUtQsWcUH8eU8aNMQ4ku4AH74uLM87byVJj_cjg0'
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
