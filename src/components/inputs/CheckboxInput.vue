<template>
  <div class="field">
    <label :id="'l_' + data.name">{{ data.name }}</label>
    <input
      :for="'l_' + data.name"
      type="checkbox"
      :name="data.name"
      :id="data.name"
      v-model="data.value"
    />
  </div>
</template>

<script>
export default {
  name: "CheckboxInput",
  props: {
    name: String,
    data: {},
  },
  data: () => ({
    dataValue: this.data,
  }),
};
</script>
