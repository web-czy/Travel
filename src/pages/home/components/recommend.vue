<template>
  <div class="recommend">
    <div class="recommend-title">
      <img
        src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png"
      />
      <span>猜你喜欢</span>
    </div>
    <ul class="recommend-list">
      <li class="item" v-for="item in recommendList" :key="item.id">
        <div class="img-wrapper">
          <div class="tag">{{ item.tag }}</div>
          <img :src="item.imgUrl" />
        </div>
        <div class="info">
          <div class="title">{{ item.title }}</div>
          <div class="rating">
            <div class="star">
              <i
                class="iconfont iconiconfontxingxing"
                v-for="(n, index) in 5"
                :key="index"
              ></i>
            </div>
            <div class="evaluate">{{ item.evaluate }}条评论</div>
          </div>
          <div class="price">
            <span>￥{{ item.price }}</span
            >起
          </div>
          <div class="desc" v-if="item.desc">
            <span class="text">{{ item.desc }}</span>
          </div>
        </div>
        <div class="region">{{ item.region }}</div>
      </li>
    </ul>
  </div>
</template>

<script type='text/ecmascript-6'>
export default {
  props: {
    recommendList: {
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

.recommend
  .recommend-title
    padding: 0.25rem
    display: flex
    align-items: center
    font-size: $font-size-large
    img
      margin-right: 0.1rem
      width: 0.3rem
      height: 0.3rem
  .recommend-list
    padding: 0 0.2rem
    li:last-child
      border: none
    .item
      position: relative
      display: flex
      padding: 0.2rem 0
      border-bottom: 1px solid #e0e0e0
      .img-wrapper
        position: relative
        width: 2rem
        height: 2rem
        img
          width: 100%
          height: 100%
        .tag
          position: absolute
          width: 1.2rem
          height: 0.38rem
          line-height: 0.38rem
          text-align: center
          font-size: $font-size-medium
          color: $color-white
          border-bottom-right-radius: 0.15rem
          background: linear-gradient(to right, #ffab1e, #ff8d07)
      .info
        flex: 1
        padding-left: 0.2rem
        .title
          padding-top: 0.25rem
          height: 0.45rem
          font-size: $font-size-large
          color: $color-text
          ellipsis()
        .rating
          display: flex
          align-items: center
          height: 0.5rem
          .star
            .iconfont
              font-size: $font-size-small
              color: rgb(255, 180, 54)
          .evaluate
            padding-left: 0.2rem
            font-size: $font-size-medium
            color: $color-text-light
        .price
          padding-top: 0.2rem
          font-size: $font-size-medium
          color: $color-text-light
          span
            font-size: $font-size-large-m
            color: $color-price
        .desc
          margin-top: 0.5rem
          .text
            display: inline-block
            padding: 0 0.15rem
            height: 0.4rem
            line-height: 0.4rem
            font-size: $font-size-medium
            color: $color-desc
            background: $color-light-bg
            ellipsis()
      .region
        position: absolute
        right: 0
        top: 1.75rem
        font-size: $font-size-medium
        color: $color-text-light
</style>
