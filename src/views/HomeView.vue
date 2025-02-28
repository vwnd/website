<script setup lang="ts">
import IconBrazil from '@/components/icons/IconBrazil.vue'
import IconUsa from '@/components/icons/IconUsa.vue'
import ModelViewer from '@/components/ModelViewer.vue'
import { useI18n } from 'vue-i18n'
const { t, locale } = useI18n()
</script>

<template>
  <main>
    <section class="space-y-8 max-w-xl">
      <div class="flex space-x-4">
        <IconBrazil @click="locale = 'pt-BR'" class="cursor-pointer" />
        <IconUsa @click="locale = 'en-US'" class="cursor-pointer" />
      </div>

      <h1 class="text-7xl font-serif">{{ t('hello') }}</h1>

      <h2 class="text-4xl tracking-tight font-serif">{{ t('intro') }}</h2>

      <i18n-t keypath="whoami" tag="p">
        <template v-slot:perkinswill>
          <a href="https://perkinswill.com" target="_blank">Perkins&Will</a>
        </template>
        <template v-slot:shl>
          <a href="https://shl.dk" target="_blank">Schmidt Hammer Lassen</a>
        </template>
      </i18n-t>

      <p>{{ t('journey') }}</p>

      <i18n-t keypath="references" tag="p">
        <template v-slot:github>
          <a href="http://github.com/vwnd" target="_blank" rel="noopener noreferrer">Github</a>
        </template>

        <template v-slot:linkedin>
          <a href="https://www.linkedin.com/in/victorwanderley/" target="_blank">LinkedIn</a>
        </template>
      </i18n-t>
    </section>
    <ModelViewer />
  </main>
</template>
