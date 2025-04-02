<template>
  <div class="row q-col-gutter-lg">
    <div class="col-12 col-md-3 q-mb-md" v-for="(movie, index) in movies" :key="index">
      <MovieCard
        :movie="movie"
        :cardContentStyle="cardContentStyle"
        :cardImageStyle="cardImageStyle"
      ></MovieCard>
    </div>
  </div>
</template>

<script setup>
import MovieCard from 'src/components/SharedComponents/Cards/Movie/Movie.vue';
import { computed } from 'vue';
import { useQuasar } from 'quasar';

const props = defineProps({
  movies: {
    type: Array,
    default: () => []
  }
});

const $q = useQuasar();
const utils = $q.screen;

const movies = computed(() => {
  return props.movies;
});

const cardContentStyle = computed(() => {
  const desktopStyle = {
    'max-height': '818px',
    height: '818px',
    'min-height': '818px'
  };

  const mobileStyle = {
    'max-height': '713px',
    height: '713px',
    'min-height': '713px'
  };

  if (utils.gt.md) {
    return desktopStyle;
  }

  return mobileStyle;
});

const cardImageStyle = computed(() => {
  const desktopStyle = {
    'max-height': '675px',
    height: '675px',
    'min-height': '675px'
  };

  const mobileStyle = {
    'max-height': '570px',
    height: '570px',
    'min-height': '570px'
  };

  if (utils.gt.md) {
    return desktopStyle;
  }

  return mobileStyle;
});

defineOptions({
  name: 'MovieList'
});
</script>
