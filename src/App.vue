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
* {
  --black: #222222;
  --black-lighter: #333333;
  --white: #eeeeee;
  --blue: #b1b1ff;
  --font-size: 15px;
  font-family: 'Source Code Pro', monospace;
}

html {
  height: 100%;
}

body {
  background-color: var(--white);
  margin: 0;
  height: 100%;
  overflow: hidden;
  display: grid;
  grid-template-areas:
    '. . .'
    '. mid .'
    '. . .';
  grid-template-columns: 1fr auto 1fr;
  grid-template-rows: 1fr auto 1fr;
}

#app {
  border-top: solid var(--black-lighter) 25px;
  border-radius: 4px;
  grid-area: mid;
  background-color: var(--black);
  color: var(--white);
  font-size: var(--font-size);
  overflow-wrap: break-word;
  height: 88vh;
  width: 800px;
  max-width: 100vw;
  box-shadow: 0 0 80px var(--black);
  overflow-y: scroll;
}

h1 {
  margin: 0;
  font-size: 70px;
  font-weight: 100;
  font-family: 'Unica One', sans-serif;
}

html {
  overflow-x: hidden;
}

@media only screen and (max-width: 800px) {
  #app {
    border: none;
    border-radius: 0;
    grid-area: initial;
    width: 100vw;
    height: 100vh;
  }
}
</style>
