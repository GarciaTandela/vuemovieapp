<template>
  <div class="row q-col-gutter-lg">
    <template v-for="(movie, index) in movies" :key="index">
      <div v-if="movie.visible" class="col-12 col-sm-6 col-lg-3 q-mb-md">
        <MovieCard
          :movie="movie"
          :cardContentStyle="cardContentStyle"
          :cardImageStyle="cardImageStyle"
        ></MovieCard>
      </div>
    </template>
  </div>
</template>

<script setup>
import MovieCard from 'src/components/SharedComponents/Cards/Movie/Movie.vue';
import { computed } from 'vue';
import { useQuasar } from 'quasar';
import usePreferencesStore from 'src/stores/preferences';

const props = defineProps({
  movies: {
    type: Array,
    default: () => []
  }
});

const $q = useQuasar();
const utils = $q.screen;
const preferencesStore = usePreferencesStore();

const movies = computed(() => {
  return props.movies.slice(0, preferencesStore.itemsPerPage);
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
