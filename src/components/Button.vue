<template>
  <button
    class="button hover"
    :style="{ 'background-color': color || '#505050' }"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    color: {
      required: false,
      type: String,
    },
  },
});
</script>

<style>
.button {
  padding: 7px 8px 7px 8px;
  appearance: none;
  border: none;
  display: inline-block;
  font-size: 1rem;
  font-family: monospace;
  border-radius: 4px;
  min-width: 50px;
}
</style>
