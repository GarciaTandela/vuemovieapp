<template>
  <router-view />
</template>

<script setup>
import useMovieStore from 'src/stores/movie';
import { movieService } from 'src/services';
defineOptions({
  async preFetch() {
    const movieStore = useMovieStore();
    try {
      const { genres } = await movieService.getMovieGenres();
      movieStore.genresList = genres.map((genre) => ({
        label: genre.name,
        value: genre.id
      }));
    } catch (error) {
      console.log(error);
    }
  }
});
</script>
