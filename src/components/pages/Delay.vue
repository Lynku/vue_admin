<template>
  <div class="column is-12">
    <div class="field">
      <label for="email" class="field-label">Email (1.0s delay)</label>
      <input id="email" name="email" v-validate="'required|email'" data-vv-delay="1000" type="email" placeholder="Enter email" class="input" :class="{ 'is-danger': errors.has('email') }">
      <small v-if="errors.has('email')" class="field-text is-danger">{{ errors.first('email') }}</small>
    </div>
    <div class="field">
      <label for="Name" class="field-label">Name (0.5s delay)</label>
      <input id="name" name="name" v-validate="'required'" data-vv-delay="500" type="text" placeholder="Enter Name" class="input" :class="{ 'is-danger': errors.has('name') }">
      <small v-if="errors.has('name')" class="field-text is-danger">{{ errors.first('name') }}</small>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'delay-example'
  };
</script>
