<template>
  <div class="q-pa-lg flex flex-center">
    <q-pagination
      v-model="current"
      :max="500"
      :max-pages="5"
      direction-links
      active-design="unelevated"
      color="primary"
      active-color="primary"
      rounded
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const current = ref(1);
defineOptions({
  name: 'MoviePagination'
});
</script>
