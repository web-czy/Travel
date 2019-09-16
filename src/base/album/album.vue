<template>
  <div class="album" v-if="gallaryimgs">
    <div class="title border-bottom">
      <div class="back" @click="back">
        <i class="iconfont iconfanhui"></i>
      </div>
      景区图片
    </div>
    <scroll :data="imgList" class="img-list" tag="div">
      <ul class="wrapper">
        <li class="img-item" v-for="(item, index) in gallaryimgs" :key="index">
          <img @click="toggleImg(index)" :src="item" />
        </li>
      </ul>
    </scroll>
    <fade-animation>
      <div class="gallery" v-show="showGallery" @click="toggleImg">
        <swiper
          :options="swiperOption"
          id="gallery"
          ref="galleryWrapper"
          class="gallery-wrapper"
          tag="div"
        >
          <swiper-slide
            v-for="(item, index) in gallaryimgs"
            :key="index"
            class="gallery-item"
          >
            <img class="swiper-img" :src="item" />
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
    </fade-animation>
  </div>
</template>

<script type='text/ecmascript-6'>
import Scroll from 'base/scroll/scroll'
import FadeAnimation from 'base/fade-animation/fade-animation'
import { mapState } from 'vuex'

export default {
  name: 'gallery',
  props: {
    imgList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  activated() {
    if (!this.scenic.id) {
      this.$router.push('/')
    }
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction'
        }
      },
      showGallery: false,
      currentIndex: 0
    }
  },
  computed: {
    swiper() {
      return this.$refs.galleryWrapper.swiper
    },
    ...mapState(['scenic', 'gallaryimgs'])
  },
  methods: {
    back() {
      this.$router.back()
    },
    toggleImg(index) {
      if (index) {
        this.currentIndex = index
      }
      this.swiper.slideTo(this.currentIndex, 0, false)
      this.showGallery = !this.showGallery
    }
  },
  components: {
    Scroll,
    FadeAnimation
  }
}
</script>

<style scoped lang='stylus' rel='stylesheet/stylus'>
@import '~assets/styles/varibles.styl'

.album
  position: fixed
  top: 0
  right: 0
  bottom: 0
  left: 0
  background: $color-title-bg
  .title
    position: relative
    width: 100%
    height: $headerHeight
    line-height: $headerHeight
    text-align: center
    font-size: $font-size-large
    color: #333
    background: $color-white
    .back
      position: absolute
      top: 0
      left: 0.2rem
      width: 0.4rem
      font-size: $font-size-large-x
    &.border-bottom::before
      border-color: $color-border
  .img-list
    overflow: hidden
    position: absolute
    top: 0.89rem
    right: 0
    bottom: 0
    left: 0
    width: 100%
    .wrapper
      display: flex
      flex-wrap: wrap
      padding: 0.1rem 0 0.2rem 0
      li:nth-child(odd)
        padding: 0.05rem 0.05rem 0.05rem 0.2rem
      li:nth-child(even)
        padding: 0.05rem 0.2rem 0.05rem 0.05rem
      .img-item
        box-sizing: border-box
        width: 50%
        img
          width: 100%
  .gallery
    position: fixed
    top: 0
    right: 0
    bottom: 0
    left: 0
    background: #000
    z-index: 5
    .gallery-wrapper
      display: flex
      flex-direction: column
      justify-content: center
      width: 100%
      height: 100%
      >>> .swiper-wrapper
        width: 100%
        height: 0
        padding-bottom: 68.57%
        /* 这里如果加上overflow: hidden，会导致后边的图片不显示 */
      .gallery-item
        width: 100%
        z-index: 6
        .swiper-img
          width: 100%
          z-index: 6
      .swiper-pagination
        position: absolute
        right: 0
        bottom: 0.8rem
        left: 0
        color: $color-white
</style>
