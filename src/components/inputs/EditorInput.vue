<template>
  <div class="field position-relative">
    <label> {{ data.name.toUpperCase().replace(/\_/g, " ") }}</label>
    <VueTrix
      :inputId="data.name"
      v-model="data.value"
      placeholder="content..."
    />
  </div>
</template>

<script>
import VueTrix from "vue-trix";

export default {
  components: {
    VueTrix,
  },
  name: "EditorInput",
  props: {
    data: {},
  },
  data: () => ({
    dataValue: this.data,
  }),
};
</script>
