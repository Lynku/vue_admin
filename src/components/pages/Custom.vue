<template>
  <text-input name="email" v-validate="'required|email'" :error="errors.first('email')"></text-input>
</template>

<script>
import TextInput from '../inputs/TextInput';

export default {
  components: {
    TextInput
  } 
}
</script>
