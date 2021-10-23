<template>
  <div v-if="data" class="card p-2 mb-2">
    <div class="input-group mb-3">
      <div class="form-control">
        <input
          type="text"
          class="form-control"
          placeholder="Setting Name"
          title="Setting Name"
          v-model="data.name"
          :disabled="data.status"
          :class="{ 'is-invalid': validation.hasError('data.name') }"
          required
        />
        <div class="invalid-tooltip">
          {{ validation.firstError("data.name") }}
        </div>
      </div>
      <span class="input-group-text"> / </span>
      <div class="form-control">
        <input
          type="text"
          class="form-control"
          placeholder="Setting Value"
          title="Setting Value"
          v-model="data.value"
          required
          :class="{ 'is-invalid': validation.hasError('data.value') }"
        />
        <div class="invalid-tooltip">
          {{ validation.firstError("data.value") }}
        </div>
      </div>
      <span class="input-group-text" v-if="!data.status">
        <slot></slot>
      </span>
    </div>
  </div>
</template>

<script>
import SimpleVueValidation from "simple-vue-validator";
const Validator = SimpleVueValidation.Validator;

export default {
  name: "FieldSettings",
  props: {
    data: {},
  },
  validators: {
    "data.name": function (value) {
      return Validator.value(value).required().regex('^[A-Za-z\_]*$', 'Must only contain alphabetic characters and `_`!').minLength(3);
    },
    "data.value": function (value) {
      return Validator.value(value).required();
    },
  },
  methods: {
    validate: function () {
      return this.$validate().then(
        function (success) {
          if (success) {
            return {
              "data.name": this.data.name,
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
