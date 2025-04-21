<template>
  <div class="flex flex-col h-screen">
    <UiSidebarProvider>
      <ViewerSidebar />
      <slot />
    </UiSidebarProvider>
  </div>
</template>

<script lang="ts" setup>
import { UiSidebarProvider } from "#components";
</script>

<style></style>
