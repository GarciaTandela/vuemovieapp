<template>
  <div class="row q-col-gutter-lg">
    <div class="col-12 col-md-3 q-mb-md" v-for="(n, index) in 8" :key="index">
      <MovieCard></MovieCard>
    </div>
  </div>
</template>

<script setup>
import MovieCard from 'src/components/Home/Cards/Movie/Movie.vue';
defineOptions({
  name: 'MovieList'
});
</script>
