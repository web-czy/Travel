<template>
  <div class="album">
    <div class="title border-bottom">
      <div class="back">
        <i class="iconfont iconfanhui"></i>
      </div>
      景区图片
    </div>
    <scroll
      :data="imgList"
      class="img-list"
      tag="div"
    >
      <ul class="wrapper">
        <li
          class="img-item"
          v-for="item in imgList"
          :key="item.id"
        >
          <img :src="item.url" />
        </li>
      </ul>
    </scroll>
    <div
      class="gallary"
      v-show="showGallary"
    >
      <div class="gallary-wrapper">123</div>
    </div>
  </div>
</template>

<script type='text/ecmascript-6'>
import Scroll from 'base/scroll/scroll'

export default {
  name: 'Gallary',
  props: {
    imgList: {
      type: Array,
      default() {
        return [{
          id: '001',
          url: 'http://img1.qunarzz.com/sight/p0/1508/89/895a1b7add84f23faca053ce9e3153db.water.jpg_350x240_5291130a.jpg'
        },
        {
          id: '002',
          url: 'http://img1.qunarzz.com/sight/p0/1906/e7/e7276de002459b50a3.img.jpg_350x240_dd696261.jpg'
        },
        {
          id: '003',
          url: 'http://img1.qunarzz.com/sight/p0/1906/e8/e88430aafb498100a3.img.jpg_350x240_cc778652.jpg'
        },
        {
          id: '004',
          url: 'http://img1.qunarzz.com/sight/p0/1906/cc/cc590ab5b51a5ea9a3.img.jpg_350x240_b1fcc759.jpg'
        },
        {
          id: '005',
          url: 'http://img1.qunarzz.com/sight/p0/1906/cd/cdc0a756c33a26cfa3.img.jpg_350x240_5de2d8cd.jpg'
        },
        {
          id: '006',
          url: 'http://img1.qunarzz.com/sight/p0/1906/2e/2ec8175b939ab865a3.img.jpg_350x240_703f0021.jpg'
        },
        {
          id: '007',
          url: 'http://img1.qunarzz.com/sight/p0/1901/46/46416618f4ae8e95a3.img.png_350x240_d56775a9.png'
        },
        {
          id: '008',
          url: 'http://img1.qunarzz.com/sight/p0/1508/a5/4003f9dd7bebf61eccbf64046e26d487.water.jpg_350x240_e11745bd.jpg'
        },
        {
          id: '009',
          url: 'http://img1.qunarzz.com/sight/p0/1901/ef/efd26a627912c27ca3.img.png_350x240_d9b778bd.png'
        },
        {
          id: '010',
          url: 'http://img1.qunarzz.com/sight/p0/1507/b0/debf337993099d34013807df5cf5545b.water.jpg_350x240_84df370a.jpg'
        },
        {
          id: '011',
          url: 'http://img1.qunarzz.com/sight/p0/1507/b9/7ce37fa2e77ad7b9cb49d54352c8e357.water.jpg_350x240_4df3818f.jpg'
        },
        {
          id: '012',
          url: 'http://img1.qunarzz.com/sight/p0/1508/a3/0a981148deab444887db5088456ce7f9.water.jpg_350x240_d9594f37.jpg'
        },
        {
          id: '013',
          url: 'http://img1.qunarzz.com/sight/p0/1811/2e/2e195fce24b4dbd2a3.img.jpg_350x240_c5c45068.jpg'
        },
        {
          id: '014',
          url: 'http://img1.qunarzz.com/sight/p0/1811/a2/a282cb20136e0344a3.img.jpg_350x240_c08e48cd.jpg'
        },
        {
          id: '015',
          url: 'http://img1.qunarzz.com/sight/p0/1811/8d/8dcb39276ec90746a3.img.jpg_350x240_7638e231.jpg'
        },
        {
          id: '016',
          url: 'http://img1.qunarzz.com/sight/p0/1507/33/ea7e61b806182a1212ef3954cf38c0ed.water.jpg_350x240_fb6d6c2d.jpg'
        },
        {
          id: '017',
          url: 'http://img1.qunarzz.com/sight/p0/1811/38/38b55b637dd41deea3.img.jpg_350x240_2e7a269a.jpg'
        }]
      }
    }
  },
  data() {
    return {
      showGallary: false
    }
  },
  components: {
    Scroll
  }
}
</script>

<style scoped lang='stylus' rel='stylesheet/stylus'>
@import '~assets/styles/varibles.styl'

.album
  position: fixed
  top: 0
  right: 0
  bottom: 0
  left: 0
  background: $color-title-bg
  .title
    position: relative
    width: 100%
    height: $headerHeight
    line-height: $headerHeight
    text-align: center
    font-size: $font-size-large
    color: #333
    background: $color-white
    .back
      position: absolute
      top: 0
      left: 0.2rem
      width: 0.4rem
      font-size: $font-size-large-x
    &.border-bottom::before
      border-color: $color-border
  .img-list
    overflow: hidden
    position: absolute
    top: 0.89rem
    right: 0
    bottom: 0
    left: 0
    width: 100%
    .wrapper
      display: flex
      flex-wrap: wrap
      padding: 0.1rem 0 0.2rem 0
      li:nth-child(odd)
        padding: 0.05rem 0.05rem 0.05rem 0.2rem
      li:nth-child(even)
        padding: 0.05rem 0.2rem 0.05rem 0.05rem
      .img-item
        box-sizing: border-box
        width: 50%
        img
          width: 100%
  .gallary
    display: flex
    flex-direction: column
    justify-content: center
    position: fixed
    top: 0
    right: 0
    bottom: 0
    left: 0
    background: #000
    z-index: 99
    .wrapper
      background: #fff
</style>
