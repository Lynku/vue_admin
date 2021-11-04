<template>
  <div class="field position-relative">
    <el-input
      type="text"
      :name="fieldName"
      :id="fieldName"
      :placeholder="fieldName"
      v-model="data.name"
      :class="{ 'is-invalid': validation.hasError('data.name') }"
    >
    </el-input>
    <div class="invalid-tooltip">
      {{ validation.firstError("data.name") }}
    </div>
  </div>
</template>

<script>
import SimpleVueValidation from "simple-vue-validator";
const Validator = SimpleVueValidation.Validator;

export default {
  name: "TitleInput",
  props: {
    fieldName: "",
    data: {},
  },
  data: () => ({
    dataValue: this.data,
  }),
  watch: {
    value: (newVal, oldVal) => {
      console.log(newVal, oldVal);
    },
  },
  validators: {
    "data.name": function (value) {
      return Validator.value(value).required().minLength(3);
    },
  },
  methods: {
    validate: function () {
      return this.$validate().then(
        function (success) {
          if (success) {
            return {
              "data.name": this.data.name,
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
