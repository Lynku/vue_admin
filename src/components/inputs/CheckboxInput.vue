<template>
  <div class="field position-relative">
    <label class="d-block">
      {{ data.name.toUpperCase().replace(/\_/g, " ") }}</label
    >
    --->TO fix
    <!-- <el-checkbox-group :name="data.name" v-model="data.value">
      <el-checkbox v-for="(key, val) in options" :key="key" :label="val">{{
        key
      }}</el-checkbox>
    </el-checkbox-group> -->
  </div>
</template>

<script>
export default {
  name: "CheckboxInput",
  props: {
    data: { options: {} },
  },
  mounted: function () {
    if (this.data.options != undefined) {
      this.options = JSON.parse(this.data.options);
    }
  },
  data: () => ({
    dataValue: this.data,
    options: {},
  }),
};
</script>
