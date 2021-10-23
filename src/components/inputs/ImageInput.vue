<template>
  <div class="field position-relative">
    <label> {{ data.name.toUpperCase().replace(/\_/g, " ") }}</label>
    to finish
    <!-- <input
      type="file"
      :name="data.name"
      :id="data.name"
      v-model="data.value"
      class="form-control"
    /> -->
    <img v-if="data.value" :src="data.value" alt="Image Not Found!" />
    <div class="invalid-tooltip">
      {{ validation.firstError("data.value") }}
    </div>
  </div>
</template>

<script>
import SimpleVueValidation from "simple-vue-validator";
const Validator = SimpleVueValidation.Validator;

export default {
  name: "ImageInput",
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
  },
  data: () => ({
    dataValue: this.data,
  }),
};
</script>
