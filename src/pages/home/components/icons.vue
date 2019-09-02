<template>
  <div class="icons">
    <swiper
      id="icons"
      :options="swiperOption"
    >
      <swiper-slide
        class="slide"
        v-for="(page, index) in pages"
        :key="index"
      >
        <div
          class="icon"
          v-for="item in page"
          :key="item.id"
        >
          <img :src="item.imgUrl" />
          <p>{{item.desc}}</p>
        </div>
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
        autoplay: false
      }
    }
  },
  computed: {
    pages() {
      const pages = []
      this.list.forEach((item, index) => {
        // 当前下标对应的数据应该展示在第几页
        // 向下取整，如果index是0-7，page就是0，如果index是8，就是第9个数据，page为1
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style scoped lang='stylus' rel='stylesheet/stylus'>
@import '~assets/styles/varibles.styl'
@import '~assets/styles/mixins.styl'

.icons
  width: 100%
  height: 3.7rem
  >>> .slide
    display: flex
    flex-wrap: wrap
    align-content: flex-start
    width: 100%
    height: 3.7rem
.icon
  width: 25%
  height: 1.5rem
  padding-top: 0.1rem
  text-align: center
  font-size: $font-size-medium-m
  color: $color-text
  img
    width: 1.1rem
    height: 1.1rem
  p
    ellipsis()
</style>
