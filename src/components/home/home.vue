<template>
  <div class="home">
    <v-header></v-header>
    <!-- <v-swiper></v-swiper> -->
  </div>
</template>

<script type='text/ecmascript-6'>
import VHeader from 'components/v-header/v-header'
// import VSwiper from 'base/v-swiper/v-swiper'

export default {
  name: 'Home',
  data() {
    return {
      swiperOption: [
        {
          id: 0,
          url:
            'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20198/fffc0c06ddfe6fa9bad3cd813b591873.jpg_750x200_528c2db7.jpg'
        },
        {
          id: 1,
          url:
            'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/87a224d0349d94a11e97f31aa1aba4f5.jpg_750x200_1f78af87.jpg'
        },
        {
          id: 2,
          url:
            'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/d7bbc21db442366a882e04ddc984669a.jpg_750x200_85e640d9.jpg'
        },
        {
          id: 3,
          url:
            'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20198/eb3fdb7ff86de0160cafe76b6a6a8ee3.jpg_750x200_e6930e5c.jpg'
        },
        {
          id: 4,
          url:
            'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/0b0622e5b6ac5fbed3084dd2832e6f8f.jpg_750x200_895321b6.jpg'
        }
      ]
    }
  },
  components: {
    VHeader
  }
}
</script>

<style scoped lang='stylus' rel='stylesheet/stylus'></style>
