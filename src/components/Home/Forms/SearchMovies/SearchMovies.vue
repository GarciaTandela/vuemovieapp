<template>
  <div class="row q-my-lg justify-between">
    <div class="col-12 col-md-3">
      <q-input
        v-model="searchText"
        ref="refSearchText"
        placeholder="Search"
        outlined
        dense
        bg-color="white"
      >
        <template v-slot:prepend>
          <q-icon name="o_search" color="grey-5" />
        </template>

        <template v-if="searchText !== ''" v-slot:append>
          <q-icon name="close" color="grey-5" @click="cleanSearch" class="cursor-pointer" />
        </template>
      </q-input>
    </div>

    <div class="col-12 col-md-3">
      <div class="row q-mt-sm justify-end">
        <Filter class="btn--no-hover" style="margin-left: -13px"></Filter>
        <SortBy class="btn--no-hover" style="margin-right: -13px"></SortBy>
      </div>
    </div>

    <div class="col-12">
      <div class="row q-mt-md">
        <p class="text-weight-bold" style="font-size: 15px">{{ paginationInfo }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import Filter from './Filter.vue';
import SortBy from './SortBy.vue';
import { ref, computed, watch } from 'vue';
import utils from 'src/composables/utils';
import useMovieStore from 'src/stores/movie';
import usePreferencesStore from 'src/stores/preferences';
import { debounce } from 'lodash';

const searchText = ref('');
const movieStore = useMovieStore();
const preferencesStore = usePreferencesStore();
const refSearchText = ref(null);

const paginationInfo = computed(() => {
  const currentPage = movieStore.searchQuery.page || 1;
  const start = (currentPage - 1) * preferencesStore.itemsPerPage + 1;
  const end = Math.min(currentPage * preferencesStore.itemsPerPage, movieStore.totalResults);
  return `${start} - ${end} of over ${movieStore.totalResults} results`;
});

const cleanSearch = () => {
  for (const movie of movieStore.movies) {
    movie.visible = true;
  }

  searchText.value = '';
  refSearchText.value.focus();
};

// Watch
watch(
  searchText,
  debounce(async (value = '') => {
    const valueToSearch = utils.string.diacritics(value);
    if (value.length > 2) {
      movieStore.movies.forEach((movie) => {
        const text = `${utils.string.diacritics(movie.title)} ${utils.string.diacritics(movie.description)}`;
        movie.visible = text.includes(valueToSearch);
      });
    } else if (value === '') {
      movieStore.movies.forEach((movie) => {
        movie.visible = true;
      });
    }
  }),
  300
);

defineOptions({
  name: 'SearchMoviesFilter'
});
</script>

<style scoped>
:deep(.q-btn.btn--no-hover .q-focus-helper) {
  display: none;
}
</style>
