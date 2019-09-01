<template>
  <div class="weekend">
    <div class="weekend-title">
      <span>周末去哪儿</span>
    </div>
    <ul class="weekend-list">
      <li class="item" v-for="item in weekendList" :key="item.id">
        <div class="img-wrapper">
          <img :src="item.imgUrl" />
        </div>
        <div class="info">
          <div class="title">{{ item.title }}</div>
          <p class="desc">{{ item.desc }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script type='text/ecmascript-6'>
export default {
  props: {
    weekendList: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped lang='stylus' rel='stylesheet/stylus'>
@import '~assets/styles/varibles.styl'
@import '~assets/styles/mixins.styl'

.weekend
  .weekend-title
    padding: 0.25rem
    align-items: center
    font-size: $font-size-large
    img
      margin-right: 0.1rem
      width: 0.3rem
      height: 0.3rem
  .weekend-list
    li:last-child
      border: none
    .item
      border-bottom: 0.1rem solid #f5f5f5
      .img-wrapper
        position: relative
        width: 100%
        height: 0
        padding-bottom: 37.4375%
        overflow: hidden
        img
          position: absolute
          width: 100%
          height: 100%
      .info
        padding: 0.22rem
        .title
          font-size: $font-size-medium-m
          color: $color-text
        .desc
          padding-top: 0.2rem
          line-height: 0.36rem
          font-size: $font-size-medium
          color: $color-text-light
</style>
