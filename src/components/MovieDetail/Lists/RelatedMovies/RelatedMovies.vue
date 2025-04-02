<template>
  <section>
    <vueper-slides
      class="no-shadow"
      :visible-slides="4"
      slide-multiple
      :gap="2"
      :dragging-distance="200"
      fixedHeight="580px"
      :breakpoints="{
        800: {
          fixedHeight: '800px',
          visibleSlides: 1,
          slideMultiple: 1,
          gap: 0
        }
      }"
      :bullets="true"
      :arrows="false"
      arrows-outside
    >
      <vueper-slide v-for="(movie, index) in movies" :key="index">
        <template #content>
          <MovieCard
            :movie="movie"
            :cardContentStyle="cardContentStyle"
            :cardImageStyle="cardImageStyle"
          ></MovieCard>
        </template>
      </vueper-slide>
    </vueper-slides>
  </section>
</template>

<script setup>
import { VueperSlides, VueperSlide } from 'vueperslides';
import MovieCard from 'src/components/SharedComponents/Cards/Movie/Movie.vue';
import 'vueperslides/dist/vueperslides.css';
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
    'max-height': '577.27px',
    height: '577.27px',
    'min-height': '577.27px'
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
    'max-height': '434.27px',
    height: '434.27px',
    'min-height': '434.27px'
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
