import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import fastClick from 'fastclick';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import store from './store';
import 'swiper/dist/css/swiper.css';
import './assets/styles/index.styl';

Vue.config.productionTip = false;
fastClick.attach(document.body);
Vue.use(VueAwesomeSwiper);

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app');
