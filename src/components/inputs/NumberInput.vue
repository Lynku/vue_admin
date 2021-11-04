<template>
  <div class="field position-relative">
    <label> {{ data.name.toUpperCase().replace(/\_/g, " ") }}</label>
    <el-input-number
      :name="data.name"
      :id="data.name"
      :min="0"
      v-model="data.value"
    ></el-input-number>
  </div>
</template>

<script>
export default {
  name: "NumberInput",
  props: {
    data: {},
  },
  data: () => ({
    dataValue: this.data,
  }),
};
</script>
