<template>
  <div class="card p-2 mb-2">
    <div class="input-group mb-3">
      <div class="form-control">
        <select
          v-model="data.type"
          class="form-control"
          :class="{ 'is-invalid': validation.hasError('data.type') }"
        >
          <option
            v-for="(display, posible_type) in posibility"
            :key="posible_type"
            :value="posible_type"
            :selected="data.type == posible_type"
          >
            {{ display }}
          </option>
        </select>
        <div class="invalid-tooltip">
          {{ validation.firstError("data.type") }}
        </div>
      </div>
      <span class="input-group-text"> / </span>
      <div class="form-control">
        <input
          class="form-control"
          type="text"
          :name="data.name"
          v-model="data.name"
          :class="{ 'is-invalid': validation.hasError('data.name') }"
        />
        <small>Label: {{ data.name.replace(/\_/g, " ") }}</small>
        <div class="invalid-tooltip">
          {{ validation.firstError("data.name") }}
        </div>
      </div>
      <span class="input-group-text">
        <slot></slot>
      </span>
      <div
        class="field row"
        v-if="
          data.type == 'CheckboxInput' ||
          data.type == 'DropdownInput' ||
          data.type == 'RadioInput'
        "
      >
        <label class="col-12">Options</label>
        <small><code> Add option as JOSN key:vlaue pare, Ex: {"us":1, "ru":7, "ro":"40"}</code></small>
        <textarea class="form-control" v-model="data.options">
        </textarea>
      </div>
    </div>
  </div>
</template>

<script>
import vueJsonEditor from "vue-json-editor";
import SimpleVueValidation from "simple-vue-validator";
const Validator = SimpleVueValidation.Validator;

export default {
  components: {
    vueJsonEditor,
  },
  name: "FieldOption",
  props: {
    posibility: {},
    data: {},
  },
  validators: {
    "data.name": function (value) {
      return Validator.value(value)
        .required()
        .regex(
          "^[A-Za-z_]*$",
          "Must only contain alphabetic characters and `_`!"
        )
        .minLength(3);
    },
    "data.type": function (value) {
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
              "data.type": this.data.type,
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
