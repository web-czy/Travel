<template>
  <div class="list">
    <div class="area">
      <div class="title">热门城市</div>
      <div class="button-list">
        <div class="button-wrapper">
          <div class="button">北京</div>
        </div>
        <div class="button-wrapper">
          <div class="button">北京</div>
        </div>
        <div class="button-wrapper">
          <div class="button">北京</div>
        </div>
        <div class="button-wrapper">
          <div class="button">北京</div>
        </div>
        <div class="button-wrapper">
          <div class="button">北京</div>
        </div>
      </div>
    </div>
    <div class="area">
      <div class="title">A</div>
      <div class="item-list">
        <div class="item border-bottom">上海</div>
        <div class="item border-bottom">上海</div>
        <div class="item border-bottom">上海</div>
        <div class="item border-bottom">上海</div>
      </div>
    </div>
    <div class="area">
      <div class="title">A</div>
      <div class="item-list">
        <div class="item border-bottom">上海</div>
        <div class="item border-bottom">上海</div>
        <div class="item border-bottom">上海</div>
        <div class="item border-bottom">上海</div>
      </div>
    </div>
    <div class="area">
      <div class="title">A</div>
      <div class="item-list">
        <div class="item border-bottom">上海</div>
        <div class="item border-bottom">上海</div>
        <div class="item border-bottom">上海</div>
        <div class="item border-bottom">上海</div>
      </div>
    </div>
  </div>
</template>

<script type='text/ecmascript-6'>
export default {
  name: 'CityList'
}
</script>

<style scoped lang='stylus' rel='stylesheet/stylus'>
@import '~assets/styles/varibles.styl'

.border-bottom
  border-bottom: 1px solid #ccc
.list
  .title
    padding-left: 0.2rem
    line-height: 0.44rem
    font-size: $font-size-medium-x
    background: $color-title-bg
  .button-list
    padding: 0.1rem 0.6rem 0.1rem 0.1rem
    display: flex
    flex-wrap: wrap
    .button-wrapper
      width: 33.33%
      .button
        margin: 0.1rem
        padding: 0.1rem 0
        text-align: center
        border: 0.02rem solid #ccc
        border-radius: 0.06rem
  .item-list
    .item
      line-height: 0.76rem
      color: $color-text-light
      padding-left: 0.2rem
</style>
