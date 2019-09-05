
<template>
  <div class="header">
    <div class="back">
      <i class="iconfont iconfanhui"></i>
    </div>
    <div class="search">
      <i class="iconfont iconsousuo"></i>输入城市/景点/游玩主题
    </div>
    <router-link
      to="/city"
      class="city"
      tag="div"
    >
      {{ this.doubleCity }}<i class="iconfont iconjiantou"></i>
    </router-link>
  </div>
</template>

<script type='text/ecmascript-6'>
import { mapGetters } from 'vuex'

export default {
  name: 'VHeader',
  computed: {
    ...mapGetters([
      'doubleCity'
    ])
  }
}
</script>

<style scoped lang='stylus' rel='stylesheet/stylus'>
@import '~assets/styles/varibles.styl'

.header
  display: flex
  align-items: center
  height: $headerHeight
  background-color: $color-background
  color: $color-white
  .back
    padding: 0 0.2rem
    width: 0.4rem
    font-size: $font-size-large-x
  .search
    flex: 1
    height: 0.6rem
    line-height: 0.6rem
    color: #ccc
    border-radius: 0.06rem
    background-color: $color-white
    .iconsousuo
      padding: 0 0.1rem
  .city
    padding: 0 0.2rem
    .iconjiantou
      margin-left: 0.05rem
      font-size: $font-size-small-s
</style>
