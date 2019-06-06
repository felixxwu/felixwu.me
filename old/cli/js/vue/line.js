const line = Vue.component("clirow", {
    props: ["line"],
    methods: {
        handleSubmit: function (event) {
            const input = document.getElementById("input").value;
            app.peformLogic(input);
        },
        commandClick: function (event) {
            const text = event.target.outerText;
            app.peformLogic(text);
        },
        imageClick: function(event) {
            const text = event.target.outerText;
            popup.image = "images/" + text.substring(0, text.length - 2);
        }
    },
    template: `
        <a v-if="line.type == 'command'" v-on:click="commandClick">{{line.text}}</a>
        <a v-else-if="line.type == 'image'" v-on:click="imageClick">{{line.text}} &#10063;</a>
        <a v-else-if="line.type == 'link'" :href="line.text" target="_blank">{{line.text}} &#8599;</a>
        <span v-else-if="line.type == 'text'">{{line.text}}</span>
        <span v-else-if="line.type == 'input'">
            $> 
            <form v-on:submit.prevent="handleSubmit" autocomplete="off">
                <input id="input"></input>
            </form>
        </span>
    `
})
