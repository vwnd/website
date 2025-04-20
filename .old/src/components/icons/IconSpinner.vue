<template>
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
    <!-- Icon from SVG Spinners by Utkarsh Verma - https://github.com/n3r4zzurr0/svg-spinners/blob/main/LICENSE -->
    <circle cx="4" cy="12" r="1.5" fill="currentColor">
      <animate attributeName="r" dur="0.75s" repeatCount="indefinite" values="1.5;3;1.5"></animate>
    </circle>
    <circle cx="12" cy="12" r="3" fill="currentColor">
      <animate attributeName="r" dur="0.75s" repeatCount="indefinite" values="3;1.5;3"></animate>
    </circle>
    <circle cx="20" cy="12" r="1.5" fill="currentColor">
      <animate attributeName="r" dur="0.75s" repeatCount="indefinite" values="1.5;3;1.5"></animate>
    </circle>
  </svg>
</template>

<script lang="ts">
export default {
  name: 'SvgSpinners3DotsScaleMiddle',
};
</script>
