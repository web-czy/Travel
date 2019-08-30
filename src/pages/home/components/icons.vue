<template>
  <div class="icons">
    <swiper
      id="icons"
      :options="swiperOption"
    >
      <swiper-slide
        class="slide"
        v-for="(page, index) in pages"
        :key="index"
      >
        <div
          class="icon"
          v-for="item in page"
          :key="item.id"
        >
          <img :src="item.imgUrl" />
          <p>{{item.desc}}</p>
        </div>
      </swiper-slide>
      <div
        class="swiper-pagination"
        slot="pagination"
      ></div>
    </swiper>
  </div>
</template>

<script type='text/ecmascript-6'>
export default {
  data() {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        }
      },
      iconList: [
        {
          id: '0001',
          desc: '景点门票',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png'
        },
        {
          id: '0002',
          desc: '故宫',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png'
        },
        {
          id: '0003',
          desc: '北京必游',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png'
        },
        {
          id: '0004',
          desc: '水上乐园',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png'
        },
        {
          id: '0005',
          desc: '一日游',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png'
        },
        {
          id: '0006',
          desc: '古北水镇',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/67/9a1678221b8e0e02.png'
        },
        {
          id: '0007',
          desc: '动植物园',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png'
        },
        {
          id: '0008',
          desc: '奥林匹克塔',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/b6/37560ece9c62b502.png'
        },
        {
          id: '0009',
          desc: '北京世园会',
          imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/b4511345827006994aa1980a3886f0ac.png'
        },
        {
          id: '0010',
          desc: '优惠券',
          imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/bf88c62458044ca2ef9d733690eef3fc.png'
        }
      ]
    }
  },
  computed: {
    pages() {
      const pages = []
      this.iconList.forEach((item, index) => {
        // 当前下标对应的数据应该展示在第几页
        // 向下取整，如果index是0-7，page就是0，如果index是8，就是第9个数据，page为1
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style scoped lang='stylus' rel='stylesheet/stylus'>
@import '~assets/styles/varibles.styl'
@import '~assets/styles/mixins.styl'

.icons
  width: 100%
  height: 3.7rem
  >>> .slide
    display: flex
    flex-wrap: wrap
    align-content: flex-start
    width: 100%
    height: 3.7rem
.icon
  width: 25%
  height: 1.5rem
  padding-top: 0.1rem
  text-align: center
  font-size: $font-size-medium-m
  color: $color-text
  img
    width: 1.1rem
    height: 1.1rem
  p
    ellipsis()
</style>
