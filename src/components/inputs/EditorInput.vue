<template>
  <div class="field">
    <textarea
      class="form-control"
      :name="data.name"
      :id="data.name"
      :placeholder="data.name"
      :class="{ 'is-danger': error }"
      v-model="data.value"
      rows="3"
    ></textarea>
  </div>
</template>

<script>
export default {
  name: "EditorInput",
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
