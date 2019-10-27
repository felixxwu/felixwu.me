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
import LineClass from "./classes/LineClass.js";
import Block from "./classes/Block.js";

export default {
  name: "app",
  components: {
    cli
  },
  store,
  data() {
    return {
      history: [],
      selectedHistory: 0
    }
  },
  created() {
    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowUp") {
        if (this.selectedHistory >= this.history.length) return;
        this.selectedHistory++;
        const input = document.getElementById("input");
        const value = this.history[this.history.length - this.selectedHistory];
        value & (input.value = value);
      }
      if (e.key === "ArrowDown") {
        if (this.selectedHistory <= 0) return;
        this.selectedHistory--;
        const input = document.getElementById("input");
        const value = this.selectedHistory === 0 ? "" :
          this.history[this.history.length - this.selectedHistory]
        input.value = value;
      }
      if (e.key === "Tab") {
        e.preventDefault();
        const input = document.getElementById("input");
        const suggestions = commands.KEYS().filter(key => key.startsWith(input.value));
        if (suggestions.length === 1) {
          input.value = suggestions[0];
        }
        if (suggestions.length > 1) {
          const value = input.value;
          store.commit("submitInput", value);
          store.dispatch("pushBlock", new Block(
            [
              new LineClass(suggestions.join(", ")),
              new LineClass(value, "input")
            ]
          ))
        }
      }
    })
  },
  methods: {
    peformLogic(input) {
      this.history.push(input);
      this.selectedHistory = 0;
      store.commit("submitInput", input);
      if (logic[input]) {
        logic[input]();
      } else if (commands[input]) {
        commands.clear();
        commands[input]();
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
  --white: #dddddd;
  --blue: #b1b1ff;
  --font-size: 17px;
  font-family: monospace;
  /* font-family: 'Source Code Pro', monospace; */
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
  height: 92vh;
  width: 900px;
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

@media only screen and (max-width: 900px) {
  #app {
    border: none;
    border-radius: 0;
    grid-area: initial;
    width: 100vw;
    height: 100vh;
  }
}
</style>
