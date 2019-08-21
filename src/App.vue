<template>
  <div id="app">
    <wa-header></wa-header>
    <router-view/>
    <wa-footer></wa-footer>
  </div>
</template>

<script>
import WaHeader from '@/components/common/WaHeader'
import WaFooter from '@/components/common/WaFooter'

export default {
  components: {
    WaHeader,
    WaFooter
  }  
}
</script>

<style lang="sass">
@import '@/assets/sass/style.sass'

</style>
