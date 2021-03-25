import { createApp } from "vue";
import App from "./App.vue";

import Button from "./components/Button.vue";
import Checkbox from "./components/Checkbox.vue";
import TextField from "./components/TextField.vue";

const app = createApp(App);

app.component("MyButton", Button);
app.component("Checkbox", Checkbox);
app.component("TextField", TextField);

app.mount("#app");
