<template>
  <main>

    <item-filter class="item-filter" />

    <div class="container">
      <item-card
        v-for="item in checkedItems"
        :key="item.id"
        :item="item" />
    </div>

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

.item-filter {
  box-shadow: 0 8px 6px -6px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
}

.container {
  width: 600px;
  margin: 0 auto;
}
</style>
