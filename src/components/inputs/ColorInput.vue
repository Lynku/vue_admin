<template>
  <div class="field">
    <label :id="'l_' + data.name">{{ data.name }}</label>
    <input
      :for="'l_' + data.name"
      type="color"
      :name="data.name"
      :id="data.name"
      :class="{ 'is-danger': error }"
      v-model="data.value"
    />
  </div>
</template>

<script>
export default {
  name: "ColorInput",
  props: {
    name: String,
    data: {},
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
