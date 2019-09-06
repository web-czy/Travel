<template>
  <scroll
    class="listview"
    ref="listview"
    :data="cities"
    :probe-type="probeType"
    :listen-scroll="listenScroll"
    @scroll="scroll"
  >
    <div ref="listGroup">
      <div
        class="area"
        ref="currentCity"
      >
        <div class="title">{{currentCityName}}</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{ city }}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title">{{hotCityName}}</div>
        <div class="button-list">
          <div
            class="button-wrapper"
            v-for="item in hotCities"
            :key="item.id"
            @click="selectItem(item.name)"
          >
            <div class="button">{{ item.name }}</div>
          </div>
        </div>
      </div>
      <div
        class="area"
        v-for="(group, key) of cities"
        :key="key"
      >
        <div class="title">{{ key }}</div>
        <div class="item-list">
          <div
            class="item"
            :class="{ 'border-bottom': index < group.length - 1 }"
            v-for="(item, index) in group"
            :key="item.id"
            @click="selectItem(item.name)"
          >
            {{ item.name }}
          </div>
        </div>
      </div>
    </div>
    <div
      class="list-shortcut"
      @touchstart="onShortcutTouchStart"
      @touchmove.stop="onShortcutTouchMove"
      @touchmove.prevent
    >
      <ul>
        <li
          v-for="(item, index) in shortcutList"
          :key="item"
          :data-index="index"
          class="item"
          :class="{ current: shortcutIndex === index }"
        >
          {{ item }}
        </li>
      </ul>
    </div>
    <div
      class="list-fixed"
      ref="listFixed"
      v-show="fixedTitle"
    >
      <div class="fixed-title">{{ fixedTitle }}</div>
    </div>
  </scroll>
</template>

<script type='text/ecmascript-6'>
import Scroll from 'base/scroll/scroll'
import { getData } from 'assets/js/dom'
import { mapMutations, mapState } from 'vuex'

const ANCHOR_HEIGHT = 20
const TITLE_HEIGHT = 27
const HOT = '热'

export default {
  name: 'CityList',
  props: {
    hotCities: {
      type: Array,
      default() {
        return []
      }
    },
    cities: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      scrollY: -1,
      // currentIndex是左侧grouplist的index
      // 因为多一个当前城市，要映射到右侧，就减1
      // 在shortcutIndex()里边
      currentIndex: 0,
      diff: -1,
      currentCityName: '当前城市',
      hotCityName: '热门城市'
    }
  },
  created() {
    this.touch = {}
    this.listenScroll = true
    this.probeType = 3
    this.listHeight = []
  },
  computed: {
    shortcutIndex() {
      if (this.currentIndex < 1) {
        return 0
      }
      return this.currentIndex - 1
    },
    shortcutList() {
      let list1 = [HOT]
      let list2 = Object.keys(this.cities)
      return list1.concat(list2)
    },
    titleList() {
      let list1 = [this.currentCityName, this.hotCityName]
      let list2 = Object.keys(this.cities)
      return list1.concat(list2)
    },
    fixedTitle() {
      if (this.scrollY > 0) {
        return ''
      }
      return this.titleList[this.currentIndex] ? this.titleList[this.currentIndex] : ''
    },
    ...mapState(['city'])
  },
  methods: {
    scroll(pos) {
      this.scrollY = pos.y
    },
    onShortcutTouchStart(e) {
      let anchorIndex = parseInt(getData(e.target, 'index'))
      let firstTouch = e.touches[0]
      this.touch.anchorIndex = anchorIndex
      this.touch.y1 = firstTouch.pageY
      this._scrollTo(anchorIndex)
    },
    onShortcutTouchMove(e) {
      let firstTouch = e.touches[0]
      this.touch.y2 = firstTouch.pageY
      let delta = (this.touch.y2 - this.touch.y1) / ANCHOR_HEIGHT | 0
      let anchorIndex = parseInt(this.touch.anchorIndex) + delta
      this._scrollTo(anchorIndex)
    },
    _scrollTo(index) {
      if (!index && index !== 0) {
        return
      }
      if (index < 0) {
        index = 0
      } else if (index > this.listHeight.length - 2) {
        index = this.listHeight.length - 2
      }
      this.$refs.listview.scrollToElement(this.$refs.listGroup.children[index + 1], 0)
      this.scrollY = this.$refs.listview.scroll.y
    },
    _calculateHeight() {
      this.listHeight = []
      const grouplist = this.$refs.listGroup.children
      let height = 0
      this.listHeight.push(height)
      for (let i = 0; i < grouplist.length; i++) {
        let item = grouplist[i]
        height += item.clientHeight
        this.listHeight.push(height)
      }
    },
    selectItem(city) {
      this.changeCity(city)
      this.$router.push('/home')
    },
    ...mapMutations([
      'changeCity'
    ])
  },
  watch: {
    cities() {
      setTimeout(() => {
        this._calculateHeight()
      }, 20)
    },
    scrollY(newY) {
      if (newY > 0) {
        this.currentIndex = 0
        return
      }
      const listHeight = this.listHeight
      for (let i = 0; i < listHeight.length - 1; i++) {
        let height1 = listHeight[i]
        let height2 = listHeight[i + 1]
        if (-newY >= height1 && -newY < height2) {
          this.currentIndex = i
          this.diff = height2 + newY
          return
        }
      }
      this.currentIndex = listHeight.length - 2
    },
    diff(newVal) {
      let fixedTop = (newVal > 0 && newVal < TITLE_HEIGHT) ? newVal - TITLE_HEIGHT : 0
      if (this.fixedTop === fixedTop) {
        return
      }
      this.fixedTop = (fixedTop * 2) / 100
      this.$refs.listFixed.style.transform = `translate3d(0, ${this.fixedTop}rem, 0)`
    }
  },
  components: {
    Scroll
  }
}
</script>

<style scoped lang='stylus' rel='stylesheet/stylus'>
@import '~assets/styles/varibles.styl'

.border-bottom::before
  border-color: #ccc
.listview
  position: absolute
  top: 1.6rem
  right: 0
  bottom: 0
  left: 0
  overflow: hidden
  .area
    .title
      padding-left: 0.2rem
      height: 0.54rem
      line-height: 0.54rem
      font-size: $font-size-medium-x
      background: $color-title-bg
    .button-list
      padding: 0.1rem 0.6rem 0.1rem 0.1rem
      display: flex
      flex-wrap: wrap
      .button-wrapper
        width: 33.33%
        .button
          margin: 0.1rem
          padding: 0.1rem 0
          text-align: center
          border: 0.02rem solid #ccc
          border-radius: 0.06rem
    .item-list
      .item
        line-height: 0.76rem
        color: $color-text-light
        padding-left: 0.2rem
  .list-shortcut
    display: flex
    flex-direction: column
    justify-content: center
    position: absolute
    z-index: 1
    right: 0.1rem
    top: 50%
    transform: translateY(-50%)
    padding: 0.2rem 0
    width: 0.4rem
    text-align: center
    background-color: rgb(240, 240, 240)
    border-radius: 0.2rem
    border: 0.02rem solid rgb(225, 226, 226)
    .item
      height: 0.4rem
      line-height: 0.4rem
      font-size: $font-size-medium
      color: #888888
      &.current
        color: $color-background
  .list-fixed
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 0.54rem
    background: $color-title-bg
    // transform: translate3d(0, -0.32rem, 0)
    .fixed-title
      padding-left: 0.2rem
      height: 0.54rem
      line-height: 0.54rem
      font-size: $font-size-medium-x
</style>
