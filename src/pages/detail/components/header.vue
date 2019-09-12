<template>
  <div>
    <div
      class="header-abs"
      @click="back"
      v-show="showAbs"
    >
      <i class="iconfont iconfanhui"></i>
    </div>
    <div class="header-fixed" ref="headerFixed">
      <div
        class="back"
        @click="back"
      >
        <i class="iconfont iconfanhui"></i>
      </div>
      北京欢乐谷
    </div>
  </div>
</template>

<script type='text/ecmascript-6'>
import { prefixStyle } from 'assets/js/dom'

const HEADER_HEIGHT = 44
const opacity = prefixStyle('opacity')

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
    this.topHeight = screenWidth * 0.55 - HEADER_HEIGHT
  },
  activated() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    back() {
      this.$router.back()
    },
    handleScroll() {
      const top = document.documentElement.scrollTop
      let opacityNumber = 0
      const percent = top / this.topHeight
      if (top === 0) {
        opacityNumber = 0
        this.showAbs = true
      } else if (top > 0 && top <= this.topHeight) {
        opacityNumber = Math.min(percent, 1)
        this.showAbs = false
      } else {
        opacityNumber = 1
        this.showAbs = false
      }
      this.$refs.headerFixed.style[opacity] = opacityNumber
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
  opacity: 0
  .back
    position: absolute
    top: 0
    left: 0rem
    width: 0.8rem
    font-size: $font-size-large-x
</style>
