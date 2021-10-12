<template>
    <div class="column is-12">
      <div class="field">
        <label for="fname" class="field-label">First Name</label>
        <input id="fname" name="fname" v-model="fname" v-validate.immediate="'required'" type="text" placeholder="Enter your name" class="input" :class="{ 'is-danger': errors.has('fname') }">
        <small v-if="errors.has('fname')" class="field-text is-danger">{{ errors.first('fname') }}</small>
      </div>
      <div class="field">
        <label for="lname" class="field-label">Last Name</label>
        <input id="lname" name="lname" v-model="lname" v-validate.immediate="'required'" type="text" placeholder="Enter your name" class="input" :class="{ 'is-danger': errors.has('lname') }">
        <small v-if="errors.has('lname')" class="field-text is-danger">{{ errors.first('lname') }}</small>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'initial-value-example',
    data: () => ({
      fname: '',
      lname: 'valid'
    })
  };
</script>
