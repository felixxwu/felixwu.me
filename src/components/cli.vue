<template>
    <div id="cli">
        <div v-for="(line, index) in lines" v-bind:key="index">
            <LineComponent :class="line.type" :line="line"></LineComponent>
        </div>
        <div id="popup" v-if="image != ''">
            <img v-if="image == 'room_acoustics.jpg'" src="../assets/room_acoustics.jpg">
            <img v-if="image == 'trapit.jpg'" src="../assets/trapit.jpg">
            <img v-if="image == 'vdgs.jpg'" src="../assets/vdgs.jpg">
            <img v-if="image == 'hyped.jpg'" src="../assets/hyped.jpg">
            <img v-if="image == 'noxive.jpg'" src="../assets/noxive.jpg">
            <img v-if="image == 'noxive.com.jpg'" src="../assets/noxive.com.jpg">
            <img v-if="image == 'second_wind.jpg'" src="../assets/second_wind.jpg">
            <img v-if="image == 'naughts_and_crosses.jpg'" src="../assets/naughts_and_crosses.jpg">
            <img v-if="image == 'flat_app.jpg'" src="../assets/flat_app.jpg">
            <img v-if="image == 'owme.jpg'" src="../assets/owme.jpg">
            <img v-if="image == 'music_generator.jpg'" src="../assets/music_generator.jpg">
            <img v-if="image == 'chord_generator.jpg'" src="../assets/chord_generator.jpg">
            <img v-if="image == 'sudoku.jpg'" src="../assets/sudoku.jpg">
            <img v-if="image == 'android_alarm.jpg'" src="../assets/android_alarm.jpg">
            <img v-if="image == 'encrypted_chat.jpg'" src="../assets/encrypted_chat.jpg">
            <div id="close" v-on:click="close"></div>
        </div>
    </div>
</template>

<script>
import LineComponent from "./LineComponent.vue";

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
        }
    },
}
</script>

<style scoped>
#cli {
    padding: 10px;
}

@media only screen and (max-width: 900px) {
  #cli {
      padding-bottom: 100px;
  }
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
    max-width: 93vw;
    max-height: 80vh;
    grid-area: mid;
    box-shadow: black 0 0 100px;
    border-radius: 10px;
}

#close {
    position: fixed;
    width: 100%;
    height: 100%;
    cursor: zoom-out;
    display: block;
}
</style>

