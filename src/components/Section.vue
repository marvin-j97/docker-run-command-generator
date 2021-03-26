<template>
  <div class="mt-4 mb-4">
    <hr class="mb-4" v-if="top" />
    <slot />
    <hr class="mt-4" v-if="bottom" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    top: {
      type: Boolean,
      default: false,
      required: false,
    },
    bottom: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
});
</script>
