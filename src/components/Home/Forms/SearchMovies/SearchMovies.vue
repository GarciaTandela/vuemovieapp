<template>
  <div class="row q-my-lg justify-between">
    <div class="col-12 col-md-3">
      <q-input
        v-model="search"
        debounce="500"
        placeholder="Search"
        outlined
        dense
        clearable
        bg-color="white"
      />
    </div>

    <div class="col-12 col-md-3">
      <div class="row q-mt-sm justify-end">
        <Filter class="btn--no-hover" style="margin-left: -13px"></Filter>
        <SortBy class="btn--no-hover" style="margin-right: -13px"></SortBy>
      </div>
    </div>
  </div>
</template>

<script setup>
import Filter from './Filter.vue';
import SortBy from './SortBy.vue';
import { ref } from 'vue';

const search = ref('');
defineOptions({
  name: 'SearchMoviesFilter'
});
</script>

<style scoped>
:deep(.q-btn.btn--no-hover .q-focus-helper) {
  display: none;
}
</style>
