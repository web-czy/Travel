<template>
  <div class="list">
    <div class="item" v-for="(item, index) in list" :key="index">
      <div class="title border-bottom">
        <span class="icon"></span>
        <span>{{ item.title }}</span>
      </div>
      <div v-if="item.children" class="children">
        <detail-list :list="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>

<script type='text/ecmascript-6'>
export default {
  name: 'DetailList',
  props: {
    list: {
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

.list
  .item
    background: #fff
    .title
      padding: 0 0.2rem
      display: flex
      align-items: center
      line-height: 0.8rem
      font-size: $font-size-large
      .icon
        display: inline-block
        width: 0.36rem
        height: 0.36rem
        background: url('http://s.qunarzz.com/piao/image/touch/sight/detail.png') 0 -0.45rem no-repeat
        margin-right: 0.1rem
        background-size: 0.4rem 3rem
    .children
      padding: 0 0.2rem
</style>
