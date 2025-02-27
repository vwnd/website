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

    <SpeckleViewer class="mt-6" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import SpeckleViewer from './SpeckleViewer.vue'

const current = ref<null | number>(null)

const options = [
  { id: 1, name: 'Computational Design' },
  { id: 2, name: 'Data Analytics' },
  { id: 3, name: 'Sustainability' },
]

const handleSelect = (id: number) => {
  if (current.value === id) {
    current.value = null
  } else {
    current.value = id
  }
}
</script>
