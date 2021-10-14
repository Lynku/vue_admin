<template>
  <div class="field">
    <input
      type="url"
      :name="data.name"
      :id="data.name"
      :placeholder="data.name"
      class="form-control"
      :class="{ 'is-danger': error }"
      v-model="data.value"
    />
  </div>
</template>

<script>
export default {
  name: "UrlInput",
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
