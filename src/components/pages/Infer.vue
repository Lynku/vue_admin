<template>
  <div class="column is-12">
    <div class="field">
      <label for="email" class="field-label">Email</label>
      <input id="email" name="email" v-validate required type="email" placeholder="Enter email" class="input" :class="{ 'is-danger': errors.has('email') }">
      <small v-if="errors.has('email')" class="field-text is-danger">{{ errors.first('email') }}</small>
    </div>
    <div class="field">
      <label for="date" class="field-label">Date</label>
      <input id="date" name="date" v-validate type="date" placeholder="Enter email" class="input" :class="{ 'is-danger': errors.has('date') }">
      <small v-if="errors.has('date')" class="field-text is-danger">{{ errors.first('date') }}</small>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'infer-value-example'
  };
</script>
