<template>
  <div id="app">
    <cli></cli>
  </div>
</template>

<script>
import cli from "./components/cli.vue";
import store from "./store.js";
import logic from "./static/logic.js";
import commands from "./static/commands.js";

export default {
  name: "app",
  components: {
    cli
  },
  store,
  methods: {
    peformLogic: (input) => {
      store.commit("submitInput", input);
      if (logic[input]) {
        logic[input]();
      } else {
        commands.unrecognised(input);
      }
    }
  }
};
</script>

<style>
body {
  --black: #2b2b2b;
  --white: #dddddd;
  --font-size: 16px;
  background-color: var(--black);
  color: var(--white);
  font-family: 'Source Code Pro', monospace;
  font-size: var(--font-size);
  margin-bottom: 0;
}
</style>
