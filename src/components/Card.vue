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
        <div v-if="this.shouldShowText()" v-html="this.data.text"></div>
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
  margin-bottom: 10px;
  text-align: center;
  font-weight: bold;
}

.scroll {
  overflow-y: auto !important;
}

.card {
  position: relative;
  margin: var(--cardMargin);
  overflow-y: hidden;
  display: inline-block;
  background-color: var(--white);
  max-width: var(--cardWidth);
  height: var(--cardHeight);
  border-radius: var(--borderRadius);
  box-shadow: var(--boxShadow);
  transition: var(--openAnimTime);
  cursor: pointer;
  width: 100%;
  text-align: left;
  background-color: #fff;
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
  border-radius: 10px 10px 0 0;
  max-width: var(--cardWidth);
  transition: var(--openAnimTime);
  width: 100%
}

.content {
  margin-top: var(--imgHeight);
  padding: var(--cardPadding);
  text-align: left;
  background-color: #fff;
  transition: var(--openAnimTime);
}

/* !! keep the screen max-width in sync with var(--cardExpandedWidth) */
@media only screen and (max-width: 600px) {
  .card {
    margin-left: 0 !important;
    margin-right: 0 !important;
  }
}
</style>

