<template>
  <q-layout view="lHh Lpr lff">
    <Header></Header>
    <Footer></Footer>
    <q-page-container>
      <router-view />
      <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
        <q-btn text-color="dark" fab icon="mdi-arrow-up-thin-circle-outline" color="white" />
      </q-page-scroller>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import Header from 'components/SharedComponents/Navigations/Header/Header.vue';
import Footer from 'components/SharedComponents/Navigations/Footer/Footer.vue';
import { onBeforeMount } from 'vue';
import useMovieStore from 'src/stores/movie';

const movieStore = useMovieStore();
onBeforeMount(() => {
  const favoritesMovies = JSON.parse(window.localStorage.getItem('FavoritesMovies'));

  if (favoritesMovies) {
    movieStore.favoritesMovies = favoritesMovies;
  }
});
defineOptions({
  name: 'DefaultLayout'
});
</script>
