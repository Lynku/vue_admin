<template>
  <div class="field">
    <select
      ref="input"
      :name="name"
      :id="name"
      @input="$emit('input', $event.target.value)"
      class="form-control"
      :class="{ 'is-danger': error }"
    >
      <option value="" disabled>{{ name }}</option>
      <option value="1">{{ name }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "DropdownInput",
  $_veeValidate: {
    // value getter
    value() {
      return this.$el.value;
    },
    // name getter
    name() {
      return this.name;
    },
  },
  props: {
    name: String,
    value: {
      type: null,
      default: null,
    },
    error: {
      type: String,
      default: null,
    },
  },
  mounted() {
    // synbc the input to the initial value
    this.$refs.input.value = this.value;
  },
};
</script>
