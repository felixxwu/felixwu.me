<template>
  <div
    id="app"
    :style="config.cssVars"
  >
    <Header id="header"></Header>

    <Category
      v-for="(category, index) in this.categories" :key="index"
      :catNo="index"
      :category="category"
    ></Category>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Category from './components/Category'
import config from './components/config'
import data from './data/data'

export default {
  name: 'app',
  components: {
    Header,
    Category
  },
  data() {
    return {
      config: config,
      categories: data.categories
    }
  },
}
</script>

<style>
#app {
  /* background-color: rgb(29, 29, 34); */
  animation: bg var(--loop) infinite;
  animation-timing-function: linear;
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  padding-top: 60px;
  padding-bottom: 300px;
  color: var(--black);
}

@keyframes bg {
  0%   { background-color: hsl(400,   var(--sat), var(--light)) }
  10%  { background-color: hsl(370,   var(--sat), var(--light)) }
  20%  { background-color: hsl(340,   var(--sat), var(--light)) }
  30%  { background-color: hsl(310,   var(--sat), var(--light)) }
  40%  { background-color: hsl(280,   var(--sat), var(--light)) }
  50%  { background-color: hsl(250,   var(--sat), var(--light)) }
  60%  { background-color: hsl(220,   var(--sat), var(--light)) }
  70%  { background-color: hsl(190,   var(--sat), var(--light)) }
  80%  { background-color: hsl(160,   var(--sat), var(--light)) }
  100% { background-color: hsl(40,    var(--sat), var(--light)) }
}

#header {
  margin-bottom: 50px;
}

.header {
  padding: var(--titlePadding);
  font-size: var(--headerSize);
  font-family: 'Unica One', cursive;
  letter-spacing: var(--letterSpacing);
  margin-left: var(--letterSpacing);
  color: var(--white);
  text-transform: uppercase;
}

a {
  font-weight: bold;
  text-decoration: none;
  font-style: italic;
}
</style>
