import Vue from 'vue'
import App from './App.vue'
import store from './store'
import commands from "./static/commands.js";

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')

commands.startup();
document.onkeypress = () => {
  document.getElementById("input") && document.getElementById("input").focus();
}
