<template>
  <div class="field position-relative">
    <label> {{ data.name.toUpperCase().replace(/\_/g, " ") }}</label>
    <el-input
      type="url"
      :name="data.name"
      :id="data.name"
      :placeholder="data.name"
      :class="{ 'is-invalid': validation.hasError('data.value') }"
      v-model="data.value"
    >
      <template slot="prepend">http://</template>
    </el-input>
    <!-- <input
      type="url"
      :name="data.name"
      :id="data.name"
      :placeholder="data.name"
      class="form-control"
      :class="{ 'is-invalid': validation.hasError('data.value') }"
      v-model="data.value"
    /> -->
    <div class="invalid-tooltip">
      {{ validation.firstError("data.value") }}
    </div>
  </div>
</template>

<script>
import SimpleVueValidation from "simple-vue-validator";
const Validator = SimpleVueValidation.Validator;

export default {
  name: "UrlInput",
  props: {
    data: {},
  },
  validators: {
    "data.value": function (value) {
      if (value) {
        return Validator.value(value)
          .regex("([a-z0-9|-]+.)*[a-z0-9|-]+.[a-z]+", "Invalid URL!")
          .maxLength(255);
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
