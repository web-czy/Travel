<template>
  <div>
    <div
      class="header-abs"
      @click="back"
    >
      <i class="iconfont iconfanhui"></i>
    </div>
    <div class="header-fixed">
      <div
        class="back"
        @click="back"
      >
        <i class="iconfont iconfanhui"></i>
      </div>
      景区图片
    </div>
  </div>
</template>

<script type='text/ecmascript-6'>
export default {
  name: 'DetailHeader',
  data() {
    return {
      showAbs: true,
      opcity: 0
    }
  },
  created() {
    const screenWidth = parseInt(document.documentElement.clientWidth)
    this.bannerHeight = screenWidth * 0.55
  },
  activated() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      const top = document.documentElement.scrollTop
      let opcity = 0
      const percent = top / this.bannerHeight
      if (top > 0) {
        this.showAbs = false
      } else if (top <= this.bannerHeight) {
        opcity = Math.min(percent, 1)
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  }
}
</script>

<style scoped lang='stylus' rel='stylesheet/stylus'>
@import '~assets/styles/varibles.styl'

.header-abs
  position: absolute
  left: 0.1rem
  top: 0.14rem
  width: 0.6rem
  height: 0.6rem
  line-height: 0.6rem
  text-align: center
  border-radius: 50%
  background: rgba(0, 0, 0, 0.5)
  z-index: 1
  .iconfont
    font-size: $font-size-large-x
    color: $color-white
.header-fixed
  position: fixed
  top: 0
  left: 0
  width: 100%
  height: $headerHeight
  line-height: $headerHeight
  text-align: center
  font-size: $font-size-large
  color: $color-white
  background: $color-background
  .back
    position: absolute
    top: 0
    left: 0rem
    width: 0.8rem
    font-size: $font-size-large-x
</style>
