import Vue from 'vue'
import Vuex from 'vuex'
import LineClass from './classes/LineClass';
import focus from "./util/focus.js";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lines: [],
    image: "",
    version: "1.3"
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
      this.commit("push", new LineClass("$> " + input));
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
      const delay = block.isLong ? 500 : 40;
      const lines = block.lines;
      const callback = block.callback;
      const progress = block.progress;
      const currentLine = lines[progress];

      setTimeout(() => {
        if (progress >= lines.length) {
          if (callback) {callback()}
          return;
        }
        this.commit("push", currentLine);
        if (lines.length < 40) {
          focus();
        }

        // focus();
        
        // new recursive call
        block.progress++;
        this.dispatch("pushBlock", block);
      }, delay);
    },
    clear () {
      this.commit("popAll");
    }
  }
})
