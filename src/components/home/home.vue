<template>
  <div class="home">
    <v-header></v-header>
    <v-swiper></v-swiper>
  </div>
</template>

<script type='text/ecmascript-6'>
import VHeader from 'components/v-header/v-header'
import VSwiper from 'base/v-swiper/v-swiper'

export default {
  name: 'Home',
  components: {
    VHeader,
    VSwiper
  }
}
</script>

<style scoped lang='stylus' rel='stylesheet/stylus'></style>
