<template>
  <div class="home">
    <v-header></v-header>
    <v-swiper></v-swiper>
    <icons class="white-bg"></icons>
    <recommend class="white-bg margin-top"></recommend>
    <weekend class="white-bg margin-top"></weekend>
  </div>
</template>

<script type='text/ecmascript-6'>
import VHeader from './components/v-header'
import VSwiper from './components/v-swiper'
import Icons from './components/icons'
import Recommend from './components/recommend'
import Weekend from './components/weekend'

export default {
  name: 'Home',
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
