<template>
  <q-card
    class="cursor-pointer"
    @click="goToMovieDetailPage(movie.id, movie.genreIds)"
    :style="cardContentStyle"
  >
    <q-img :src="movie.image" no-native-menu :style="cardImageStyle">
      <q-icon
        v-if="isFavorite"
        class="absolute all-pointer-events"
        size="32px"
        name="mdi-heart"
        color="red"
        style="top: 8px; right: 8px"
        @click.stop="removeFavorite"
      >
        <q-tooltip style="font-size: 13px"> Remove favorite </q-tooltip>
      </q-icon>

      <q-icon
        v-else
        class="absolute all-pointer-events"
        size="32px"
        name="mdi-heart-outline"
        color="white"
        style="top: 8px; right: 8px"
        @click.stop="saveFavorite"
      >
        <q-tooltip style="font-size: 13px"> Save favorite </q-tooltip>
      </q-icon>
    </q-img>

    <q-card-section>
      <div class="text-h6 text-dark ellipsis">{{ movie.title }}</div>
      <!-- <div class="text-subtitle2 text-dark">by John Doe</div> -->
    </q-card-section>

    <q-card-section class="q-pt-none text-dark">
      <span class="ellipsis-3-lines">{{ movie.description }}</span>
    </q-card-section>
  </q-card>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref, computed } from 'vue';

const props = defineProps({
  movie: {
    type: Object,
    default: () => ({
      id: 1,
      title: 'Our Changing Planet',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'https://cdn.quasar.dev/img/parallax2.jpg',
      genreIds: []
    })
  },
  cardContentStyle: {
    type: Object
  },
  cardImageStyle: {
    type: Object
  }
});

const router = useRouter();
const isFavorite = ref(false);

const movie = computed(() => {
  return props.movie;
});

const cardContentStyle = computed(() => {
  return props.cardContentStyle;
});

const cardImageStyle = computed(() => {
  return props.cardImageStyle;
});

const goToMovieDetailPage = (id, genreIds) => {
  const genreIdsString = genreIds.join(',');
  router.push(`/details/${id}?genreIds=${genreIdsString}`);
};

const saveFavorite = () => {
  // Logic to save the movie as a favorite
  isFavorite.value = true;
  console.log('Movie saved as favorite!');
};

const removeFavorite = () => {
  // Logic to remove the movie from favorites
  isFavorite.value = false;
  console.log('Movie removed from favorites!');
};

defineOptions({
  name: 'MovieCard'
});
</script>
