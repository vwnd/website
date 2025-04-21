<template>
  <div class="flex w-full h-full bg-green-50">
    <div class="mx-auto my-auto">{{ x }}</div>
  </div>
</template>

<script lang="ts" setup>
import { useSidebar } from "~/components/ui/sidebar";

definePageMeta({
  layout: "model-viewer",
});

const { x } = useMouse();
const { toggleSidebar, setOpen, open } = useSidebar();

watchEffect(() => {
  if (x.value < 255 && !open.value) {
    setOpen(true);
  } else if (x.value > 255 && open.value) {
    setOpen(false);
  }
});
</script>

<style></style>
