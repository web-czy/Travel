<template>
  <div class="search">
    <input
      class="search-input"
      type="text"
      placeholder="输入城市名或拼音"
    />
  </div>
</template>

<script type='text/ecmascript-6'>
export default {
  name: 'CitySearch'
}
</script>

<style scoped lang='stylus' rel='stylesheet/stylus'>
@import '~assets/styles/varibles.styl'

.search
  height: 0.72rem
  padding: 0 0.1rem
  background-color: $color-background
  .search-input
    box-sizing: border-box
    padding: 0 0.1rem
    width: 100%
    height: 0.62rem
    line-height: 0.62rem
    text-align: center
    color: #666
    border-radius: 0.06rem
</style>
