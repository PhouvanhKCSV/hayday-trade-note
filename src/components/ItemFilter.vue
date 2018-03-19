<template>
  <div>
    <div class="filter">
      <item-filter-option
        class="filter-option"
        v-for="item in items"
        :key="item.id"
        :item="item"></item-filter-option>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ItemFilterOption from './ItemFilterOption'

export default {
  components: {
    ItemFilterOption
  },
  computed: {
    ...mapGetters('supplies', [
      'items'
    ])
  },
}
</script>

<style lang="scss" scoped>
.filter {
  width: 100%;
  display: flex;
}

.filter-option {
  margin: 0.5rem;
}
</style>
