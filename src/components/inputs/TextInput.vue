<template>
  <div class="field">
    <input
      type="text"
      ref="input"
      :name="name"
      @input="$emit('input', $event.target.value);"
      class="input"
      :class="{ 'is-danger': error }"
    />
    <small v-if="error" class="field-text is-danger">{{ error }}</small>
  </div>
</template>

<script>
export default {
  name: "text-input",
  $_veeValidate: {
    // value getter
    value() {
      return this.$el.value;
    },
    // name getter
    name() {
      return this.name;
    }
  },
  props: {
    name: String,
    value: {
      type: null,
      default: null
    },
    error: {
      type: String,
      default: null
    }
  },
  mounted() {
    // synbc the input to the initial value
    this.$refs.input.value = this.value;
  }
};
</script>
