<template>
  <div class="recommend">
    <div class="recommend-title">
      <img src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" />
      <span>猜你喜欢</span>
    </div>
    <ul class="recommend-list">
      <li
        class="item"
        v-for="item in recommendList"
        :key="item.id"
      >
        <div class="img-wrapper">
          <div class="tag">{{item.tag}}</div>
          <img :src="item.imgUrl" />
        </div>
        <div class="info">
          <div class="title">{{item.title}}</div>
          <div class="rating">
            <div class="star">
              <i
                class="iconfont iconiconfontxingxing"
                v-for="(n, index) in 5"
                :key="index"
              ></i>
            </div>
            <div class="evaluate">{{item.evaluate}}条评论</div>
          </div>
          <div class="price">
            <span>￥{{item.price}}</span>起
          </div>
          <div
            class="desc"
            v-if="item.desc"
          >
            <span class="text">{{item.desc}}</span>
          </div>
        </div>
        <div class="region">{{item.region}}</div>
      </li>
    </ul>
  </div>
</template>

<script type='text/ecmascript-6'>
export default {
  data() {
    return {
      recommendList: [
        {
          id: '0001',
          tag: '随买随用',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1508/89/895a1b7add84f23faca053ce9e3153db.water.jpg_200x200_99ae30ee.jpg',
          title: '北京欢乐谷',
          evaluate: 545455,
          price: 195,
          desc: '亚洲唯一飞行式过山车等你来挑战',
          region: '朝阳区'
        },
        {
          id: '0002',
          tag: '随买随用',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1804/1a/1a48cc20b0d6ed44a3.img.jpg_200x200_32e22bed.jpg',
          title: '奥林匹克塔',
          evaluate: 419,
          price: 121.9,
          region: '朝阳区'
        },
        {
          id: '0003',
          tag: '随买随用',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg',
          title: '故宫',
          evaluate: 461758,
          price: 195,
          desc: '世界五大宫之首，穿越与您近在咫尺',
          region: '东城区'
        },
        {
          id: '0004',
          tag: '可订今日',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/201308/08/41150dacc0e3a0c8c8d65eac.jpg_200x200_c62292e9.jpg',
          title: '北京动物园',
          evaluate: 9318,
          price: 180,
          region: '朝阳区'
        },
        {
          id: '0005',
          tag: '随买随用',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1708/2b/2b3b94de99c0a425a3.img.jpg_200x200_2458ffb2.jpg',
          title: '八达岭长城',
          evaluate: 67560,
          price: 40,
          desc: '不到长城非好汉',
          region: '延庆县'
        }
      ]
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
