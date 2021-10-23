<template>
  <div class="field position-relative">
    <label class="d-block">
      {{ data.name.toUpperCase().replace(/\_/g, " ") }}</label
    >
    <select
      ref="input"
      :name="data.name"
      :id="data.name"
      :placeholder="data.name"
      class="form-control"
      :class="{ 'is-invalid': validation.hasError('data.value') }"
      v-model="data.value"
    >
      <option value="" disabled>{{ data.name }}</option>
      <option value="1">{{ data.name }}</option>
    </select>
    <div class="invalid-tooltip">
      {{ validation.firstError("data.value") }}
    </div>
  </div>
</template>

<script>
import SimpleVueValidation from "simple-vue-validator";
const Validator = SimpleVueValidation.Validator;

export default {
  name: "DropdownInput",
  props: {
    data: {},
  },
  validators: {
    "data.value": function (value) {
      return Validator.value(value).in(["", "1"]);
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
