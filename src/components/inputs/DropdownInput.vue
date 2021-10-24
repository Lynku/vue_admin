<template>
  <div class="field position-relative">
    <label class="d-block">
      {{ data.name.toUpperCase().replace(/\_/g, " ") }}</label
    >
    <div v-if="data.options">
      <div>
        <select
          :name="data.name"
          :id="data.name"
          :placeholder="data.name"
          class="form-control"
          :class="{ 'is-invalid': validation.hasError('data.value') }"
          v-model="data.value"
        >
          <option value="">-</option>
          <option v-for="(val, k) in data.options" :key="k" :value="val">
            {{ k }}
          </option>
        </select>
      </div>
    </div>

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
    data: { options: { none: "-" } },
  },
  validators: {
    "data.value": function (value) {
      if (value) {
        return Validator.value(value).required();
      }
    },
  },
  mounted: function () {
    if (this.data.options != undefined) {
      this.data.options = JSON.parse(this.data.options);
    }
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
