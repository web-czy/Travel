<template>
  <div class="weekend">
    <div class="weekend-title">
      <span>周末去哪儿</span>
    </div>
    <ul class="weekend-list">
      <li
        class="item"
        v-for="item in weekendList"
        :key="item.id"
      >
        <div class="img-wrapper">
          <img :src="item.imgUrl" />
        </div>
        <div class="info">
          <div class="title">{{item.title}}</div>
          <p class="desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script type='text/ecmascript-6'>
export default {
  data() {
    return {
      weekendList: [
        {
          id: '0001',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg',
          title: '京城周末撒欢',
          desc: '在帝都过周末，不仅仅是城中游！'
        },
        {
          id: '0002',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1811/7e/476589267ebb41.jpg_r_640x214_bf599709.jpg',
          title: '京城溜娃必去',
          desc: '德智体美劳全面发展的亲子日，这些地方该去看看…'
        },
        {
          id: '0003',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1505/aa/7baaf8a851d221.jpg_r_640x214_1431200f.jpg',
          title: '帝都必打卡',
          desc: '来北京必去的景点非这些地方莫属'
        },
        {
          id: '0004',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1606/85/c6b6bad1b977e.jpg_r_640x214_5c638941.jpg',
          title: '漂流勇进，烧烤露营',
          desc: '轻松水上漂，任我乐逍遥'
        },
        {
          id: '0005',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1505/53/02091f1ee43d0a.jpg_r_640x214_2e3256b1.jpg',
          title: '北京清凉避暑胜地',
          desc: '到大自然中享受“天然空调”的清凉'
        }
      ]
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
