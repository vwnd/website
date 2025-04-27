<template>
  <div class="relative min-h-screen w-full overflow-hidden">
    <!-- Pinterest-style image wall background -->
    <div
      class="absolute inset-0 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 p-2 overflow-hidden"
    >
      <div
        v-for="image in images"
        :key="image.id"
        class="w-full aspect-auto overflow-hidden rounded-lg"
      >
        <img
          :src="image.imageUrl"
          :alt="image.userPrompt"
          class="w-full h-full object-cover opacity-25"
          loading="lazy"
        />
      </div>
    </div>

    <div
      class="relative z-10 flex flex-col items-center justify-center min-h-screen"
    >
      <div class="max-w-sm grid w-full gap-2">
        <UiTextarea
          v-model="prompt"
          placeholder="Describe your architectural vision"
          class="h-[120px] bg-white"
        />
        <div class="w-full flex justify-end">
          <UiButton :disabled="loading" @click=""> Create </UiButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const prompt = ref("");
const loading = ref(false);

const images = ref([
  {
    id: 1,
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1677623139411-80a3bcbcfab8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM1fE04alZiTGJUUndzfHxlbnwwfHx8fHw%3D",
    userPrompt: "A beautiful sunset over the mountains",
  },
  {
    id: 2,
    imageUrl:
      "https://images.unsplash.com/photo-1742590794310-04fc4d2025f2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM2fE04alZiTGJUUndzfHxlbnwwfHx8fHw%3D",
    userPrompt: "A futuristic city skyline at night",
  },
  {
    id: 3,
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1664193968894-b1257541f463?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQxfE04alZiTGJUUndzfHxlbnwwfHx8fHw%3D",
    userPrompt: "A serene beach with palm trees",
  },
  {
    id: 4,
    imageUrl:
      "https://images.unsplash.com/photo-1650346910418-8b995b5f8cdb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDcxfE04alZiTGJUUndzfHxlbnwwfHx8fHw%3D",
    userPrompt: "A cozy cabin in the woods",
  },
  {
    id: 5,
    imageUrl:
      "https://images.unsplash.com/photo-1740999540932-5e4e577e3ae7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDc0fE04alZiTGJUUndzfHxlbnwwfHx8fHw%3D",
    userPrompt: "A vibrant flower garden",
  },
]);
</script>
