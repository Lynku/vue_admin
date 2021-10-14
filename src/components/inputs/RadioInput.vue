<template>
  <div class="field">
    <label :id="'l_' + name">{{ name }} </label>
    <input
      :for="'l_' + name"
      :name="data.name"
      :id="data.name"
      :placeholder="data.name"
      class="form-control"
      :class="{ 'is-danger': error }"
      v-model="data.value"
    />
    - add repeater
  </div>
</template>

<script>
export default {
  name: "RadioInput",
  props: {
    data: {},
    name: String,
    error: {
      type: String,
      default: null,
    },
  },
  data: () => ({
    dataValue: this.data,
  }),
};
</script>
