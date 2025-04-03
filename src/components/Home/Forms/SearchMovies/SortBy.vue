<template>
  <q-btn class="btn--no-hover" no-caps flat :ripple="false" size="md">
    <q-icon name="mdi-sort-variant"></q-icon>
    <span class="q-ml-sm">Sort By: {{ sortByName }}</span>

    <q-menu anchor="bottom middle" self="top middle" auto-close>
      <q-list>
        <q-item
          v-for="(option, index) in sortByOptions"
          :key="index"
          class="text-dark"
          :active="activeSortBy(option.code)"
          :active-class="activeSortByClass(option.code)"
          clickable
          v-close-popup
          @click="sortBy(option)"
        >
          <q-item-section>{{ option.name }}</q-item-section>
        </q-item>
      </q-list>
    </q-menu>
  </q-btn>
</template>

<script setup>
import useMovieStore from 'src/stores/movie';
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();
const movieStore = useMovieStore();
const sortByName = ref('');

const sortByOptions = [
  { name: 'Popularity Ascending', code: 'popularity.asc' },
  { name: 'Popularity Descending', code: 'popularity.desc' },
  { name: 'Release Date Ascending', code: 'release_date.asc' },
  { name: 'Release Date Descending', code: 'release_date.desc' },
  { name: 'Revenue Ascending', code: 'revenue.asc' },
  { name: 'Revenue Descending', code: 'revenue.desc' },
  { name: 'Vote Average Ascending', code: 'vote_average.asc' },
  { name: 'Vote Average Descending', code: 'vote_average.desc' },
  { name: 'Original Title Ascending', code: 'original_title.asc' },
  { name: 'Original Title Descending', code: 'original_title.desc' }
];

const activeSortBy = (value) => {
  return movieStore.searchQuery.sort_by === value;
};

const activeSortByClass = (value) => {
  return activeSortBy(value) ? 'bg-primary text-white' : 'text-dark';
};

const sortBy = ({ name, code }) => {
  movieStore.searchQuery.sort_by = code;
  sortByName.value = name;
  window.scrollTo({ top: 0, behavior: 'smooth' });
  router.push({
    query: Object.assign({}, route.query, {
      sort_by: code
    })
  });
};

onMounted(() => {
  const sortBy = route.query.sort_by || movieStore.searchQuery.sort_by;
  const sortByOption = sortByOptions.find((option) => option.code === sortBy);
  if (sortByOption) {
    sortByName.value = sortByOption.name;
  } else {
    sortByName.value = 'Popularity Descending';
  }
});
defineOptions({
  name: 'SortByButton'
});
</script>
