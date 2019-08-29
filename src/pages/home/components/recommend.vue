<template>
  <div class="recommend">
    <div class="title">
      <img src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" />
      <span>猜你喜欢</span>
    </div>
  </div>
</template>

<script type='text/ecmascript-6'>
export default {
}
</script>

<style scoped lang='stylus' rel='stylesheet/stylus'>
@import '~assets/styles/varibles.styl'

.recommend
  .title
    padding: 0 0.25rem
    display: flex
    align-items: center
    font-size: $font-size-title
    img
      margin-right: 0.1rem
      width: 0.3rem
      height: 0.3rem
</style>
