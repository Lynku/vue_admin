<template>
  <div class="column is-12">
    <div class="field">
      <label for="message" class="field-label">Message</label>
      <input id="message" name="message" v-validate="'required|min:5'" v-model="message" type="message" placeholder="Enter message" class="input" :class="{ 'is-danger': errors.has('message') }">
      <small v-if="errors.has('message')" class="field-text is-danger">{{ errors.first('message') }}</small>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'vuex-example',
    computed: {
      message: {
        get () {
          return this.$store.state.message;
        },
        set (val) {
          this.$store.commit('UPDATE_MESSAGE', val);
        }
      }
    }
  };
</script>
