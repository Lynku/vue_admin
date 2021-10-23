<template>
  <div class="field position-relative">
    <label class="d-block"> {{ data.name.toUpperCase().replace(/\_/g, " ") }}</label>
    <input
      :for="'l_' + data.name"
      type="checkbox"
      :name="data.name"
      :id="data.name"
      value="x"
      v-model="data.value"
    />
    - add repeater
    <div class="invalid-tooltip">
      {{ validation.firstError("data.value") }}
    </div>
  </div>
</template>

<script>

import SimpleVueValidation from "simple-vue-validator";
const Validator = SimpleVueValidation.Validator;

export default {
  name: "CheckboxInput",
  props: {
        data: {},
  },
  validators: {
    "data.value": function (value) {
      return Validator.value(value).in(["x", "y"]);
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
