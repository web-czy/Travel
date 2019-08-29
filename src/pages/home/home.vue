<template>
  <div class="home">
    <v-header></v-header>
    <v-swiper></v-swiper>
    <icons></icons>
  </div>
</template>

<script type='text/ecmascript-6'>
import VHeader from './components/v-header'
import VSwiper from './components/v-swiper'
import Icons from './components/icons'

export default {
  name: 'Home',
  components: {
    VHeader,
    VSwiper,
    Icons
  }
}
</script>

<style scoped lang='stylus' rel='stylesheet/stylus'></style>
