<template>
  <q-btn class="btn--no-hover" no-caps flat :ripple="false" size="md">
    <q-icon name="mdi-sort-variant"></q-icon>
    <span class="q-ml-sm">Sort By Title:</span>

    <q-menu anchor="bottom middle" self="top middle" auto-close>
      <q-list>
        <q-item
          class="text-dark"
          :active="sortByValue === 'Asc'"
          :active-class="sortByValue === 'Asc' ? 'bg-primary text-white' : 'text-dark'"
          clickable
          v-close-popup
          @click="sortBy('Asc')"
        >
          <q-item-section>Ascending</q-item-section>
        </q-item>

        <q-item
          class="text-dark"
          :active="sortByValue === 'Desc'"
          :active-class="sortByValue === 'Desc' ? 'bg-primary text-white' : 'text-dark'"
          clickable
          v-close-popup
          @click="sortBy('Desc')"
        >
          <q-item-section>Descending</q-item-section>
        </q-item>
      </q-list>
    </q-menu>
  </q-btn>
</template>

<script setup>
import { ref } from 'vue';

const sortByValue = ref('');

const sortBy = (value) => {
  sortByValue.value = value;
};
defineOptions({
  name: 'SortByButton'
});
</script>
