<template>
    <a v-if="line.type == 'command'" v-on:click="commandClick">> {{line.text}}</a>
    <a v-else-if="line.type == 'image'" v-on:click="imageClick">{{line.text}} &#10063;</a>
    <a v-else-if="line.type == 'link'" :href="line.text" target="_blank">{{line.text}} &#8599;</a>
    <span v-else-if="line.type == 'text'">{{line.text}}</span>
    <span v-else-if="line.type == 'input'">
        $> 
        <form v-on:submit.prevent="handleSubmit" autocomplete="off">
            <input id="input">
        </form>
    </span>
</template>

<script>
import LineClass from '../classes/LineClass.js';
import store from "../store.js";

export default {
    name: 'LineComponent',
    props: {
        line: LineClass
    },
    methods: {
        handleSubmit: function () {
            const input = document.getElementById("input").value;
            this.$parent.$parent.peformLogic(input);
        },
        commandClick: function (event) {
            const text = event.target.outerText;
            this.$parent.$parent.peformLogic(text.substring(2));
        },
        imageClick: function(event) {
            const text = event.target.outerText;
            store.commit("setImage", text.substring(0, text.length - 2));
            // console.log(text);
            
            // popup.image = "images/" + text.substring(0, text.length - 2);
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input, form {
    background-color: var(--black);
    border: none;
    font-family: 'Source Code Pro', monospace;
    color: var(--white);
    font-size: var(--font-size);
    width: calc(100% - var(--font-size) * 3);
    display: inline-block;
}

input:focus {
    outline: none;
}

a {
    color: #b1b1ff;
    cursor: pointer;
    /* text-decoration: underline; */
}

a:hover {
    color: var(--white);
}
</style>
