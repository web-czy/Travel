<template>
  <div class="home">
    <v-header :city="home.city"></v-header>
    <v-swiper :swiperList="home.swiperList"></v-swiper>
    <icons class="white-bg"></icons>
    <recommend
      :recommendList="home.recommendList"
      class="white-bg margin-top"
    ></recommend>
    <weekend
      :weekendList="home.weekendList"
      class="white-bg margin-top"
    ></weekend>
  </div>
</template>

<script type='text/ecmascript-6'>
import VHeader from './components/v-header'
import VSwiper from './components/v-swiper'
import Icons from './components/icons'
import Recommend from './components/recommend'
import Weekend from './components/weekend'
import { getHome } from 'api'

export default {
  name: 'Home',
  data() {
    return {
      home: {}
    }
  },
  created() {
    this.getHomeInfo()
  },
  methods: {
    getHomeInfo() {
      getHome().then((home) => {
        this.home = Object.assign({}, this.home, home)
      })
    }
  },
  components: {
    VHeader,
    VSwiper,
    Icons,
    Recommend,
    Weekend
  }
}
</script>

<style scoped lang='stylus' rel='stylesheet/stylus'>
.white-bg
  background: #ffffff
.margin-top
  margin-top: 0.2rem
</style>
