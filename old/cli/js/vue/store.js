const lines = new Vuex.Store({
    state: {
        lines: []
    },
    mutations: {
        add (state, block) {

            const delay = block.isLong ? 500 : 50;
            const lines = block.lines;
            const callback = block.callback;
            const progress = block.progress;
            const currentLine = lines[progress];

            setTimeout(() => {
                if (progress >= lines.length) {
                    if (callback) {callback()}
                    return;
                }
                state.lines.push(currentLine);
                focus();
                
                // new recursive call
                block.progress++;
                this.commit("add", block);
            }, delay);
        },
        addInputlineToLines (state, input) {
            state.lines.pop();
            state.lines.push(new Line("$> " + input));
        },
        clear (state) {
            while (state.lines.pop() != null);
        }
    }
});
