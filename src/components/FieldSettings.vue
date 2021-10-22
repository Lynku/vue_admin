<template>
  <div v-if="data" class="card p-2 mb-2">
    <div class="input-group mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="Setting Name"
        v-model="data.name"
      />
      <span class="input-group-text"> / </span>
      <input
        type="text"
        class="form-control"
        placeholder="Setting Value"
        v-model="data.value"
      />
      <span class="input-group-text">
        <slot></slot>
      
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "FieldSettings",
  props: {
    data: {},
  },
  data: () => ({
    dataValue: this.data,
  })
};
</script>
