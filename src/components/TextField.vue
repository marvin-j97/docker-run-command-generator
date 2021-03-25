<template>
  <div>
    <div
      v-if="!hideLabel"
      class="label"
      style="margin-bottom: 5px; position: relative"
    >
      {{ label || placeholder }}
    </div>
    <input
      class="code-block"
      type="text"
      v-model="innerValue"
      :placeholder="placeholder"
      @input="updateByEvent"
      style="width: 100%"
    />
    <div class="hint" v-if="hint">{{ hint }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch, toRefs } from "vue";

export default defineComponent({
  props: {
    modelValue: {
      required: true,
      type: String,
    },
    label: {
      required: false,
      type: String,
    },
    hint: {
      required: false,
      type: String,
    },
    hideLabel: {
      required: false,
      type: Boolean,
      default: false,
    },
    placeholder: String,
  },
  setup(props, { emit }) {
    const { modelValue } = toRefs(props);

    const innerValue = ref(modelValue.value);

    function update(value: string) {
      emit("update:modelValue", value);
    }

    function updateByEvent(event: Event) {
      // @ts-ignore
      update(event.target.value);
    }

    watch(modelValue, (value) => (innerValue.value = value));

    return { innerValue, update, updateByEvent };
  },
});
</script>

<style>
.hint {
  margin-top: 4px;
  font-size: 1rem;
  font-family: monospace;
  opacity: 0.4 !important;
}
</style>
