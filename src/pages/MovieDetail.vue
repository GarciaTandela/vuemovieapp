<template>
  <q-page class="container-xl">
    <MovieDetail></MovieDetail>
  </q-page>
</template>

<script setup>
import MovieDetail from 'src/components/MovieDetail/MovieDetail.vue';
import useMovieStore from 'src/stores/movie';
import { movieService } from 'src/services';
import { Loading } from 'quasar';

defineOptions({
  name: 'MovieDetailPage',
  async preFetch({ currentRoute }) {
    const movieStore = useMovieStore();
    const movieId = currentRoute.params.id;
    const genreIds = currentRoute.query.genreIds;
    Loading.show();

    try {
      const movie = await movieService.getMovieDetails(movieId);
      movieStore.setMovieDetail(movie);
      const relatedMovies = await movieService.getRelatedMovies(genreIds);
      movieStore.setRelatedMovies(relatedMovies);
    } catch (error) {
      console.log(error);
    } finally {
      Loading.hide();
    }
  }
});
</script>
