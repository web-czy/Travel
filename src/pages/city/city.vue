<template>
  <div class="city">
    <city-header></city-header>
    <city-search></city-search>
    <city-list :city="city"></city-list>
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
      city: {}
    }
  },
  created() {
    this.getCityInfo()
  },
  methods: {
    getCityInfo() {
      getCity().then((city) => {
        this.city = Object.assign({}, this.city, city)
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
