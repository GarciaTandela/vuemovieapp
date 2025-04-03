<template>
  <div class="q-pa-lg flex flex-center">
    <q-pagination
      v-model="movieStore.searchQuery.page"
      :max="movieStore.totalPages"
      :max-pages="3"
      :boundary-numbers="false"
      direction-links
      active-design="unelevated"
      color="primary"
      active-color="primary"
      rounded
      :ellipses="false"
      @click="goToPage()"
    />
  </div>
</template>

<script setup>
import useMovieStore from 'src/stores/movie';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();
const movieStore = useMovieStore();

const goToPage = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  router.push({
    query: Object.assign({}, route.query, {
      page: movieStore.searchQuery.page
    })
  });
};

defineOptions({
  name: 'MoviePagination'
});
</script>
