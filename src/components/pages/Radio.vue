<template>
    <form @submit.prevent="validateForm">
      <div class="example column is-12">
        <h4>Activities</h4>
        <label class="radio is-inline" v-for="activity in activities" :key="activity">
          <input type="radio" :value="activity" class="radio-input" v-validate="'required'" name="activity">
          <span class="radio-label">{{ activity }}</span>
        </label>
        <div class="">
          {{ errors.first('activity') }}
        </div>
      </div>

      <button type="submit" class="button is-primary" name="button">Submit</button>
    </form>
</template>

<script>
export default {
  name: 'radio-buttons-example',
  data: () => ({
    activities: [
      'Eat',
      'Code',
      'Sleep'
    ],
  }),
  methods: {
    validateForm() {
      this.$validator.validate().then((result) => {
        if (result) {
          // eslint-disable-next-line
          alert('All Passes!');
          return;
        }
        alert('Oh NO!');
      });
    }
  }
};
</script>
