<template>
  <div class="field position-relative">
    <label  class="d-block">{{ data.name.toUpperCase().replace(/\_/g, " ") }}</label>
    x
    <input
      :for="'l_' + data.name"
      :name="data.name"
      :id="data.name"
      value="x"
      v-model="data.value"
      type="radio"
    />
    y
    <input
      :for="'l_' + data.name"
      :name="data.name"
      :id="data.name"
      value="y"
      v-model="data.value"
      type="radio"
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
  name: "RadioInput",
  props: {
    data: {},
  },
  data: () => ({
    dataValue: this.data,
  }),
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
};
</script>
