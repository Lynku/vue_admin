<template>
  <div class="column is-12">
    <form novalidate @submit.prevent="validateForm('form-1')" data-vv-scope="form-1">
      <legend>Form 1</legend>
      <div class="field">
        <label for="email" class="field-label">Email</label>
        <input id="email" name="email" v-validate="'required|email'" type="email" placeholder="Enter email" class="input" :class="{ 'is-danger': errors.has('form-1.email') }">
        <small v-if="errors.has('form-1.email')" class="field-text is-danger">{{ errors.first('form-1.email') }}</small>
      </div>
      <div class="field">
        <label for="password" class="field-label">Password</label>
        <input id="password" name="password" v-validate="'required|min:6'" type="password" placeholder="Enter password" class="input" :class="{ 'is-danger': errors.has('form-1.password') }">
        <small v-if="errors.has('form-1.password')" class="field-text is-danger">{{ errors.first('form-1.password') }}</small>
      </div>
      <button class="button is-primary" type="submit" name="button">Sign up</button>
      <button class="button is-danger" type="button" name="button" @click="errors.clear('form-1')">Clear</button>
    </form>
    <form novalidate @submit.prevent="validateForm('form-2')" data-vv-scope="form-2">
      <legend>Form 2</legend>
      <div class="field">
        <label for="email" class="field-label">Email</label>
        <input id="email" name="email" v-validate="'required|email'" type="email" placeholder="Enter email" class="input" :class="{ 'is-danger': errors.has('form-2.email') }">
        <small v-if="errors.has('form-2.email')" class="field-text is-danger">{{ errors.first('form-2.email') }}</small>
      </div>
      <div class="field">
        <label for="password" class="field-label">Password</label>
        <input id="password" name="password" v-validate="'required|min:6'" type="password" placeholder="Enter password" class="input" :class="{ 'is-danger': errors.has('form-2.password') }">
        <small v-if="errors.has('form-2.password')" class="field-text is-danger">{{ errors.first('form-2.password') }}</small>
      </div>
      <button class="button is-primary" type="submit" name="button">Sign up</button>
      <button class="button is-danger" type="button" name="button" @click="errors.clear('form-2')">Clear</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'scopes-example',
  methods: {
    validateForm(scope) {
      this.$validator.validateAll(scope).then((result) => {
        if (result) {
          // eslint-disable-next-line
          alert('Form Submitted!');
        }
      });
    }
  }
};
</script>
