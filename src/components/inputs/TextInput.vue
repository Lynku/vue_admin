<template>
  <div class="field position-relative">
    <label> {{data.name.toUpperCase().replace(/\_/g,' ')}}</label>
    <input
      type="text"
      :name="data.name"
      :id="data.name"
      :placeholder="data.name"
      class="form-control"
      v-model="data.value"
      :class="{ 'is-invalid': validation.hasError('data.value') }"
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
  name: "TextInput",
  props: {
    data: {},
  },
  validators: {
    "data.value": function (value) {
      return Validator.value(value).required().minLength(3);
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
