<template>
  <div class="home">
    <v-header></v-header>
    <v-swiper></v-swiper>
    <icons></icons>
    <recommend></recommend>
  </div>
</template>

<script type='text/ecmascript-6'>
import VHeader from './components/v-header'
import VSwiper from './components/v-swiper'
import Icons from './components/icons'
import Recommend from './components/recommend'

export default {
  name: 'Home',
  components: {
    VHeader,
    VSwiper,
    Icons,
    Recommend
  }
}
</script>

<style scoped lang='stylus' rel='stylesheet/stylus'></style>
