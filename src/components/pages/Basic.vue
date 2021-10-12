<template>
  <div class="field">
    <label for="email" class="field-label">Email</label>
    <input id="email" name="email" v-validate="'required|email'" type="email" placeholder="Enter email" class="input" :class="{ 'is-danger': errors.has('email') }">
    <small v-if="errors.has('email')" class="field-text is-danger">{{ errors.first('email') }}</small>
  </div>
</template>

<script>
export default {
  name: 'basic-example'
};
</script>
