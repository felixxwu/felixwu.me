<template>
  <div id="app" lang="en" v-bind:style="{width, height}">
    <cli></cli>
  </div>
</template>

<script>
import cli from "./components/cli.vue";
import store from "./store.js";
// import logic from "./static/logic.js";
import commands from "./static/commands.js";
import LineClass from "./classes/LineClass.js";
import Block from "./classes/Block.js";
import config from './config'

export default {
  name: "app",
  components: {
    cli
  },
  store,
  data() {
    return {
      history: [],
      selectedHistory: 0,
      width: "500px",
      height: "50vh",
    }
  },
  created() {
    this.resizeAfterDelay()
    this.startFlashingPlaceholder()
    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowUp") this.upArrowHandler()
      if (e.key === "ArrowDown") this.downArrayHandler()
      if (e.key === "Tab") this.tabHandler(e)
    })
  },
  methods: {
    peformLogic(input) {
      this.history.push(input);
      this.selectedHistory = 0;
      if (commands[input]) {
        // store.dispatch("clear");
        store.commit("submitInput", input);
        setTimeout(() => {
          commands[input]();
        }, 300);
      } else {
        store.commit("submitInput", input);
        commands.unrecognised(input);
      }
    },
    upArrowHandler() {
      if (this.selectedHistory >= this.history.length) return;
      this.selectedHistory++;
      const input = document.getElementById("input");
      const value = this.history[this.history.length - this.selectedHistory];
      value & (input.value = value);
    },
    downArrayHandler() {
      if (this.selectedHistory <= 0) return;
        this.selectedHistory--;
        const input = document.getElementById("input");
        const value = this.selectedHistory === 0 ?
          "" :
          this.history[this.history.length - this.selectedHistory]
        input.value = value;
    },
    tabHandler(e) {
      e.preventDefault();
      const input = document.getElementById("input");
      const suggestions = commands.KEYS().filter(key => key.startsWith(input.value));
      if (suggestions.length === 1) {
        input.value = suggestions[0];
      }
      if (suggestions.length > 1) {
        const value = input.value;
        store.commit("submitInput", value);
        store.dispatch("pushBlock", new Block({
          lines: [
            new LineClass(suggestions.join(", ")),
            new LineClass(value, "input")
          ]
        }))
      }
    },
    resizeAfterDelay() {
      setTimeout(() => {
          this.width = "900px";
          this.height = "92vh";
      }, 3100)
    },
    startFlashingPlaceholder() {
      setInterval(() => {
        const input = document.getElementById("input");
        if (!input || !document.hasFocus()) return
        input.placeholder = config.placeholderSymbol
        setTimeout(() => {
          input.placeholder = ""
        }, config.placeholderFlashInterval);
      }, config.placeholderFlashInterval * 2)
    }
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lexend+Deca&display=swap');

* {
  --black: hsl(30, 1%, 15%);
  --black-lighter: hsl(30, 5%, 22%);
  --white: hsl(30, 30%, 90%);
  --blue: hsl(240, 100%, 85%);
  --font-size: 17px;
  font-family: monospace;
  hyphens: manual;
  -ms-hyphens: manual;
  -moz-hyphens: manual;
  -webkit-hyphens: manual;
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
  word-break: break-word;
  max-width: 100vw;
  box-shadow: 0 0 40px var(--black);
  overflow-y: scroll;
  transition: 0.3s;
}

::-webkit-scrollbar {
  width: 15px;
}

/* Track */
::-webkit-scrollbar-track {
  background: var(--black);
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: var(--black-lighter);
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

h1 {
  margin: 0;
  font-size: 50px;
  font-weight: 100;
  /* font-family: 'Unica One', sans-serif; */
  font-family: 'Lexend Deca', sans-serif;
}

hr {
    border: 0;
    border-bottom: 1px solid var(--white);
    margin-top: 0;
    margin-bottom: 0;
    height: 10px;
}

html {
  overflow-x: hidden;
}

@media only screen and (max-width: 900px) {
  #app {
    border: none;
    border-radius: 0;
    grid-area: initial;
    width: 100vw !important;
    height: 100vh !important;
  }
}
</style>
