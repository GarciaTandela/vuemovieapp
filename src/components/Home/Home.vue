<template>
  <p class="text-h4 q-mt-lg q-mt-lg-xl">Search Movies</p>
  <SearchMoviesFilter></SearchMoviesFilter>
  <MovieList :movies="movieStore.movies"></MovieList>
  <MoviePagination></MoviePagination>
</template>

<script setup>
import MovieList from './Lists/Movie/Movie.vue';
import MoviePagination from './Navigations/MoviePagination/MoviePagination.vue';
import SearchMoviesFilter from './Forms/SearchMovies/SearchMovies.vue';
import useMovieStore from 'src/stores/movie';

const movieStore = useMovieStore();
defineOptions({
  name: 'HomePageWrapper'
});
</script>
