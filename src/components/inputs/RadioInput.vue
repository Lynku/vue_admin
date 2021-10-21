<template>
  <div class="field">
    <label :id="'l_' + data.name">{{ data.name }}</label>
    <input
      :for="'l_' + data.name"
      :name="data.name"
      :id="data.name"
      v-model="data.value"
      type="radio"
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
