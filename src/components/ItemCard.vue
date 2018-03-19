<template>
  <div class="item">
    <section class="info-section">
      <img :src="item.image" :alt="item.name" width="100" class="item-image">
      <h1 class="item-name">{{ item.name }}</h1>
    </section>

    <section>
      <button class="item-button increase" @click="increase(10)">+10</button>
      <button class="item-button decrease" @click="decrease(10)">-10</button>
    </section>

    <section>
      <strong class="item-quantity">{{ quantity }}</strong>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    quantity: 0
  }),
  methods: {
    increase (value) {
      this.quantity += value
    },
    decrease (value) {
      if (this.quantity <= 0) return
      this.quantity -= value
    }
  }
}
</script>

<style lang="scss" scoped>
.item {
  display: flex;
  justify-content: flex-start;
  align-items: center;

  section {
    padding: 1rem;
  }
}

.item-name {
  margin: 0;
}

.item-button {
  padding: 1rem;
  font-size: 1.5rem;
  border-radius: 5px;
  outline: none;
  margin-left: 0.25rem;
  margin-right: 0.25rem;

  &.increase {
    // border-color: #999;
  }

  &.decrease {
    // opacity: 0.8;
  }
}

.item-quantity {
  font-size: 3rem;
  margin-left: 1rem;
}

.info-section {
  width: 200px;
  text-align: center;
}
</style>
