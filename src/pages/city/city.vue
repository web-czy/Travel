<template>
  <div class="city">
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :allCity="allCity"></city-list>
  </div>
</template>

<script type='text/ecmascript-6'>
import CityHeader from './components/header'
import CitySearch from './components/search'
import CityList from './components/list'
import { getCity } from 'api'

export default {
  name: 'city',
  data() {
    return {
      allCity: {}
    }
  },
  created() {
    this.getCityInfo()
  },
  computed: {
    cities() {
      let transferList = JSON.stringify(this.allCity);
      let list = JSON.parse(transferList);
      delete list['热门城市']
      return list
    }
  },
  methods: {
    getCityInfo() {
      getCity().then((allCity) => {
        this.allCity = Object.assign({}, this.allCity, allCity)
      })
    }
  },
  components: {
    CityHeader,
    CitySearch,
    CityList
  }
}
</script>

<style scoped lang='stylus' rel='stylesheet/stylus'>
@import '~assets/styles/varibles.styl'

.city
  position: fixed
  top: 0
  bottom: 0
  z-index: 100
  width: 100%
  background: $color-white
</style>
