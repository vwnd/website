<template>
  <div class="relative flex flex-col h-screen">
    <UiSidebarProvider>
      <ViewerSidebar />
      <slot />
    </UiSidebarProvider>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
