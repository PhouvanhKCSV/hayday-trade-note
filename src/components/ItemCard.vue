<template>
  <div class="item">
    <section>
      <img :src="item.image" :alt="item.name" width="100" class="item-image">
      <h1 class="item-name">{{ item.name }}</h1>
    </section>

    <section>
      <button class="item-button" @click="increase(10)">+10</button>
      <button class="item-button" @click="decrease(10)">-10</button>
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
  justify-content: center;
  align-items: center;

  section {
    padding: 1rem;
  }
}

.item-image {

}

.item-name {
  margin: 0;
}

.item-button {
  padding: 1rem;
  font-size: 1.5rem;
  border-radius: 5px;
  outline: none;
}

.item-quantity {
  font-size: 3rem;
}
</style>
