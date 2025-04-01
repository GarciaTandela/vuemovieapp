<template>
  <q-card class="cursor-pointer" @click="goToMovieDetailPage()">
    <img src="https://cdn.quasar.dev/img/mountains.jpg" />

    <q-card-section>
      <div class="text-h6 text-dark">Our Changing Planet</div>
      <div class="text-subtitle2 text-dark">by John Doe</div>
    </q-card-section>

    <q-card-section class="q-pt-none text-dark">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua.
    </q-card-section>
  </q-card>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const goToMovieDetailPage = () => {
  router.push({ name: 'movie-detail', params: { id: 1 } });
};
defineOptions({
  name: 'MovieCard'
});
</script>
