<template>
  <div class="column is-12">
    <div class="field">
      <label for="email" class="field-label">Email</label>
      <input id="email" v-model="email" name="email" v-validate="'required|email|unique'" type="email" placeholder="Enter email" class="input" :class="{ 'is-danger': errors.has('email') }">
      <small v-if="errors.has('email')" class="field-text is-danger">{{ errors.first('email') }}</small>
    </div>
    <button class="button is-primary" type="button" @click="submit">Submit</button>
  </div>
</template>

<script>
import { Validator } from "vee-validate";

const emailsDB = ["logaretm1@gmail.com"];

Validator.extend("unique", {
  validate: value =>
  new Promise(resolve => {
    setTimeout(() => {
      if (emailsDB.indexOf(value) === -1) {
        return resolve({
          valid: true
        });
      }

      return resolve({
        valid: false,
        data: {
          message: `${value} is already taken.`
        }
      });
    }, 200);
  }),
  getMessage: (field, params, data) => data.message
});

export default {
  name: "backend-example",
  data: () => ({
    email: null
  }),
  methods: {
    submit() {
      // save the email value.
      emailsDB.push(this.email);
      this.email = "";
      // reset state, flags and clears errors.
      this.$nextTick(() => {
        this.$validator.reset();
      });
    }
  }
};
</script>
