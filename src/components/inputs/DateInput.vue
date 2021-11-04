<template>
  <div class="field position-relative">
    <label> {{ data.name.toUpperCase().replace(/\_/g, " ") }}</label>
    <el-date-picker
      :name="data.name"
      :id="data.name"
      :placeholder="data.name"
      v-model="data.value"
      type="date"
    >
    </el-date-picker>
  </div>
</template>

<script>
export default {
  name: "DateInput",
  props: {
    data: {},
  },
  methods: {},
  data: () => ({
    dataValue: this.data,
  }),
};
</script>
