<template>
  <div class="field position-relative">
    <label>
      {{ data.name.toUpperCase().replace(/\_/g, " ") }}
    </label>
    <br />
    <input
      :for="'l_' + data.name"
      type="color"
      :name="data.name"
      :id="data.name"
      :class="{ 'is-invalid': validation.hasError('data.value') }"
      v-model="data.value"
    />

    <div class="invalid-tooltip">
      {{ validation.firstError("data.value") }}
    </div>
  </div>
</template>

<script>
import SimpleVueValidation from "simple-vue-validator";
const Validator = SimpleVueValidation.Validator;

export default {
  name: "ColorInput",
  props: {
    data: {},
  },
  validators: {
    "data.value": function (value) {
      if (value) {
        return Validator.value(value).regex(
          "^#[0-9a-f]{3}([0-9a-f]{3})?$",
          "Invalid color code!"
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
