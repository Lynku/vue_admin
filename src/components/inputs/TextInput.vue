<template>
  <div class="field position-relative">
    <label> {{ data.name.toUpperCase().replace(/\_/g, " ") }}</label>
    <el-input
      type="text"
      :placeholder="data.name"
      :id="data.name"
      v-model="data.value"
      maxlength="255"
      show-word-limit
      :class="{ 'is-invalid': validation.hasError('data.value') }"
    >
    </el-input>
    <div class="invalid-tooltip">
      {{ validation.firstError("data.value") }}
    </div>
  </div>
</template>

<script>
import SimpleVueValidation from "simple-vue-validator";
const Validator = SimpleVueValidation.Validator;

export default {
  name: "TextInput",
  props: {
    data: {},
  },
  validators: {
    "data.value": function (value) {
      if (value) {
        return Validator.value(value).maxLength(255);
      }
    },
  },
  methods: {
    validate: function () {
      return this.$validate().then(
        function (success) {
          if (success) {
            return {
              "data.value": this.data.value,
            };
          }
        }.bind(this)
      );
    },
    reset: function () {
      this.validation.reset();
    },
  },
  data: () => ({
    dataValue: this.data,
  }),
};
</script>
