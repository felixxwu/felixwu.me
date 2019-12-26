<template>
  <div>
    <div class="header lines">{{this.category.name}}</div>
    <Card
      v-for="(card, index) in this.category.cards"
      :key="index"
      :id="getID(index)"
      :data="card"
      :openedCard="getID(openedCard)"
      :openCard="()=>openCard(index)"
    ></Card>
  </div>
</template>

<script>
import Card from './Card'
import config from './config'
import setCss from './setCss'

export default {
  name: 'category',
  props: {
    catNo: Number,
    category: Object
  },
  data() {
    return {
      openedCard: null
    }
  },
  components: {
    Card
  },
  methods: {
    getID(cardNo) {
      return `card-${this.catNo}-${cardNo}`
    },
    openCard(id) {
      this.category.cards.forEach((_, cardNo) => {

        const card = document.getElementById(this.getID(cardNo))

        if (cardNo === id && cardNo !== this.openedCard) {
          setCss.expandCard(this.getID(cardNo))
          setCss.expandImg(this.getID(cardNo))

          setTimeout(() => {
            card.scrollIntoView({
              behavior: "smooth",
              block: "center"
            });
          }, config.cssVars.scrollToTime);

        } else {
          setCss.closeCard(this.getID(cardNo))
          setCss.closeImg(this.getID(cardNo))
        }

      })

      if (this.openedCard === id) {
        this.openedCard = null
      } else {
        this.openedCard = id
      }
    }
  },
}
</script>

<style scoped>
/* .lines:before, .lines:after {
  content: "──";
  letter-spacing: 0;
  padding-right: var(--titlePadding);
} */
</style>
