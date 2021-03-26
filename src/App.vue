<template>
  <header>
    <div class="title">
      <a
        href="https://docs.docker.com/engine/reference/commandline/run"
        target="_blank"
        class="hover"
        >docker run</a
      >
      generator
    </div>
    <div class="flex justify-center">
      <div>
        <a
          style="font-size: 1.1rem"
          href="https://github.com/marvin-j97/docker-run-generator"
          target="_blank"
          class="hover"
        >
          GitHub
        </a>
      </div>
      <div class="ml-1 mr-1" style="opacity: 0.5">|</div>
      <div>
        <a
          style="font-size: 1.1rem"
          href="https://www.buymeacoffee.com/marvin.j97"
          target="_blank"
          class="hover"
          >Donate</a
        >
      </div>
    </div>
  </header>
  <main>
    <div class="content-wrapper">
      <command-generator class="mb-4" />
    </div>
  </main>
  <footer>
    <div>
      <a
        href="https://github.com/marvin-j97/docker-run-generator"
        target="_blank"
        class="hover"
      >
        GitHub
      </a>
    </div>
    <div class="ml-1 mr-1" style="opacity: 0.5">|</div>
    <div>
      <a
        href="https://www.buymeacoffee.com/marvin.j97"
        target="_blank"
        class="hover"
        >Donate
      </a>
    </div>
  </footer>
  <notification />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CommandGenerator from "./components/CommandGenerator.vue";
import Notification from "./components/Notification.vue";

export default defineComponent({
  name: "App",
  components: {
    CommandGenerator,
    Notification,
  },
  setup() {},
});
</script>

<style lang="scss">
@import "./colors.scss";
@import "./spacers.scss";
@import "./layout.scss";

.content-wrapper {
  width: 600px;
}

* {
  box-sizing: border-box;
}

hr {
  @extend .mt-3;
  @extend .mb-3;

  border: 1px solid $nord0;
}

main {
  @extend .flex;
  @extend .justify-center;

  padding: 20px;
}

.title {
  font-family: monospace;
  font-size: 1.5rem;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 15px;
}

a {
  text-decoration: none;
  color: $nord8;
  font-family: monospace;
  font-weight: bold;
}

.hover {
  cursor: pointer;
  transition: filter 0.1s ease-in-out;

  &:hover {
    filter: brightness(0.75);
  }
}

body {
  background: $nord-bg;
  color: $nord6;
  margin: 0;
}

footer {
  @extend .flex;
  @extend .justify-center;
  @extend .align-center;

  padding: 20px;
  background: $nord0;
  text-align: center;

  a {
    font-size: 1.25rem;
  }
}
</style>
