<template>
  <transition>
    <slot></slot>
  </transition>
</template>

<script type='text/ecmascript-6'>
export default {
  name: 'FadeAnimation'
}
</script>

<style scoped lang='stylus' rel='stylesheet/stylus'>
.v-enter-active, .v-leave-active
  opacity: 1
  transition: opacity 0.5s
.v-enter, .v-leave-to
  opacity: 0
</style>
