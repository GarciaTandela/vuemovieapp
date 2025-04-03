<template>
  <q-dialog v-model="dialog" position="right" :maximized="true" class="full-height">
    <q-card :style="cardStyle" class="overflow-hidden-y">
      <q-toolbar class="bg-white">
        <q-toolbar-title class="q-ml-xs text-weight-600 text-dark">Items Per Page</q-toolbar-title>
        <q-btn class="text-dark" flat round dense icon="clear" @click="closeDialog" />
      </q-toolbar>

      <q-card-section>
        <q-select
          v-model="preferencesStore.itemsPerPage"
          outlined
          emit-value
          map-options
          :options="numbersArray"
          label="Items per page"
        >
          <template v-slot:option="scope">
            <q-item v-bind="scope.itemProps">
              <q-item-section>
                <q-item-label class="text-dark">{{ scope.opt.label }}</q-item-label>
              </q-item-section>
            </q-item>
          </template>
        </q-select>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { computed } from 'vue';
import { useQuasar } from 'quasar';
import usePreferencesStore from 'src/stores/preferences';
// Props
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  }
});

// Emits
const emit = defineEmits(['update:modelValue']);

const $q = useQuasar();
const utils = $q.screen;
const preferencesStore = usePreferencesStore();

const numbersArray = Array.from({ length: 20 }, (_, i) => ({
  label: `${i + 1}`,
  value: i + 1
}));

const cardStyle = computed(() => {
  const width = utils.width;
  if (utils.lt.sm) {
    return `width:${width}px;`;
  } else {
    return 'width:414px;';
  }
});

const dialog = computed(() => {
  return props.modelValue;
});

const closeDialog = () => {
  emit('update:modelValue', false);
};

defineOptions({
  name: 'FilterButton'
});
</script>
