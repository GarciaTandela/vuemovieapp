<template>
  <div class="q-mb-xl row justify-center">
    <img
      class="q-mt-lg-xl"
      :src="movieStore.movie.image"
      loading="lazy"
      fetchpriority="high"
      spinner-color="white"
    />
  </div>

  <div class="row q-mt-xl items-center" :class="{ 'container-lg': utils.gt.md }">
    <div class="col-12 col-lg-6">
      <h4 class="text-white">{{ movieStore.movie.title }}</h4>
    </div>
    <div class="column col-12 col-lg-6 items-lg-end">
      <label class="text-white q-mt-sm text-weight-bolder"
        >Release Year: {{ movieStore.movie.releaseDate }}</label
      >
    </div>

    <div class="column col-12 col-lg-6">
      <label class="text-white q-mt-md text-weight-bolder"
        >Genres:
        <q-chip
          v-for="(genre, index) in movieStore.movie.genres"
          :key="index"
          color="orange"
          text-color="white"
          size="md"
        >
          <span class="text-weight-bold">{{ genre }}</span>
        </q-chip></label
      >
    </div>
  </div>

  <div class="row" :class="{ 'container-lg': utils.gt.md }">
    <div class="col-12">
      <p class="text-white q-mt-lg text-justify">
        {{ movieStore.movie.description }}
      </p>
    </div>
  </div>

  <div :class="{ 'container-lg': utils.gt.md }" style="margin-top: 130px">
    <RelatedMovies :movies="movieStore.relatedMovies"></RelatedMovies>
  </div>
</template>

<script setup>
import RelatedMovies from './Lists/RelatedMovies/RelatedMovies.vue';
import { useQuasar } from 'quasar';
import useMovieStore from 'src/stores/movie';

const $q = useQuasar();
const utils = $q.screen;
const movieStore = useMovieStore();

defineOptions({
  name: 'MovieDetailWrapper'
});
</script>
