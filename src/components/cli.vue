<template>
    <div id="cli">
        <div v-for="(line, index) in lines" v-bind:key="index">
            <LineComponent :line="line"></LineComponent>
        </div>
        <div id="popup" v-if="image != ''">
            <img v-if="image == 'room_acoustics.jpg'" src="../assets/room_acoustics.jpg">
            <img v-if="image == 'trapit.jpg'" src="../assets/trapit.jpg">
            <img v-if="image == 'second_wind.jpg'" src="../assets/second_wind.jpg">
            <div id="close" v-on:click="close"></div>
        </div>
    </div>
</template>

<script>
import LineComponent from "./LineComponent.vue";
import focus from "../util/focus.js";

export default {
    name: "cli",
    components: {
        LineComponent
    },
    computed: {
        lines () {
            return this.$store.state.lines;
        },
        image () {
            return this.$store.state.image;
        }
    },
    methods: {
        close () {
            this.$store.commit("setImage", "");
            focus();
        }
    },
}
</script>

<style scoped>
#cli {
    margin-bottom: 31px;
}

#cli > div {
  min-height: 20px;
}

#popup {
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
    position: fixed;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-areas:
        ". . ."
        ". mid ."
        ". . .";
    grid-template-columns: 1fr auto 1fr;
    grid-template-rows: 1fr auto 1fr;
}

#popup > img {
    max-width: 70vw;
    max-height: 70vh;
    grid-area: mid;
    box-shadow: black 0 0 100px;
    border-radius: 10px;
}

#close {
    position: fixed;
    width: 100%;
    height: 100%;
    cursor: pointer;
    display: block;
}
</style>

