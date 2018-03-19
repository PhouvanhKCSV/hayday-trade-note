<template>
  <div class="filter-option">

    <input
      :id="id"
      type="checkbox"
      value="option"/>

      <label
        :for="id"
        :style="`background-image: url(${image})`"></label>

    </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    }
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
