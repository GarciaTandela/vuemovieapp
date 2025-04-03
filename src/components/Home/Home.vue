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
import { watch, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { Loading } from 'quasar';
import { movieService } from 'src/services';

const route = useRoute();
const movieStore = useMovieStore();

const setQueries = (query) => {
  movieStore.searchQuery = {
    page: query.page ? parseInt(query.page) : 1,
    sort_by: query.sort_by || 'popularity.desc',
    with_genres: parseInt(query.with_genres) || '',
    primary_release_year: query.primary_release_year || ''
  };
};

watch(
  () => route.query,
  async (query) => {
    Loading.show();
    setQueries(query);
    try {
      const movies = await movieService.searchMoviesByFilters(query);
      movieStore.setMovies(movies);
    } catch (error) {
      console.log(error);
    } finally {
      Loading.hide();
    }
  }
);

onMounted(() => {
  setQueries(route.query);
});

defineOptions({
  name: 'HomePageWrapper'
});
</script>
