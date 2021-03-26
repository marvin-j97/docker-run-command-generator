<template>
  <div>
    <div v-if="!hideLabel" class="label mb-1">
      {{ label || placeholder }}
    </div>
    <input
      spellcheck="false"
      class="code-block full-w"
      type="text"
      v-model="innerValue"
      :placeholder="placeholder"
      @input="updateByEvent"
      :class="{ error }"
    />
    <div v-if="error" class="mt-0 error-message">
      {{ error }}
    </div>
    <div v-else-if="hint" class="mt-0 hint">
      {{ hint }}
    </div>
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
    error: {
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

    function updateByEvent(ev: any) {
      const event = <KeyboardEvent>ev;
      update((<HTMLInputElement>event.target).value);
    }

    watch(modelValue, (value) => (innerValue.value = value));

    return { innerValue, update, updateByEvent };
  },
});
</script>

<style lang="scss" scoped>
@import "../colors.scss";
@import "../layout.scss";

.error-message {
  color: $nord11 !important;
  font-size: 1rem;
  font-family: monospace;
}

.hint {
  font-size: 1rem;
  font-family: monospace;
  opacity: 0.4 !important;
}

input textarea,
input {
  outline: none;
  transition: background-color 0.1s ease-in-out, border-color 0.1s ease-in-out,
    filter 0.1s ease-in-out;
  border: none;
  border-left: 4px solid transparent;

  &.error {
    border-left: 4px solid $nord11;
  }

  &:focus {
    background-color: $nord0;
  }

  &:hover {
    filter: brightness(1.1);
  }
}
</style>
