<template>
    <div class="columns is-multiline">
      <div class="field">
        <label for="email" class="field-label">Email</label>
        <input id="email" v-model="email" name="email" type="email" placeholder="Enter email" class="input" :class="{ 'is-danger': emailError }">
        <small v-if="emailError" class="field-text is-danger">{{ emailError }}</small>
      </div>
      <div class="field">
        <label for="name" class="field-label">Name</label>
        <input id="name" v-model="name" name="name" type="text" placeholder="Enter name" class="input" :class="{ 'is-danger': nameError }">
        <small v-if="nameError" class="field-text is-danger">{{ nameError }}</small>
      </div>

      <button class="button is-primary" @click="validateForm" type="button" name="button">Validate All</button>
      <button class="button is-danger" @click="clearErrors" type="button" name="button">Clear</button>
    </div>
</template>

<script>
import { Validator } from 'vee-validate';

const v = new Validator();

export default {
  name: 'validator-example',
  data() {
    return {
      email: '',
      name: '',
      nameError: '',
      emailError: ''
    };
  },
  watch: {
    email() {
      this.validateEmail();
    },
    name() {
      this.validateName();
    }
  },
  methods: {
    validateForm() {
      Promise.all([
        this.validateEmail(),
        this.validateName(),
      ]).then(() => {
        if (this.nameError || this.emailError) {
          console.log('Hold it right there!');
          return;
        }

        console.log('You may pass.');
      });
    },
    validateEmail () {
      return v.verify(this.email, 'required|email', { name: 'Email' }).then((result) => {
        this.emailError = '';
        if (result.valid) {
          return;
        }

        this.emailError = result.errors[0];
      });
    },
    validateName () {
      return v.verify(this.name, 'required|min:3', { name: 'Name' }).then((result) => {
        this.nameError = '';
        if (result.valid) {
          return;
        }

        this.nameError = result.errors[0];
      });
    },
    clearErrors() {
      this.email = '';
      this.name = '';
      // wait for validation to finish up!
      this.$nextTick(() => {
        this.nameError = '';
        this.emailError = '';
      });
    }
  }
};
</script>
