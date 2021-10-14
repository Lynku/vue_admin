<template>
  <div class="field">
    <textarea
      class="form-control"
      ref="input"
      :name="name"
      :id="name"
      :placeholder="name"
      @input="$emit('input', $event.target.value)"
      :class="{ 'is-danger': error }"
      rows="3"
    ></textarea>
  </div>
</template>

<script>
export default {
  name: "TextareInput",
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
