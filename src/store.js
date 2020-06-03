import Vue from 'vue'
import Vuex from 'vuex'
import LineClass from './classes/LineClass';
import focus from "./util/focus.js";
import config from "./config.js";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lines: [],
    image: "",
    version: config.version
  },
  mutations: {
    push (state, line) {
      state.lines.push(line);
    },
    pop (state) {
      state.lines.pop();
    },
    submitInput (state, input) {
      this.commit("pop");
      this.commit("push", new LineClass(config.promptSymbols + input));
    },
    popAll (state) {
      while (state.lines.pop() != null);
    },
    setImage(state, image) {
      state.image = image;
    }
  },
  actions: {
    pushBlock (context, block) {
      const delay = block.isLong ? config.slowBlockDelay : config.fastBlockDelay;
      const lines = block.lines;
      const callback = block.callback;
      const progress = block.progress;
      const currentLine = lines[progress];

      const delayMultiplier = currentLine ? 
        currentLine.text.length / config.expectedLineWidth + 1 :
        1;
      
      if (block.clear && progress == 0) {
        // document.getElementById('app').scrollTop = document.getElementById('app').scrollHeight
        // this.commit("popAll");
      }

      clearTimeout(context.state.timeout)

      context.state.timeout = setTimeout(() => {
        if (progress >= lines.length) {
          if (callback) {callback()}
          return;
        }
        this.commit("push", currentLine);

        // on mobile don't focus, or the keyboard will pop up every time
        // if (screen.width > 600 || block.focusAll) {
        //   focus();
        // }
        if (!block.clear) {
          focus();
        }

        // new recursive call
        block.progress++;
        this.dispatch("pushBlock", block);
      }, delay * delayMultiplier);
    },
    clear() {
      this.commit("popAll");
    }
  }
})
