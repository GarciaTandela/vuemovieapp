<template>
  <q-page class="container-xl">
    <HomePage></HomePage>
  </q-page>
</template>

<script setup>
import HomePage from 'components/Home/Home.vue';
import useMovieStore from 'src/stores/movie';
import { movieService } from 'src/services';
import { Loading } from 'quasar';
defineOptions({
  name: 'HomePage',
  async preFetch({ currentRoute, redirect }) {
    const movieStore = useMovieStore();
    const filters = currentRoute.query;

    if (Object.keys(filters).length === 0) {
      return redirect('/?page=1&sort_by=popularity.desc');
    }

    Loading.show();

    try {
      const movies = await movieService.searchMoviesByFilters(filters);
      movieStore.setMovies(movies);
    } catch (error) {
      console.log(error);
    } finally {
      Loading.hide();
    }
  }
});
</script>
