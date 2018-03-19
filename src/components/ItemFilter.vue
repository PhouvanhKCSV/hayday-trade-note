<template>
  <div>
    <div class="filter">
      <item-filter-option
        class="filter-option"
        v-for="(item, index) in items"
        :key="index"
        :id="`checkbox-${index}`"
        :name="item.name"
        :image="item.image"></item-filter-option>
    </div>
  </div>
</template>

<script>
import ItemFilterOption from './ItemFilterOption'

export default {
  data: () => ({
    items: [
      { name: 'Bolt', image: '/images/Bolt.png' },
      { name: 'Plank', image: '/images/Plank.png' },
      { name: 'Duct Tape', image: '/images/Duct_Tape.png' },

      { name: 'Nail', image: '/images/Nail.png' },
      { name: 'Screw', image: '/images/Screw.png' },
      { name: 'Wood Panel', image: '/images/Wood_Panel.png' },
    ]
  }),
  components: {
    ItemFilterOption
  }
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
