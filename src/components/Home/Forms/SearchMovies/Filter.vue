<template>
  <q-btn class="btn--no-hover" no-caps flat :ripple="false" size="md" @click="dialog = true">
    <q-icon name="mdi-filter-menu-outline"></q-icon>
    <span class="q-ml-sm">Filter</span>
  </q-btn>

  <q-dialog v-model="dialog" position="right" :maximized="true" class="full-height">
    <q-card :style="cardStyle" class="overflow-hidden-y">
      <q-toolbar class="bg-white">
        <q-toolbar-title class="q-ml-xs text-weight-600 text-dark">Filters</q-toolbar-title>
        <q-btn class="text-dark" flat round dense icon="clear" @click="dialog = false" />
      </q-toolbar>

      <q-card-section>
        <q-select
          v-model="genre"
          outlined
          clearable
          emit-value
          map-options
          :options="[]"
          label="Genres"
        />
        <q-input class="q-mt-md" v-model="releaseDate" label="Release Date" readonly outlined>
          <template v-slot:append>
            <q-icon name="mdi-calendar-blank" class="cursor-pointer">
              <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                <q-date v-model="releaseDate" dark="">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </q-card-section>

      <q-card-actions class="absolute-bottom">
        <q-btn
          class="full-width bg-dark text-white"
          no-caps
          unelevated
          style="height: 48px"
          label="Apply filter"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useQuasar } from 'quasar';

const dialog = ref(false);
const genre = ref('');
const releaseDate = ref('');
const $q = useQuasar();
const utils = $q.screen;

const cardStyle = computed(() => {
  const width = utils.width;
  if (utils.lt.sm) {
    return `width:${width}px;`;
  } else {
    return 'width:414px;';
  }
});
defineOptions({
  name: 'FilterButton'
});
</script>

<style scoped>
:deep(.q-btn.btn--no-hover .q-focus-helper) {
  display: none;
}
</style>
