<template>
  <div class="field position-relative">
    <label class="d-block">{{
      data.name.toUpperCase().replace(/\_/g, " ")
    }}</label>
    <div v-if="data.options">
      <div v-for="(val, key) in data.options" :key="key">
        <label :for="data.name + '_' + key" v-text="key"></label>
        <input
          :name="data.name"
          :id="data.name + '_' + key"
          :value="val"
          v-model="data.value"
          type="radio"
        />
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
  name: "RadioInput",
  props: {
    data: {},
  },
  data: () => ({
    dataValue: this.data,
  }),
  mounted: function () {
    this.data.options = JSON.parse(this.data.options);
  },
  validators: {
    "data.value": function (value) {
      if (value) {
        return Validator.value(value).required();
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
};
</script>
