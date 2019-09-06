<template>
  <div class="city">
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list
      :hotCities="hotCities"
      :cities="cities"
    ></city-list>
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
      hotCities: [],
      cities: {}
    }
  },
  created() {
    this.getCityInfo()
  },
  computed: {
  },
  methods: {
    getCityInfo() {
      getCity().then((allCity) => {
        this.hotCities = Object.assign([], this.hotCities, allCity.hotCities)
        this.cities = Object.assign({}, this.cities, allCity.cities)
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
