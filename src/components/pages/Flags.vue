<template>
  <div class="column is-12">
    <div class="field">
      <label for="email" class="field-label">Email</label>
      <input id="email" name="email" v-validate="'required|email'" type="email" placeholder="Enter email" class="input" :class="{ 'is-danger': errors.has('email') }">
    </div>
    <div class="grid">
      <div class="column is-3" v-for="(value, flag) in emailFlags" :key="flag">
        <span class="label" :class="{ 'is-danger': !value, 'is-success': value }">{{ flag }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapFields } from 'vee-validate';

export default {
  name: 'flags-example',
  data: () => ({
    email: ''
  }),
  computed: {
    ...mapFields({
      emailFlags: 'email'
    })
  }
};
</script>
