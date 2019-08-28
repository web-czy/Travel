<template>
  <div class="swiper">
    <swiper :options="swiperOption">
      <swiper-slide class="swiper-img" v-for="item in swiperImg" :key="item.id">
        <img :src="item.url" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script type='text/ecmascript-6'>
export default {
  name: 'v-swiper',
  props: {
    swiperImg: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      swiperOption: {}
    }
  }
}
</script>

<style scoped lang='stylus' rel='stylesheet/stylus'>
.swiper
  width: 100%
  height: 0
  padding-bottom: 26.66%
  overflow: hidden
  background-color: #eee
  .swiper-img
    img
      width: 100%
</style>
