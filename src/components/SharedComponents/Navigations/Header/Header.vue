<template>
  <q-header class="bg-dark cursor-pointer" elevated @click="goToHomePage">
    <div class="container-xl">
      <q-toolbar style="height: 60px">
        <q-avatar style="margin-left: -13px">
          <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
        </q-avatar>

        <q-toolbar-title>Movie App</q-toolbar-title>

        <q-btn
          style="margin-right: -13px"
          flat
          round
          dense
          icon="mdi-cog"
          @click.stop.prevent="openMenu = true"
        >
          <q-badge v-if="favoritesMovies.length" floating color="red" rounded />
        </q-btn>

        <div class="q-mt-xl">
          <q-menu v-model="openMenu" anchor="bottom middle" self="top middle" auto-close>
            <q-list>
              <q-item class="text-dark" clickable v-close-popup @click="itemsPerPageModal = true">
                <q-item-section>Items per page</q-item-section>
              </q-item>
              <q-item
                class="text-dark"
                clickable
                v-close-popup
                @click="favoritesMoviesModal = true"
              >
                <q-item-section>Favorites</q-item-section>
                <q-item-section v-if="favoritesMovies.length" side>
                  <q-badge rounded color="red" :label="favoritesMovies.length" />
                </q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </div>
      </q-toolbar>
    </div>
  </q-header>

  <FavoritesMoviesModal
    v-if="favoritesMoviesModal"
    v-model="favoritesMoviesModal"
  ></FavoritesMoviesModal>
  <ItemsPerPageModal v-if="itemsPerPageModal" v-model="itemsPerPageModal"></ItemsPerPageModal>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import FavoritesMoviesModal from '../../Modals/FavoritesMovies/FavoritesMovies.vue';
import ItemsPerPageModal from '../../Modals/ItemsPerPage/ItemsPerPage.vue';
import useMovieStore from 'src/stores/movie';

const router = useRouter();
const favoritesMoviesModal = ref(false);
const itemsPerPageModal = ref(false);
const openMenu = ref(false);
const movieStore = useMovieStore();
const favoritesMovies = movieStore.favoritesMovies;

const goToHomePage = () => {
  router.push('/?page=1&sort_by=popularity.desc');
};
defineOptions({
  name: 'HeaderComponent'
});
</script>
