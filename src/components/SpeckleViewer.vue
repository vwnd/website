<template>
  <div class="w-full h-full relative min-h-[400px] border border-gray-200 rounded-4xl">
    <div class="flex justify-center items-center h-full" v-if="isLoading">Loading...</div>
    <div ref="canvasRef" class="h-full w-full absolute top-0 left-0" />
  </div>
</template>

<script setup lang="ts">
import {
  CameraController,
  DefaultViewerParams,
  FilteringExtension,
  SelectionExtension,
  SpeckleLoader,
  UrlHelper,
  Viewer,
  ViewMode,
  ViewModes,
} from '@speckle/viewer'
import { onMounted, ref, watchEffect } from 'vue'

const isLoading = ref(true)
const canvasRef = ref<HTMLDivElement | null>(null)
const props = withDefaults(
  defineProps<{
    objects?: string[]
  }>(),
  {
    objects: () => [],
  },
)

const initViewer = async () => {
  if (!canvasRef.value) return

  const params = DefaultViewerParams

  const viewer = new Viewer(canvasRef.value, params)
  await viewer.init()
  const camera = viewer.createExtension(CameraController)
  viewer.createExtension(SelectionExtension)
  const filtering = viewer.createExtension(FilteringExtension)
  const viewModes = viewer.createExtension(ViewModes)

  viewModes.setViewMode(ViewMode.DEFAULT_EDGES)

  camera.setOrthoCameraOn()

  const urls = await UrlHelper.getResourceUrls(
    'https://app.speckle.systems/streams/298f099115/objects/c17242551524d48c51b77633bbdb55a5',
  )
  for (const url of urls) {
    const loader = new SpeckleLoader(viewer.getWorldTree(), url, '')
    await viewer.loadObject(loader, false)
  }

  watchEffect(() => {
    camera.setCameraView(props.objects, true, 0.8)
    if (props.objects.length > 0) {
      filtering.resetFilters()
      filtering.isolateObjects(props.objects)
    } else {
      filtering.resetFilters()
    }
  })
}

onMounted(async () => {
  await initViewer()
  isLoading.value = false
})
</script>

<style scoped></style>
