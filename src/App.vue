<template>
  <main>

    <item-filter />

    <item-card
      v-for="item in checkedItems"
      :key="item.id"
      :item="item" />

  </main>
</template>

<script>
import { mapGetters } from 'vuex'
import ItemFilter from './components/ItemFilter'
import ItemCard from './components/ItemCard'

export default {
  name: 'app',
  components: {
    ItemFilter,
    ItemCard
  },
  computed: {
    ...mapGetters('supplies', [
      'allItems',
      'checkedItems'
    ])
  },
}
</script>

<style lang="scss">
@import '../node_modules/bootstrap/scss/bootstrap-reboot.scss';
@import '../node_modules/bootstrap/scss/bootstrap-grid.scss';


</style>
