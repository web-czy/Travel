import Vue from 'vue'
import App from './App.vue'
import fastClick from 'fastclick'
import './assets/styles/index.styl'

Vue.config.productionTip = false
fastClick.attach(document.body)

new Vue({
  render: h => h(App)
}).$mount('#app')
