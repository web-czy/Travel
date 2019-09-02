<template>
  <div class="header">
    <router-link
      to="/"
      class="back"
      tag="div"
    >
      <i class="iconfont iconfanhui"></i>
    </router-link>
    城市选择
  </div>
</template>

<script type='text/ecmascript-6'>
export default {
  name: 'CityHeader'
}
</script>

<style scoped lang='stylus' rel='stylesheet/stylus'>
@import '~assets/styles/varibles.styl'

.header
  position: relative
  height: $headerHeight
  line-height: $headerHeight
  text-align: center
  font-size: $font-size-large
  color: $color-white
  background-color: $color-background
  .back
    position: absolute
    top: 0
    left: 0.2rem
    width: 0.4rem
    font-size: $font-size-large-x
</style>
