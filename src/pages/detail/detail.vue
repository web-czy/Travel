<template>
  <div v-if="this.scenic">
    <div class="header-fixed" ref="headerFixed">
      <div class="back" @click="back">
        <i class="iconfont iconfanhui"></i>
      </div>
      {{ scenic.title }}
    </div>
    <scroll
      :data="detail.categoryList"
      :probeType="probeType"
      :listenScroll="listenScroll"
      :click="click"
      @scroll="scroll"
      class="detail"
      tag="div"
    >
      <div>
        <div class="header-abs" @click="back" v-show="showAbs">
          <i class="iconfont iconfanhui"></i>
        </div>
        <div class="banner">
          <img class="img" @click="toAlbum" :src="detail.bannerImg" />
          <div class="banner-info">
            <div class="number" v-if="detail.gallaryImgs">
              <i class="iconfont iconiconfontxingxing"></i>
              <span>{{ detail.gallaryImgs.length }}</span>
            </div>
            <div class="title">{{ detail.sightName }}</div>
          </div>
        </div>
        <div class="recommend">
          <div class="recommend-header border-bottom">
            <span class="icon"></span>
            <span>去哪儿推荐</span>
          </div>
          <detail-commodity :list="detail.recommendList"></detail-commodity>
        </div>
        <detail-list :list="categoryList"></detail-list>
      </div>
    </scroll>
  </div>
</template>

<script type='text/ecmascript-6'>
import Scroll from 'base/scroll/scroll'
import DetailList from './components/list'
import DetailCommodity from './components/commodity'
import { prefixStyle } from 'assets/js/dom'
import { getDetail } from 'api'
import { mapState, mapMutations } from 'vuex'

const HEADER_HEIGHT = 44
const opacity = prefixStyle('opacity')

export default {
  name: 'Detail',
  data() {
    return {
      showAbs: true,
      opcity: 0,
      scrollY: 0,
      detail: {}
    }
  },
  mounted() {
    this.getDetailInfo()
  },
  created() {
    this.probeType = 3
    this.listenScroll = true
    this.click = true
    const screenWidth = parseInt(document.documentElement.clientWidth)
    this.topHeight = screenWidth * 0.55 - HEADER_HEIGHT
  },
  activated() {
    if (this.scenic.id !== this.detail.id) {
      this.getDetailInfo()
    }
  },
  computed: {
    categoryList() {
      if (!this.detail.categoryList) {
        return
      }
      this.detail.categoryList.forEach(allList => {
        allList.sortList.forEach(list => {
          this.$set(list, 'show', false)
        })
      })
      return this.detail.categoryList
    },
    ...mapState(['scenic'])
  },
  methods: {
    back() {
      this.$router.back()
    },
    scroll(pos) {
      this.scrollY = pos.y
    },
    toAlbum() {
      this.$router.push(`/album/${this.detail.id}`)
    },
    getDetailInfo() {
      if (!this.scenic.id) {
        this.$router.push('/')
        return
      }
      getDetail().then(detailList => {
        detailList.forEach(detail => {
          if (this.scenic.id === detail.id) {
            this.detail = Object.assign({}, this.detail, detail)
            this.changeGallaryImgs(detail.gallaryImgs)
          }
        })
      })
    },
    ...mapMutations(['changeGallaryImgs'])
  },
  watch: {
    scrollY(newY) {
      let opacityNumber = 0
      if (-newY <= 0) {
        opacityNumber = 0
        this.showAbs = true
      } else if (-newY > 0 && -newY <= this.topHeight) {
        const percent = -newY / this.topHeight
        opacityNumber = Math.min(percent, 1)
        this.showAbs = false
      } else {
        opacityNumber = 1
        this.showAbs = false
      }
      this.$refs.headerFixed.style[opacity] = opacityNumber
    }
  },
  components: {
    Scroll,
    DetailList,
    DetailCommodity
  }
}
</script>

