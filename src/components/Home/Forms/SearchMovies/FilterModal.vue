<template>
  <q-dialog v-model="dialog" position="right" :maximized="true" class="full-height">
    <q-card :style="cardStyle" class="overflow-hidden-y">
      <q-toolbar class="bg-white">
        <q-toolbar-title class="q-ml-xs text-weight-600 text-dark">Filters</q-toolbar-title>
        <q-btn class="text-dark" flat round dense icon="clear" @click="closeDialog" />
      </q-toolbar>

      <q-card-section>
        <q-select
          v-model="genre"
          outlined
          clearable
          emit-value
          map-options
          :options="movieStore.genresList"
          label="Genres"
        >
          <template v-slot:option="scope">
            <q-item v-bind="scope.itemProps">
              <q-item-section>
                <q-item-label class="text-dark">{{ scope.opt.label }}</q-item-label>
              </q-item-section>
            </q-item>
          </template>
        </q-select>

        <q-input class="q-mt-md" v-model="releaseYear" label="Release Year" readonly outlined>
          <template v-slot:append>
            <q-icon
              v-if="releaseYear"
              name="cancel"
              @click.stop.prevent="releaseYear = ''"
              class="cursor-pointer"
            />
            <q-icon name="mdi-calendar-blank" class="cursor-pointer">
              <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                <q-date v-model="releaseYear" navigation-max-year-month="2025/12" mask="YYYY" dark>
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
          @click="applyFilter"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { ref, computed, onBeforeMount } from 'vue';
import { useQuasar } from 'quasar';
import useMovieStore from 'src/stores/movie';
import { useRouter, useRoute } from 'vue-router';

// Props
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  }
});

// Emits
const emit = defineEmits(['update:modelValue']);

const router = useRouter();
const route = useRoute();
const genre = ref('');
const releaseYear = ref('');
const $q = useQuasar();
const utils = $q.screen;
const movieStore = useMovieStore();

const cardStyle = computed(() => {
  const width = utils.width;
  if (utils.lt.sm) {
    return `width:${width}px;`;
  } else {
    return 'width:414px;';
  }
});

// Computed
const dialog = computed(() => {
  return props.modelValue;
});

const closeDialog = () => {
  emit('update:modelValue', false);
};

const applyFilter = () => {
  movieStore.searchQuery.with_genres = genre.value;
  movieStore.searchQuery.primary_release_year = releaseYear.value;
  window.scrollTo({ top: 0, behavior: 'smooth' });

  router.push({
    query: Object.assign({}, route.query, {
      with_genres: genre.value || undefined,
      primary_release_year: releaseYear.value || undefined
    })
  });
  closeDialog();
};

onBeforeMount(() => {
  const genreName = movieStore.genresList.find(
    (item) => item.value === movieStore.searchQuery.with_genres
  );
  genre.value = genreName?.value || '';
  releaseYear.value = movieStore.searchQuery.primary_release_year || '';
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
