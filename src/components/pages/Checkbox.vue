<template>
  <div>
    <div class="terms">
      <p>{{ terms }}</p>
    </div>
    <div>
      <label class="checkbox is-normal">
        <input name="terms" v-validate="'required'" type="checkbox" class="checkbox-input">
        <span class="checkbox-label">
          I agree to the terms and conditions.
          <small v-if="errors.has('terms')" class="field-text is-danger">{{ errors.first('terms') }}</small>
        </span>
      </label>

    </div>
    <button type="button" class="button is-primary" @click="nextStep">Next</button>
  </div>
</template>

<script>
const terms = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit ';

export default {
  name: 'checkbox-example',
  data: () => ({
    terms: terms.repeat(20)
  }),
  methods: {
    nextStep() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          alert('You just agreed to conditions without reading it.');
          return;
        }
        // eslint-disable-next-line
        alert('You actually did not agree?');
      });
    }
  }
};
</script>

<style lang="stylus">
.terms
    background-color: #e6e6e6
    overflow: auto
    height: 200px
    width: 100%
    margin-bottom: 20px
</style>
