<template>
  <div class="field">
    <label :id="'l_'+name">{{name}}</label>
    <input
      :for="'l_'+name"
      type="color"
      ref="input"
      :name="name"
      :id="name"
      :placeholder="name"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: "ColorInput",
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
    }   
  },
  mounted() {
    // synbc the input to the initial value
    this.$refs.input.value = this.value;
  },
};
</script>
