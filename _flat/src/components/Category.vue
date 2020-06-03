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
import config from './cssvars'
import cssChangeActions from './cssChangeActions'

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

        
        if (cardNo === id && cardNo !== this.openedCard) {
          cssChangeActions.expandCard(this.getID(cardNo))
          cssChangeActions.expandImg(this.getID(cardNo))

          // scroll to the card
          const card = document.getElementById(this.getID(cardNo))
          setTimeout(() => {
            card.scrollIntoView({
              behavior: "smooth",
              block: "start"
            });
          }, config.cssVars.scrollToTime);

        } else {
          cssChangeActions.closeCard(this.getID(cardNo))
          cssChangeActions.closeImg(this.getID(cardNo))
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
