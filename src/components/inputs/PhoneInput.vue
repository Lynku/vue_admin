<template>
  <div class="field position-relative">
    <label> {{ data.name.toUpperCase().replace(/\_/g, " ") }}</label>
    <el-input
      type="text"
      :name="data.name"
      :id="data.name"
      :placeholder="data.name"
      :class="{ 'is-invalid': validation.hasError('data.value') }"
      v-model="data.value"
    >
      <template slot="prepend"><i class="el-icon-phone"></i></template>
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
  name: "PhoneInput",
  props: {
    data: {},
  },
  validators: {
    "data.value": function (value) {
      if (value) {
        return Validator.value(value).regex(
          "^[0-9 -+()]*$",
          "Phone number should only contain numbers and/or `+,-,(,)`!"
        );
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
