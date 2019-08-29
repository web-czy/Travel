<template>
  <div class="swiper">
    <swiper
      id="v-swiper"
      :options="swiperOption"
    >
      <swiper-slide
        v-for="item in swiperList"
        :key="item.id"
      >
        <img
          class="swiper-img"
          :src="item.imgUrl"
        />
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
  name: 'v-swiper',
  data() {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        loop: true,
        autoplay: true
      },
      swiperList: [
        {
          id: '0001',
          imgUrl:
            'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20198/fffc0c06ddfe6fa9bad3cd813b591873.jpg_750x200_528c2db7.jpg'
        },
        {
          id: '0002',
          imgUrl:
            'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/87a224d0349d94a11e97f31aa1aba4f5.jpg_750x200_1f78af87.jpg'
        },
        {
          id: '0003',
          imgUrl:
            'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/d7bbc21db442366a882e04ddc984669a.jpg_750x200_85e640d9.jpg'
        },
        {
          id: '0004',
          imgUrl:
            'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20198/eb3fdb7ff86de0160cafe76b6a6a8ee3.jpg_750x200_e6930e5c.jpg'
        },
        {
          id: '0005',
          imgUrl:
            'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/0b0622e5b6ac5fbed3084dd2832e6f8f.jpg_750x200_895321b6.jpg'
        }
      ]
    }
  }
}
</script>

<style scoped lang='stylus' rel='stylesheet/stylus'>
.swiper >>> .swiper-pagination-bullet-active
  background: #fff
.swiper
  width: 100%
  height: 0
  padding-bottom: 26.66%
  overflow: hidden
  background-color: #eee
  .swiper-img
    width: 100%
</style>
