<template>
  <div class="w-full relative">
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

    <div class="bg-green-200 absolute left-0 top-0 -z-10 h-full w-full min-h-[500px]">
      <canvas />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

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
