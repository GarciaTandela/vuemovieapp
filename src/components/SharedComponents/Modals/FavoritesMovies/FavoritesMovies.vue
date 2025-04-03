<template>
  <q-dialog v-model="dialog" position="right" :maximized="true" class="full-height">
    <q-card :style="cardStyle" class="overflow-hidden-y">
      <q-toolbar class="bg-white">
        <q-toolbar-title class="q-ml-xs text-weight-600 text-dark"
          >Favorites Movies</q-toolbar-title
        >
        <q-btn class="text-dark" flat round dense icon="clear" @click="closeDialog" />
      </q-toolbar>

      <q-card-section>
        <q-scroll-area
          v-if="favoritesMovies.length > 0"
          :thumb-style="leftDrawerScrollThumbStyles"
          :bar-style="leftDrawerScrollBarStyles"
          :style="conversationsHeight"
        >
          <q-list class="rounded" bordered separator>
            <q-item v-for="(favorite, index) in favoritesMovies" :key="index" clickable>
              <q-item-section avatar>
                <q-chip class="text-white" size="sm" square>{{ index + 1 }}</q-chip>
              </q-item-section>
              <q-item-section class="text-dark text-weight-bolder">{{
                favorite.title
              }}</q-item-section>
              <q-item-section side>
                <q-btn
                  flat
                  style="color: #ff0000"
                  label="Remove"
                  no-caps
                  @click.stop="removeFavorite(favorite)"
                />
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>

        <div v-else class="row items-center" :style="conversationsHeight">
          <div class="col-12 text-center">
            <p class="text-dark text-weight-500">No Favorites Movies Available</p>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { computed } from 'vue';
import { useQuasar } from 'quasar';
import useMovieStore from 'src/stores/movie';

// Props
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  }
});

// Emits
const emit = defineEmits(['update:modelValue']);

const $q = useQuasar();
const utils = $q.screen;
const movieStore = useMovieStore();
const favoritesMovies = movieStore.favoritesMovies;
const relatedMovies = movieStore.relatedMovies;
const movies = movieStore.movies;

const cardStyle = computed(() => {
  const width = utils.width;
  if (utils.lt.sm) {
    return `width:${width}px;`;
  } else {
    return 'width:414px;';
  }
});

const dialog = computed(() => {
  return props.modelValue;
});

const leftDrawerScrollThumbStyles = computed(() => {
  return {
    borderRadius: `3px`,
    backgroundColor: 'grey-8',
    width: ` 6px`
  };
});

const leftDrawerScrollBarStyles = computed(() => {
  return {
    width: 0,
    opacity: 0
  };
});

const conversationsHeight = computed(() => {
  let height = 0;
  height = utils.height - 50 - 88 - 30;

  return `height: ${height}px`;
});

const removeFavorite = (data) => {
  const favoritesMoviesPosition = favoritesMovies.findIndex((favorite) => favorite.id === data.id);
  const relatedMovie = relatedMovies.find((related) => related.id === data.id);
  const movie = movies.find((movie) => movie.id === data.id);

  favoritesMovies.splice(favoritesMoviesPosition, 1);

  if (relatedMovie) {
    relatedMovie.isFavorite = false;
  }

  if (movie) {
    movie.isFavorite = false;
  }

  window.localStorage.setItem('FavoritesMovies', JSON.stringify(favoritesMovies));
};

const closeDialog = () => {
  emit('update:modelValue', false);
};

defineOptions({
  name: 'FilterButton'
});
</script>
