<template>
  <div class="field position-relative">
    <label> {{ data.name.toUpperCase().replace(/\_/g, " ") }}</label>
    <textarea
      :name="data.name"
      :id="data.name"
      :placeholder="data.name"
      class="form-control"
      :class="{ 'is-invalid': validation.hasError('data.value') }"
      v-model="data.value"
      rows="3"
    ></textarea>
    <div class="invalid-tooltip">
      {{ validation.firstError("data.value") }}
    </div>
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
  validators: {
    "data.value": function (value) {
      if (value) {
        return Validator.value(value).maxLength(5120);
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
