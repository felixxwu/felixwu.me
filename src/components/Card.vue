<template>
  <div
    :id="id"
    class="card"
    :class="{scroll: this.isOpen()}"
  >
  <!-- card must only have two children -->
    <img :src="`img/${this.data.img}`" alt="">
    <div class="scroller" v-on:click="handleClick">
      <div class="content">
        <div class="title">{{this.data.title}}</div>
        <div class="text" v-if="this.shouldShowText()" v-html="this.data.text"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'card',
  props: {
    id: String,
    openCard: Function,
    openedCard: String,
    data: Object
  },
  methods: {
    handleClick() {
      this.openCard()
    },
    isOpen() {
      return this.id === this.openedCard
    },
    shouldShowText() {
      return this.isOpen() || this.data.img === undefined
    }
  },
}
</script>

<style scoped>

.title {
  font-size: var(--cardTitleSize);
  margin-bottom: 2px;
  text-align: center;
  line-height: 1;
  /* font-weight: bold; */
}

.scroll {
  overflow-y: auto !important;
}

.card {
  position: relative;
  margin: var(--cardMargin);
  margin-bottom: 30px;
  /* margin-right: calc(var(--cardMargin) * 2); */
  /* margin-left: 0; */
  overflow-y: hidden;
  display: inline-block;
  background-color: var(--white);
  max-width: var(--cardWidth);
  height: var(--cardHeight);
  border-radius: var(--borderRadius);
  border: solid 1px var(--grey);
  transition: var(--openAnimTime);
  cursor: pointer;
  width: 100%;
  text-align: left;
  background-color: var(--white);
  /* background: linear-gradient(180deg, black 50%, var(--white) 50%); */
}

.card:hover {
  box-shadow: var(--boxShadow);

}

.scroller {
  position: relative;
  overflow-y: auto;
  width: 100%;
  height: 100%;
}

img {
  position: absolute;
  height: var(--imgHeight);
  object-fit: cover;
  transition: var(--imgAnimTime);
  border-radius: var(--borderRadius) var(--borderRadius) 0 0;
  max-width: var(--cardWidth);
  /* max-width: calc(var(--cardWidth) + 2px); */
  transition: var(--openAnimTime);
  width: 100%
}

.content {
  margin-top: var(--imgHeight);
  padding: var(--cardPadding);
  text-align: left;
  background-color: var(--white);
  transition: var(--openAnimTime);
}

.text {
  padding-top: 40px;
  padding-bottom: 40px;
}
</style>

