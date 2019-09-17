<template>
  <transition name="commodity">
    <div class="list">
      <div
        class="sort-list"
        v-for="(sortList, sortIndex) in list"
        :key="sortIndex"
      >
        <div class="sort-title border-bottom">
          <span class="icon"></span>
          <span>{{ sortList.title }}</span>
        </div>
        <div
          class="item border-bottom"
          v-for="(item, index) in sortList.sortList"
          :key="index"
        >
          <div class="title" @click.stop="toggleList(item)">
            <div class="text">{{ item.title }}</div>
            <div class="minprice">
              <span class="orange">
                ￥
                <span class="big">{{ minprice(item.ticketList) }}</span>
              </span>
              起 ∨
            </div>
          </div>
          <div class="list-commodity border-top" v-show="item.show">
            <detail-commodity :list="item.ticketList"></detail-commodity>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script type='text/ecmascript-6'>
import DetailCommodity from './commodity'

export default {
  name: 'DetailList',
  props: {
    list: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    minprice(ticketList) {
      let list = []
      ticketList.forEach(item => {
        list.push(item.price)
      })
      return Math.min(...list)
    },
    toggleList(item) {
      let show = !item.show
      this.$set(item, 'show', show)
    }
  },
  components: {
    DetailCommodity
  }
}
</script>

<style scoped lang='stylus' rel='stylesheet/stylus'>
@import '~assets/styles/varibles.styl'

.commodity-enter-active, .commodity-leave-active
  transition: all 2s linear
  .list-commodity
    transition: all 2s linear
.commodity-enter, .commodity-leave-to
  .list-commodity
    height: 0
.list
  .sort-list
    margin-top: 0.2rem
    background: $color-white
    .sort-title
      margin-left: 0.2rem
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
    .item
      background: $color-white
      &.border-bottom::before
        border-color: #dadada
      .title
        padding: 0.24rem 0.2rem
        display: flex
        justify-content: space-between
        align-items: center
        .text
          font-size: $font-size-large
        .minprice
          font-size: $font-size-medium
          color: #9e9e9e
          .orange
            color: #ff9800
            .big
              font-size: $font-size-large-m
      .list-commodity
        background: $color-title-bg
        overflow: hidden
        &.border-top::before
          border-color: #dadada
        >>> .commodity
          padding: 0.2rem 0.2rem 0.24rem 0.2rem
</style>
