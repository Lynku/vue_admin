<template>
  <div class="field position-relative">
    <label>
      {{ data.name.toUpperCase().replace(/\_/g, " ") }}
    </label>
    <br />
    <el-color-picker
      :name="data.name"
      :id="data.name"
      v-model="data.value"
    ></el-color-picker>
  </div>
</template>

<script>
export default {
  name: "ColorInput",
  props: {
    data: {},
  },
  data: () => ({
    dataValue: this.data,
  }),
};
</script>
