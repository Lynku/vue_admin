<template>
  <div class="field position-relative">
    <label class="d-block">
      {{ data.name.toUpperCase().replace(/\_/g, " ") }}</label
    >
    <el-select
      :name="data.name"
      :id="data.name"
      v-model="data.value"
      clearable
      placeholder="Select"
    >
      <el-option
        v-for="(key, val) in options"
        :key="key"
        :label="key"
        :value="val"
      >
      </el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  name: "DropdownInput",
  props: {
    data: { options: { none: "-" } },
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
