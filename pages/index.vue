<template>
  <main class="px-10 py-20 sm:p-20 lg:flex lg:flex-1 gap-6">
    <section class="space-y-8 max-w-xl">
      <div class="flex space-x-4">
        <IconBrazil @click="setLocale('pt-BR')" class="cursor-pointer" />
        <IconUsa @click="setLocale('en')" class="cursor-pointer" />
      </div>

      <h1 class="text-7xl font-serif">{{ $t("hello") }}</h1>

      <h2 class="text-4xl tracking-tight font-serif">{{ $t("intro") }}</h2>

      <i18n-t
        keypath="whoami"
        tag="p"
        class="text-lg font-extralight"
        scope="global"
      >
        <template v-slot:perkinswill>
          <a href="https://perkinswill.com" target="_blank">Perkins&Will</a>
        </template>
        <template v-slot:shl>
          <a href="https://shl.dk" target="_blank">Schmidt Hammer Lassen</a>
        </template>
      </i18n-t>

      <p>{{ $t("journey") }}</p>

      <i18n-t
        keypath="references"
        tag="p"
        class="text-lg font-extralight"
        scope="global"
      >
        <template v-slot:github>
          <a
            href="http://github.com/vwnd"
            target="_blank"
            rel="noopener noreferrer"
            class="justify-center gap-2 rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-black disabled:pointer-events-none disabled:opacity-50 underline-offset-4 hover:underline"
            >Github</a
          >
        </template>

        <template v-slot:linkedin>
          <a
            href="https://www.linkedin.com/in/victorwanderley/"
            target="_blank"
            class="justify-center gap-2 rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-black disabled:pointer-events-none disabled:opacity-50 underline-offset-4 hover:underline"
            >LinkedIn</a
          >
        </template>
      </i18n-t>
    </section>
    <ModelViewer />
  </main>
</template>

<script lang="ts" setup>
const { setLocale } = useI18n();
</script>
