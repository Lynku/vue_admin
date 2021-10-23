<template>
  <div class="card p-2 mb-2">
     <div class="input-group mb-3">
      <select v-model='data.type' class="form-control">
        <option
          v-for="(display, posible_type) in posibility"
          :key="posible_type"
          :value="posible_type"
          :selected='data.type==posible_type'
        >
          {{ display }}
        </option>
      </select>
      <span class="input-group-text"> / </span>
      <input
        class="form-control"
        type="text"
        :name="data.name"
        v-model="data.name"
      />
      <span class="input-group-text">
        <slot></slot>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "FieldOption",
  props: {
    posibility: {},
    data: {},
  },
  data: () => ({
    dataValue: this.data,
  }),
};
</script>
