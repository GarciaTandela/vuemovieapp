<template>
  <q-btn class="btn--no-hover" no-caps flat :ripple="false" size="md" @click="filterModal = true">
    <q-icon name="mdi-filter-menu-outline"></q-icon>
    <span class="q-ml-sm">Filter</span>
  </q-btn>

  <FilterModal v-if="filterModal" v-model="filterModal"></FilterModal>
</template>

<script setup>
import { ref } from 'vue';
import FilterModal from './FilterModal.vue';

const filterModal = ref(false);

defineOptions({
  name: 'FilterButton'
});
</script>

<style scoped>
:deep(.q-btn.btn--no-hover .q-focus-helper) {
  display: none;
}
</style>
