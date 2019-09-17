<template>
  <div>
    <div
      class="commodity border-bottom"
      v-for="(item, index) in list"
      :key="index"
    >
      <div class="leftcon">
        <h6 class="title">{{ item.title }}</h6>
        <div class="desc">
          <img
            class="icon"
            src="https://img1.qunarzz.com/piao/fusion/1804/94/3537f6969acc0c02.png"
          />
          {{ item.desc }}
        </div>
        <div class="labelcon">
          <div
            class="label border"
            v-for="(label, index) in item.label"
            :key="index"
          >
            <img v-if="label.iconUrl" :src="label.iconUrl" />
            {{ label.text }}
          </div>
        </div>
        <div class="ascription" v-if="item.ascription">
          {{ item.ascription }}&nbsp;|&nbsp;预定须知&nbsp;&gt;
        </div>
      </div>
      <div class="rightcon">
        <div class="price"><span class="small">￥</span>{{ item.price }}</div>
        <div class="button">预订</div>
      </div>
    </div>
  </div>
</template>

<script type='text/ecmascript-6'>
export default {
  name: 'DetailCommodity',
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

.commodity
  display: flex
  justify-content: space-between
  align-items: center
  padding: 0.2rem 0.2rem 0.24rem 0
  &.border-bottom::before
    border-color: #dadada
  &:last-child::before
    border: none
  .leftcon
    flex: 1
    .title
      line-height: 0.52rem
      font-size: $font-size-large-s
    .desc
      display: flex
      align-items: center
      height: 0.32rem
      line-height: 0.32rem
      color: $color-text-light
      font-size: $font-size-medium
      white-space: nowrap
      .icon
        width: 0.2rem
        height: 0.2rem
        margin-right: 0.04rem
    .labelcon
      display: flex
      margin-top: 0.08rem
      .border::before
        border-color: #a5e4ec
        border-radius: 0.08rem
      .label
        display: flex
        align-items: center
        padding: 0 0.04rem
        margin-right: 0.1rem
        height: 0.32rem
        line-height: 0.32rem
        font-size: $font-size-small-x
        color: #00afc7
        img
          width: 0.2rem
          height: 0.15rem
          margin-right: 0.04rem
          vertical-align: 0
    .ascription
      margin-top: 0.08rem
      line-height: 0.34rem
      font-size: $font-size-medium
      color: $color-text-light
  .rightcon
    width: 24%
    text-align: center
    .price
      width: 100%
      font-size: $font-size-large-m
      color: #ff9800
      .small
        margin-right: 0.04rem
        font-size: $font-size-medium
    .button
      height: 0.6rem
      line-height: 0.6rem
      font-size: $font-size-medium-m
      color: #fff
      border-radius: 0.08rem
      background-image: linear-gradient(130deg, #ffab1e 37%, #ff8c12 100%)
</style>
