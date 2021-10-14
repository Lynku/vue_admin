<template>
  <div class="field">
    to finish
    <!-- <input
      type="file"
      :name="data.name"
      :id="data.name"
      v-model="data.value"
      class="form-control"
    /> -->
    <img v-if="data.value" :src="data.value" />
  </div>
</template>

<script>
export default {
  name: "ImageInput",
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
