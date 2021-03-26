<template>
  <div style="display: flex; align-items: center" @click="update(!modelValue)">
    <input style="margin-right: 8px" type="checkbox" v-model="innerValue" />
    <label>{{ label }}</label>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch, toRefs } from "vue";

export default defineComponent({
  props: {
    modelValue: Boolean,
    label: String,
  },
  setup(props, { emit }) {
    const { modelValue } = toRefs(props);

    const innerValue = ref(modelValue.value);

    function update(value: boolean) {
      emit("update:modelValue", value);
    }

    watch(modelValue, (value) => (innerValue.value = value));

    return { innerValue, update };
  },
});
</script>
