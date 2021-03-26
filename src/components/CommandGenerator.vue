<template>
  <div>
    <my-section bottom>
      <command-result
        :command="command"
        :hasError="hasError"
        :copyCommand="copyCommand"
        :copyShareLink="copyShareLink"
      />
      <checkbox v-model="useLongFlags" label="Use long flags" />
    </my-section>

    <my-section bottom>
      <text-field
        v-model="state.imageId"
        placeholder="Image"
        class="full-w"
        :error="!isValidImage ? 'Invalid image' : ''"
      />
    </my-section>

    <my-section bottom>
      <checkbox class="mb-1" v-model="state.detach" label="Detach" />
      <checkbox
        class="mb-1"
        v-model="state.disableHealthcheck"
        label="Disable health check"
      />
      <checkbox
        class="mb-1"
        v-model="state.disableOOMKiller"
        label="Disable OOM Killer"
      />
      <checkbox class="mb-1" v-model="state.interactive" label="Interactive" />
      <checkbox class="mb-1" v-model="state.privileged" label="Privileged" />
      <checkbox class="mb-1" v-model="state.readOnly" label="Read-only" />
      <checkbox
        class="mb-1"
        v-model="state.autoRemoveContainer"
        label="Remove the container when it exits"
      />
      <checkbox class="mb-1" v-model="state.tty" label="TTY" />
    </my-section>

    <my-section bottom>
      <text-field
        class="mb-3 full-w"
        v-model="state.containerCommand"
        placeholder="Command (optional)"
      />
      <text-field
        class="mb-3 full-w"
        v-model="state.containerName"
        placeholder="Container name"
        label="Container name (optional)"
      />
      <text-field
        class="mb-3 full-w"
        v-model="state.envFile"
        placeholder="Environment file"
        label="Environment file (optional)"
      />
      <text-field
        class="mb-3 full-w"
        v-model="state.mount"
        placeholder="Mount"
        label="Mount (optional)"
      />
      <text-field
        class="mb-3 full-w"
        v-model="state.pullPolicy"
        placeholder="Pull policy"
        label="Pull policy (optional)"
        hint="Values: always, missing, never"
        :error="!isValidPullPolicy ? 'Invalid pull policy' : ''"
      />
      <text-field
        class="mb-3 full-w"
        v-model="state.restartPolicy"
        placeholder="Restart policy"
        label="Restart policy (optional)"
        hint="Values: no, unless-stopped, always, on-failure[:max-retries]"
        :error="!isValidRestartPolicy ? 'Invalid restart policy' : ''"
      />
      <text-field
        class="mb-3 full-w"
        v-model="state.workDir"
        placeholder="Working directory (optional)"
        label="Working directory (optional)"
      />
    </my-section>

    <my-section bottom>
      <div class="flex align-center mb-3">
        <div class="label mr-2">Volumes</div>
        <my-button
          color="#5e81ac"
          style="color: #fafafa"
          @click="
            state.volumes.push({
              value: 'host:container',
              id: Math.random().toString(36),
            })
          "
        >
          Add
        </my-button>
      </div>
      <div v-for="(volume, i) in state.volumes" :key="volume.id">
        <div class="mb-3 flex align-center full-w">
          <text-field
            hide-label
            v-model="state.volumes[i].value"
            placeholder="Value"
          />
          <div style="flex-grow: 1"></div>
          <my-button color="#bf616a" @click="state.volumes.splice(i, 1)">
            Remove
          </my-button>
        </div>
      </div>
    </my-section>

    <my-section bottom>
      <div class="mb-3 flex align-center">
        <div class="label mr-2">Ports</div>
        <my-button
          color="#5e81ac"
          style="color: #fafafa"
          @click="
            state.ports.push({
              value: 'host:container',
              id: Math.random().toString(36),
            })
          "
        >
          Add
        </my-button>
      </div>
      <div v-for="(port, i) in state.ports" :key="port.id">
        <div class="flex align-center full-w mb-3">
          <text-field
            hide-label
            v-model="state.ports[i].value"
            placeholder="Value"
          />
          <div style="flex-grow: 1"></div>
          <my-button color="#bf616a" @click="state.ports.splice(i, 1)">
            Remove
          </my-button>
        </div>
      </div>
    </my-section>

    <my-section bottom>
      <div class="mb-3 flex align-center">
        <div class="label mr-2">Environment variables</div>
        <my-button
          color="#5e81ac"
          style="color: #fafafa"
          @click="
            state.envVars.push({
              key: '',
              value: '',
              id: Math.random().toString(36),
            })
          "
          >Add</my-button
        >
      </div>
      <div v-for="(envVar, i) in state.envVars" :key="envVar.id">
        <div class="mb-3 flex align-center full-w">
          <text-field
            hide-label
            v-model="envVar.key"
            placeholder="Key"
            class="mr-2"
          />
          <text-field hide-label v-model="envVar.value" placeholder="Value" />
          <div style="flex-grow: 1"></div>
          <my-button color="#bf616a" @click="state.envVars.splice(i, 1)">
            Remove
          </my-button>
        </div>
      </div>
    </my-section>

    <my-section bottom>
      <command-result
        :command="command"
        :hasError="hasError"
        :copyCommand="copyCommand"
        :copyShareLink="copyShareLink"
      />
      <checkbox v-model="useLongFlags" label="Use long flags" />
    </my-section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useGenerator } from "../generator";
import CommandResult from "./CommandResult.vue";

export default defineComponent({
  name: "CommandGenerator",
  components: {
    CommandResult,
  },
  setup() {
    return useGenerator();
  },
});
</script>

<style lang="scss">
label,
.label {
  font-size: 1.1rem;
  font-family: monospace;
  opacity: 0.66;
}

.code-block {
  background: #3b4252;
  padding: 12px;
  border-radius: 5px;
  font-family: monospace;
  font-size: 1.15rem;
  color: #fafafa;
  overflow: hidden;
}

.icon {
  width: 24px;
  height: 24px;
  cursor: pointer;
  fill: #fafafa;
}
</style>
