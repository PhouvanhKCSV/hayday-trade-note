<template>
  <div class="filter-option">

    <input
      :id="item.id"
      type="checkbox"
      value="option"
      v-model="checkedState" />

      <label
        :for="item.id"
        :style="`background-image: url(${item.image})`"></label>

    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    checkedState: {
      get () {
        return this.item.checked
      },
      set (value) {
        this.updateItemCheckedState({ ...this.item, checked: value })
      }
    }
  },
  methods: {
    ...mapActions('supplies', [
      'updateItemCheckedState'
    ])
  }
}
</script>

<style lang="scss" scoped>
input {
  display: none;
}

label {
  background-repeat: no-repeat;
  width: 100px;
  height: 100px;
  background-position: left center;
  background-size: auto 100%;
  border-radius: 5px;
}

input:checked + label {
  background-color: #e0e0e0;
}
</style>
