<template>
  <div class="w-full mt-0 sm:mt-8">
    <div class="border rounded-t-xl p-2 space-x-1">
      <UiButton
        variant="ghost"
        v-for="option in options"
        :key="option.id"
        :class="
          clsx('cursor-pointer', {
            'bg-accent': current === option.id,
          })
        "
        @click="handleSelect(option.id)"
      >
        {{ option.name }}
      </UiButton>
    </div>

    <SpeckleViewer
      :objects="currentObjects"
      class="border border-gray-200 rounded-b-xl border-t-0"
    />
  </div>
</template>

<script setup lang="ts">
import clsx from "clsx";
import { computed, ref } from "vue";
import SpeckleViewer from "./SpeckleViewer.vue";

const current = ref<null | number>(null);

const currentObjects = computed(() => {
  if (current.value === null) return [];
  return options.find((option) => option.id === current.value)?.objects || [];
});

const options = [
  {
    id: 1,
    name: "Computational Design",
    objects: ["173009c228f9676524fa884299f4a0c4"],
  },
  {
    id: 2,
    name: "Data Analytics",
    objects: ["da0219f3ec079c3ec6f9ea77c33c735c"],
  },
  {
    id: 3,
    name: "Sustainability",
    objects: ["c6c6720e2662d473ba1ea7d80c8c4b9e"],
  },
];

const handleSelect = (id: number) => {
  if (current.value === id) {
    current.value = null;
  } else {
    current.value = id;
  }
};
</script>
