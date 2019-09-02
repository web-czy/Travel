<template>
  <div class="city">
    <city-header></city-header>
    <city-search></city-search>
    <city-list></city-list>
  </div>
</template>

<script type='text/ecmascript-6'>
import CityHeader from './components/header'
import CitySearch from './components/search'
import CityList from './components/list'

export default {
  name: 'city',
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
