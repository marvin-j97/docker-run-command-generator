<template>
  <div class="label mb-1">Result</div>
  <div class="flex align-center code-block mb-1">
    <div :class="{ hover: !hasError }" @click="copy">
      {{ hasError ? "Could not generate output: invalid inputs" : command }}
    </div>
    <div style="flex-grow: 1"></div>
    <div class="ml-1" style="height: 24px" @click="() => copyShareLink()">
      <svg
        class="icon hover"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    command: {
      type: String,
      required: true,
    },
    hasError: {
      type: Boolean,
      required: true,
    },
    copyCommand: {
      type: Function,
      required: true,
    },
    copyShareLink: {
      type: Function,
      required: true,
    },
  },
  setup(props) {
    function copy() {
      if (props.hasError) {
        return;
      }

      props.copyCommand();
    }

    return { copy };
  },
});
</script>
