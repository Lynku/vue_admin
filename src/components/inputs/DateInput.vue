<template>
  <div class="field">
    <label :id="'l_' + data.name">{{ data.name }}</label>
    <input
      :for="'l_' + data.name"
      :name="data.name"
      :id="data.name"
      :placeholder="data.name"
      class="form-control"
      :class="{ 'is-danger': error }"
      v-model="data.value"
      type="date"
    />
  </div>
</template>

<script>
export default {
  name: "DateInput",
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
