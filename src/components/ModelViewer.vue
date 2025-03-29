<template>
  <div class="w-full">
    <div class="space-x-4">
      <button
        v-for="option in options"
        :key="option.id"
        class="underline-offset-4 hover:underline cursor-pointer"
        :class="{ underline: current === option.id }"
        @click="handleSelect(option.id)"
      >
        {{ option.name }}
      </button>
    </div>

    <SpeckleViewer :objects="currentObjects" class="mt-6" />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import SpeckleViewer from './SpeckleViewer.vue';

const current = ref<null | number>(null);

const currentObjects = computed(() => {
  if (current.value === null) return [];
  return options.find((option) => option.id === current.value)?.objects || [];
});

const options = [
  { id: 1, name: 'Computational Design', objects: ['173009c228f9676524fa884299f4a0c4'] },
  { id: 2, name: 'Data Analytics', objects: ['da0219f3ec079c3ec6f9ea77c33c735c'] },
  { id: 3, name: 'Sustainability', objects: ['c6c6720e2662d473ba1ea7d80c8c4b9e'] },
];

const handleSelect = (id: number) => {
  if (current.value === id) {
    current.value = null;
  } else {
    current.value = id;
  }
};
</script>
