<template>
  <!-- <div class="swiper">
    <swiper :options="swiperOption">
      <swiper-slide
        class="swiper-img"
        v-for="item in swiperImg"
        :key="item.id"
      >
        <img :src="item.url" />
      </swiper-slide>
      <div
        class="swiper-pagination"
        slot="pagination"
      ></div>
    </swiper>
  </div> -->
  <swiper :options="swiperOption">
    <!-- slides -->
    <swiper-slide>I'm Slide 1</swiper-slide>
    <swiper-slide>I'm Slide 2</swiper-slide>
    <swiper-slide>I'm Slide 3</swiper-slide>
    <swiper-slide>I'm Slide 4</swiper-slide>
    <swiper-slide>I'm Slide 5</swiper-slide>
    <swiper-slide>I'm Slide 6</swiper-slide>
    <swiper-slide>I'm Slide 7</swiper-slide>
    <!-- Optional controls -->
    <div
      class="swiper-pagination"
      slot="pagination"
    ></div>
    <div
      class="swiper-button-prev"
      slot="button-prev"
    ></div>
    <div
      class="swiper-button-next"
      slot="button-next"
    ></div>
    <div
      class="swiper-scrollbar"
      slot="scrollbar"
    ></div>
  </swiper>
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
  padding-top: 26.66%
  transform-origin: top
  background-color: #eee
  .swiper-img
    width: 100%
</style>
