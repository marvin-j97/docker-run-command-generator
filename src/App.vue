<template>
  <div>
    <div style="display: flex; justify-content: center">
      <div style="width: 500px">
        <h4
          style="font-family: monospace; font-size: 1.5rem; text-align: center"
        >
          <a
            href="https://docs.docker.com/engine/reference/commandline/run"
            target="_blank"
            class="hover"
            style="color: #0df; text-decoration: none"
            >docker run</a
          >
          command generator
        </h4>
        <command-generator style="margin-bottom: 40px" />
      </div>
    </div>
    <div class="footer" style="text-align: center">
      <a
        href="https://github.com/marvin-j97"
        target="_blank"
        class="hover"
        style="
          text-decoration: none;
          color: #0df;
          font-family: monospace;
          font-size: 1.1rem;
          font-weight: bold;
        "
        >Star on GitHub</a
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CommandGenerator from "./components/CommandGenerator.vue";

export default defineComponent({
  name: "App",
  components: {
    CommandGenerator,
  },
});
</script>

<style>
* {
  box-sizing: border-box;
}

.hover {
  width: 24px;
  height: 24px;
  cursor: pointer;
  transition: filter 0.125s ease-in-out;
  fill: #fafafa;
}

.hover:hover {
  filter: brightness(0.75);
}

body {
  background: #111114;
  color: #fafafa;
  margin: 0;
}

.footer {
  padding: 20px;
  background: #222224;
}
</style>
