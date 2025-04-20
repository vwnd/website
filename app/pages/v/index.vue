<template>
  <div>Model Viewer</div>
  <input v-model="model" @keyup.enter="addModel" />
  <button @click="addModel">Add Model</button>
  <div>
    {{ state.models }}
  </div>
</template>

<script lang="ts" setup>
const state = reactive<{
  models: string[];
}>({
  models: [],
});

const model = ref<string>("");

const addModel = () => {
  if (model.value.trim() === "") {
    return;
  }
  state.models.push(model.value);
  model.value = "";
};
</script>

<style></style>
