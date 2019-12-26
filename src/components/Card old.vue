<template>
  <div
    :id="id"
    class="card"
    :class="{scroll: this.isOpen()}"
    v-on:click="handleClick"
  >
    <img :src="`img/${this.data.img}`" alt="">
    <div class="content">
      <div class="title">{{this.data.title}}</div>
      <div v-if="this.shouldShowText()" v-html="this.data.text"></div>
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
}

img {
  width: 100%;
  height: var(--imgHeight);
  object-fit: cover;
  transition: var(--imgAnimTime);
}

.content {
  padding: var(--cardPadding);
  text-align: left;
}

/* !! keep the screen max-width in sync with var(--cardExpandedWidth) */
@media only screen and (max-width: 600px) {
  .card {
    margin-left: 0 !important;
    margin-right: 0 !important;
  }
}
</style>

