<template>
    <!-- novalidate attr is used to prevent native HTML5 validation prompts -->
    <form novalidate @submit.prevent="validateBeforeSubmit">
      <div class="field">
        <label for="email" class="field-label">Email</label>
        <input id="email" name="email" v-validate="'required|email'" v-model="email" type="email" placeholder="Enter email" class="input" :class="{ 'is-danger': errors.has('email') }">
        <small v-if="errors.has('email')" class="field-text is-danger">{{ errors.first('email') }}</small>
      </div>
      <div class="field">
        <label for="name" class="field-label">Name</label>
        <input id="name" name="name" v-validate="'required'" v-model="name" type="text" placeholder="Enter name" class="input" :class="{ 'is-danger': errors.has('name') }">
        <small v-if="errors.has('name')" class="field-text is-danger">{{ errors.first('name') }}</small>
      </div>
      <div class="field">
        <label for="phone" class="field-label">Phone</label>
        <input id="phone" name="phone" v-validate="'required|numeric'" v-model="phone" type="text" placeholder="Enter phone" class="input" :class="{ 'is-danger': errors.has('phone') }">
        <small v-if="errors.has('phone')" class="field-text is-danger">{{ errors.first('phone') }}</small>
      </div>
      <div class="field">
        <label for="website" class="field-label">Website</label>
        <input id="website" name="website" v-validate="'required|url'" v-model="website" type="texxt" placeholder="Enter name" class="input" :class="{ 'is-danger': errors.has('website') }">
        <small v-if="errors.has('website')" class="field-text is-danger">{{ errors.first('website') }}</small>
      </div>

      <button class="button is-primary" type="submit">Submit</button>
    </form>
</template>

<script>
export default {
  name: 'form-example',
  data: () => ({
    email: '',
    name: '',
    phone: '',
    website: ''
  }),
  methods: {
    validateBeforeSubmit() {
      this.$validator.validate().then((result) => {
        if (result) {
          // eslint-disable-next-line
          alert('Form Submitted!');
          return;
        }

        alert('Correct them errors!');
      });
    }
  }
};
</script>
