<template>
  <div
    class="w-full h-full relative min-h-[400px] border border-gray-200 rounded-xl"
  >
    <Transition>
      <div class="flex justify-center items-center h-full" v-if="isLoading">
        <span>
          <NumberFlow :value="loadingProgress" class="text-7xl" /> %
        </span>
      </div>
    </Transition>
    <div ref="canvasRef" class="h-full w-full absolute top-0 left-0" />
  </div>
</template>

<script setup lang="ts">
import NumberFlow from "@number-flow/vue";
import {
  CameraController,
  DefaultViewerParams,
  FilteringExtension,
  LoaderEvent,
  SelectionExtension,
  SpeckleLoader,
  StencilOutlineType,
  UrlHelper,
  Viewer,
  ViewMode,
  ViewModes,
  type SelectionExtensionOptions,
} from "@speckle/viewer";
import { hexToArgb } from "hex-argb-converter";
import { onMounted, ref, watchEffect } from "vue";

const isLoading = ref(true);
const loadingProgress = ref(0);

const canvasRef = ref<HTMLDivElement | null>(null);
const props = withDefaults(
  defineProps<{
    objects?: string[];
  }>(),
  {
    objects: () => [],
  }
);

const initViewer = async () => {
  if (!canvasRef.value) return;

  const params = DefaultViewerParams;

  const viewer = new Viewer(canvasRef.value, params);
  await viewer.init();
  const camera = viewer.createExtension(CameraController);
  const selection = viewer.createExtension(SelectionExtension);

  const selectionColor = hexToArgb("#222831");

  const selectionOptions: SelectionExtensionOptions = {
    selectionMaterialData: {
      id: crypto.randomUUID(),
      color: selectionColor,
      emissive: 0x0,
      opacity: 0.7,
      roughness: 1,
      metalness: 0,
      vertexColors: false,
      lineWeight: 1,
      stencilOutlines: StencilOutlineType.NONE,
      pointSize: 4,
    },
  };

  selection.options = selectionOptions;

  const filtering = viewer.createExtension(FilteringExtension);
  const viewModes = viewer.createExtension(ViewModes);
  const labelling = viewer.createExtension(Labelling);

  viewModes.setViewMode(ViewMode.DEFAULT_EDGES);

  camera.setOrthoCameraOn();

  const urls = await UrlHelper.getResourceUrls(
    "https://app.speckle.systems/streams/298f099115/objects/c17242551524d48c51b77633bbdb55a5"
  );
  for (const url of urls) {
    const loader = new SpeckleLoader(viewer.getWorldTree(), url, "");

    loader.on(LoaderEvent.LoadProgress, ({ progress }) => {
      useDebounceFn(() => {
        loadingProgress.value = parseInt((progress * 100).toFixed(0));
      }, 200)();
    });

    await viewer.loadObject(loader, false);
  }

  watchEffect(() => {
    camera.setCameraView(props.objects, true, 0.8);
    if (props.objects.length > 0) {
      filtering.resetFilters();
      filtering.isolateObjects(props.objects);

      if (props.objects[0] === "da0219f3ec079c3ec6f9ea77c33c735c") {
        labelling.labelObjectArea(props.objects[0]);
      } else {
        labelling.cleanLabels();
      }
    } else {
      filtering.resetFilters();
      labelling.cleanLabels();
    }
  });
};

onMounted(async () => {
  await initViewer();
  isLoading.value = false;
});
</script>

<style scoped></style>
