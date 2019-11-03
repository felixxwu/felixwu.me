<template>
    <a class="cmd" v-if="line.type == 'command'" v-on:click="commandClick">{{cmdbefore+line.text+cmdafter}}</a>
    <a v-else-if="line.type == 'image'" v-on:click="imageClick">{{imgbefore+line.text+imgafter}}</a>
    <a v-else-if="line.type == 'link'" :href="line.text" target="_blank">{{lnkbefore+line.text+lnkafter}}</a>
    <h1 v-else-if="line.type == 'h1'">{{line.text}}</h1>
    <b v-else-if="line.type == 'bold'">{{line.text}}</b>
    <span v-else-if="line.type == 'text'">{{line.text}}</span>
    <span v-else-if="line.type == 'input'">
        {{prompt}}
        <form v-on:submit.prevent="handleSubmit" autocomplete="off">
            <input id="input" :value="line.text">
            <!-- <input id="input" placeholder="_"> -->
        </form>
    </span>
</template>

<script>
import LineClass from '../classes/LineClass.js';
import store from "../store.js";
import config from "../config.js";

export default {
    name: 'LineComponent',
    props: {
        line: LineClass
    },
    data() {
        return {
            cmdbefore: config.commandIconBefore,
            cmdafter: config.commandIconAfter,
            imgbefore: config.imageIconBefore,
            imgafter: config.imageIconAfter,
            lnkbefore: config.linkIconBefore,
            lnkafter: config.linkIconAfter,
            prompt: config.promptSymbols,
        }
    },
    methods: {
        handleSubmit: function () {
            const input = document.getElementById("input").value.toLowerCase();
            this.$parent.$parent.peformLogic(input);
        },
        commandClick: function (event) {
            let text = event.target.innerText;

            // gets text without the icons before / after
            text = text.substring(
                config.commandIconBefore.length, 
                text.length - config.commandIconAfter.length
            );
            this.$parent.$parent.peformLogic(text);
        },
        imageClick: function(event) {
            let text = event.target.innerText;

            // gets text without the icons before / after
            text = text.substring(
                config.imageIconBefore.length,
                text.length - config.imageIconAfter.length
            )
            store.commit("setImage", text);
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input, form {
    background-color: var(--black);
    border: none;
    font-family: monospace;
    /* font-family: 'Source Code Pro', monospace; */
    color: var(--white);
    font-size: var(--font-size);
    width: calc(100% - var(--font-size) * 3);
    display: inline-block;
    text-transform: lowercase;
}

input:focus {
    outline: none;
}

a {
    color: var(--blue);
    cursor: pointer;
    /* text-decoration: underline; */
}

a:hover {
    color: var(--white);
}

.cmd {
    font-style: italic;
}
</style>
