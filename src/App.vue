<template>
  <div>
    <item-filter />
  </div>
</template>

<script>
import ItemFilter from './components/ItemFilter'

export default {
  name: 'app',
  components: {
    ItemFilter
  }
}
</script>

<style lang="scss">
@import '../node_modules/bootstrap/scss/bootstrap-reboot.scss';
@import '../node_modules/bootstrap/scss/bootstrap-grid.scss';


</style>
