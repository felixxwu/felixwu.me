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
  --black: #222222;
  --white: #eeeeee;
  --blue: #b1b1ff;
  --font-size: 15px;
  background-color: var(--black);
  color: var(--white);
  font-family: 'Source Code Pro', monospace;
  font-size: var(--font-size);
  margin-bottom: 30px;
  overflow-wrap: break-word;
}

html {
  overflow-x: hidden;
}

</style>