<style scoped lang='stylus' rel='stylesheet/stylus'>
@import '~assets/styles/varibles.styl'

.header-fixed
  position: fixed
  top: 0
  left: 0
  width: 100%
  height: $headerHeight
  line-height: $headerHeight
  text-align: center
  font-size: $font-size-large
  color: $color-white
  background: $color-background
  opacity: 0
  z-index: 10
  .back
    position: absolute
    top: 0
    left: 0rem
    width: 0.8rem
    font-size: $font-size-large-x
.detail
  position: fixed
  top: 0
  right: 0
  bottom: 0
  left: 0
  .white-bg
    background: #ffffff
  .margin-top
    margin-top: 0.2rem
  .header-abs
    position: absolute
    left: 0.1rem
    top: 0.14rem
    width: 0.6rem
    height: 0.6rem
    line-height: 0.6rem
    text-align: center
    border-radius: 50%
    background: rgba(0, 0, 0, 0.5)
    z-index: 1
    .iconfont
      font-size: $font-size-large-x
      color: $color-white
  .banner
    position: relative
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 55%
    .img
      width: 100%
    .banner-info
      box-sizing: border-box
      padding: 0 0 0.15rem 0.2rem
      display: flex
      flex-direction: column
      justify-content: flex-end
      position: absolute
      bottom: 0
      left: 0
      width: 100%
      color: $color-white
      background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
      .number
        display: flex
        justify-content: center
        width: 1.2rem
        height: 0.4rem
        line-height: 0.4rem
        text-align: center
        font-size: $font-size-medium
        border-radius: 0.2rem
        background: rgba(0, 0, 0, 0.5)
        .iconfont
          margin-right: 0.1rem
          font-size: 0.16rem
      .title
        line-height: 0.6rem
        font-size: $font-size-large-x
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.7)
  .recommend
    margin-top: 0.2rem
    padding-left: 0.2rem
    background: $color-white
    .recommend-header
      display: flex
      align-items: center
      line-height: $headerHeight
      font-size: $font-size-large
      .icon
        display: inline-block
        width: 0.36rem
        height: 0.36rem
        background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAflBMVEUAAAD/bm7/b2//b2//eXn/b2//b2//bm7/b2//b2//bm7/b2//b2//b2//bm7/b2//b2//cXH/eHj/qqr/bm7/////cXH/iIj/oqL//f3/mJj/fHz/9/f/8PD/4eH/ycn/6+v/1dX/0ND/t7f/ra3/kpL/jo7/c3P/5ub/vr7o37bEAAAAFHRSTlMA9uZeCfny7NvLt6+PfGZONxsRA/pz1k8AAAFrSURBVEjHpZbZdoMwDERtMEvYE8YJZN/b/v8PNvicJsiYqJzcB548WGNZksUAVWZJHAVBFCdZqQTDwk8lesjUX4hxVB5iQJiPbVMXHpx4RS0czGcYZTYXAyoPb/AqYeFLvEX61nqwEEUlwSKrnl9X/JtmZfl4Oq9d53Pfan2yzurvdAs42OsHaxAKYVDOA207wcEKShlBDhfaIUBu7lsIl2UjuIASLkZTsDaCxpWMFC7ORrCBRfqw7MxZY9Z/w0YqUWLI8tLqJ+25n8BSZP3Am+aG2/Vw1IQ9XmQiwZNV9z+0mkKtJCKmAg094IgXsYg4Ab0gkQh4wRUvgv8I1kTAh7QHCYk3fQIxnbCCHXokImMFPyCJKznB9gvkaijJ7XCnl0+kU3ZISQFttp3DnWW5oQVES3S57D4Eq0RJE+DJSZvh8RRpZDwFaZU8s5o0YxZvPrXdTx0on40sfih+Nnb5wT7x6fDR42Ty8+cXnHyOvDgQEbUAAAAASUVORK5CYII=') no-repeat
        margin-right: 0.1rem
        background-size: 0.36rem 0.36rem
</style>
