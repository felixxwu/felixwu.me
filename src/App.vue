<template>
  <div
    id="app"
    :style="config.cssVars"
  >
    <center class="center">
      <Header id="header"></Header>

      <Category
        class="categories"
        v-for="(category, index) in this.categories" :key="index"
        :catNo="index"
        :category="category"
      ></Category>
    </center>
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
  background-color: var(--white);
  /* background-color: rgb(29, 29, 34); */
  /* animation: bg var(--loop) infinite;
  animation-timing-function: linear; */
  font-family: 'Lexend Deca', sans-serif;
  font-size: var(--fontSize);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  /* max-width: 1000px; */
  /* padding: 0px; */
  padding-top: 60px;
  padding-bottom: 400px;
  color: var(--black);
  overflow-x: hidden;
}

.center {
  max-width: 1100px;
  text-align: left;
  margin: auto;
}

#header {
  margin-bottom: 50px;
  padding: var(--cardMargin);
}

.categories .header {
  margin-left: var(--cardMargin);
}

.header {
  padding-top: var(--titlePadding);
  padding-bottom: var(--titlePadding);
  font-size: var(--headerSize);
  /* font-family: 'Unica One', cursive; */
  letter-spacing: var(--letterSpacing);
  font-weight: bold;
  /* margin-left: var(--letterSpacing); */
  color: var(--black);
  /* text-transform: uppercase; */
}

a {
  font-weight: bold;
  text-decoration: none;
  font-style: italic;
}

@media only screen and (max-width: 600px) {
  * {
    /* --cardMargin: 15px; */
  }
}
</style>
