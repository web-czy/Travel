<template>
  <div class="swiper">
    <swiper
      id="v-swiper"
      :options="swiperOption"
    >
      <swiper-slide
        v-for="item in list"
        :key="item.id"
      >
        <img
          class="swiper-img"
          :src="item.imgUrl"
        />
      </swiper-slide>
      <div
        class="swiper-pagination"
        slot="pagination"
      ></div>
    </swiper>
  </div>
</template>

<script type='text/ecmascript-6'>
export default {
  name: 'v-swiper',
  props: {
    list: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        loop: true,
        autoplay: true
      }
    }
  }
}
</script>

<style scoped lang='stylus' rel='stylesheet/stylus'>
.swiper >>> .swiper-pagination-bullet-active
  background: #fff
.swiper
  width: 100%
  height: 0
  padding-bottom: 26.66%
  overflow: hidden
  background-color: #eee
  .swiper-img
    width: 100%
</style>
