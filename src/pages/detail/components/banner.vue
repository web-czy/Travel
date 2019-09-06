<template>
  <div>
    <div class="banner">
      <img
        class="img"
        @click="toAlbum"
        src="//img1.qunarzz.com/sight/p0/1508/89/895a1b7add84f23faca053ce9e3153db.water.jpg_600x330_93d96bdf.jpg"
      />
      <div
        class="back"
        @click="back"
      >
        <i class="iconfont iconfanhui"></i>
      </div>
      <div class="banner-info">
        <div class="number">
          <i class="iconfont iconiconfontxingxing"></i>
          <span>39</span>
        </div>
        <div class="title">北京欢乐谷(AAAA景区)</div>
      </div>
    </div>
  </div>
</template>

<script type='text/ecmascript-6'>
export default {
  name: 'DetailBanner',
  methods: {
    back() {
      this.$router.back()
    },
    toAlbum() {
      this.$router.push('/album')
    }
  }
}
</script>

<style scoped lang='stylus' rel='stylesheet/stylus'>
@import '~assets/styles/varibles.styl'

.banner
  position: relative
  overflow: hidden
  width: 100%
  height: 0
  padding-bottom: 55%
  .img
    width: 100%
  .back
    position: absolute
    left: 0.2rem
    top: 0.2rem
    width: 0.72rem
    height: 0.72rem
    line-height: 0.72rem
    text-align: center
    border-radius: 50%
    background: rgba(0, 0, 0, 0.5)
    z-index: 1
    .iconfont
      font-weight: bold
      font-size: $font-size-large-x
      color: $color-white
  .banner-info
    box-sizing: border-box
    padding: 0 0 0.15rem 0.2rem
    display: flex
    flex-direction: column
    justify-content: flex-end
    position: absolute
    bottom: 0
    left: 0
    width: 100%
    color: $color-white
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
    .number
      display: flex
      justify-content: center
      width: 1.2rem
      height: 0.4rem
      line-height: 0.4rem
      text-align: center
      font-size: $font-size-medium
      border-radius: 0.2rem
      background: rgba(0, 0, 0, 0.5)
      .iconfont
        margin-right: 0.1rem
        font-size: 0.16rem
    .title
      line-height: 0.6rem
      font-size: $font-size-large-x
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.7)
</style>
