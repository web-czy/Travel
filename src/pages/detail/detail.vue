<template>
  <div class="detail">
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <div class="content"></div>
  </div>
</template>

<script type='text/ecmascript-6'>
import DetailBanner from './components/banner'
import DetailHeader from './components/header'

export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader
  }
}
</script>

<style scoped lang='stylus' rel='stylesheet/stylus'>
.detail
  position: relative
  .content
    height: 20rem
</style>
