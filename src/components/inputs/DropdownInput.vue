<template>
  <div class="field">
    <select
      ref="input"
      :name="data.name"
      :id="data.name"
      :placeholder="data.name"
      class="form-control"
      :class="{ 'is-danger': error }"
      v-model="data.value"
    >
      <option value="" disabled>{{ data.name }}</option>
      <option value="1">{{ data.name }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "DropdownInput",
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
