<template>
  <div class="home">
    <v-header :city="home.city"></v-header>
    <scroll
      class="wrapper"
      :data="home"
    >
      <div>
        <v-swiper :list="home.swiperList"></v-swiper>
        <icons
          :list="home.iconList"
          class="white-bg"
        ></icons>
        <recommend
          :list="home.recommendList"
          class="white-bg margin-top"
        ></recommend>
        <weekend
          :list="home.weekendList"
          class="white-bg margin-top"
        ></weekend>
      </div>
    </scroll>
  </div>
</template>

<script type='text/ecmascript-6'>
import VHeader from './components/v-header'
import VSwiper from './components/v-swiper'
import Icons from './components/icons'
import Recommend from './components/recommend'
import Weekend from './components/weekend'
import Scroll from 'base/scroll/scroll'
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
    Weekend,
    Scroll
  }
}
</script>

<style scoped lang='stylus' rel='stylesheet/stylus'>
@import '~assets/styles/varibles.styl'

.home
  .wrapper
    position: absolute
    top: $headerHeight
    right: 0
    bottom: 0
    left: 0
    overflow: hidden
    .white-bg
      background: #ffffff
    .margin-top
      margin-top: 0.2rem
</style>
