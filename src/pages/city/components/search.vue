<template>
  <div>
    <div class="search">
      <input
        class="search-input"
        type="text"
        placeholder="输入城市名或拼音"
        v-model="keyword"
      />
    </div>
    <scroll
      v-show="keyword"
      :data="searchList"
      class="search-content"
      tag="div"
    >
      <ul>
        <li
          v-for="(item, index) in searchList"
          :key="item.id"
          class="search-item"
          :class="{'border-bottom': index < searchList.length - 1}"
          @click="selectItem(item.name)"
        >
          {{item.name}}
        </li>
        <li
          class="search-item"
          v-show="hasNoData"
        >
          没有找到匹配数据
        </li>
      </ul>
    </scroll>
  </div>
</template>

<script type='text/ecmascript-6'>
import Scroll from 'base/scroll/scroll'
import { debounce } from 'assets/js/util.js'

export default {
  name: 'CitySearch',
  props: {
    cities: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      keyword: '',
      searchList: []
    }
  },
  created() {
    this.$watch('keyword', debounce((newVal) => {
      this.search(newVal)
    }, 200))
  },
  computed: {
    hasNoData() {
      return !this.searchList.length
    }
  },
  methods: {
    selectItem(city) {
      this.$store.commit('changeCity', city)
      this.$router.push('/home')
    },
    search(keyword) {
      if (!keyword) {
        this.searchList = []
        return
      }
      const result = []
      for (let i in this.cities) {
        this.cities[i].forEach((value) => {
          if (value.spell.indexOf(keyword) > -1 || value.name.indexOf(keyword) > -1) {
            result.push(value)
          }
        })
      }
      this.searchList = result
    }
  },
  components: {
    Scroll
  }
}
</script>

<style scoped lang='stylus' rel='stylesheet/stylus'>
@import '~assets/styles/varibles.styl'

.search
  height: 0.72rem
  padding: 0 0.1rem
  background-color: $color-background
  .search-input
    box-sizing: border-box
    padding: 0 0.1rem
    width: 100%
    height: 0.62rem
    line-height: 0.62rem
    text-align: center
    color: #666
    border-radius: 0.06rem
.search-content
  overflow: hidden
  position: absolute
  top: 1.6rem
  right: 0
  bottom: 0
  left: 0
  z-index: 2
  background-color: $color-title-bg
  .search-item
    line-height: 0.62rem
    padding-left: 0.2rem
    color: $color-text-light
    background: $color-white
</style>
