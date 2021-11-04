<template>
  <div class="field position-relative">
    <label> {{ data.name.toUpperCase().replace(/\_/g, " ") }}</label>
    <el-input
      type="textarea"
      :rows="3"
      :name="data.name"
      :id="data.name"
      :placeholder="data.name"
      v-model="data.value"
    >
    </el-input>
  </div>
</template>

<script>
import SimpleVueValidation from "simple-vue-validator";
const Validator = SimpleVueValidation.Validator;

export default {
  name: "TextareInput",
  props: {
    data: {},
  },
  data: () => ({
    dataValue: this.data,
  }),
};
</script>
