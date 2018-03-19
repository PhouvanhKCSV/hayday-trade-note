<template>
  <div>
    <div class="filter">
      <item-filter-option
        class="filter-option"
        v-for="item in allItems"
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
      'allItems'
    ])
  },
}
</script>

<style lang="scss" scoped>
.filter {
  width: 100%;
  display: flex;
  justify-content: center;
}

.filter-option {
  margin: 0.5rem;
}
</style>
