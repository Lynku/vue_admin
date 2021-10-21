<template>
  <div class="card p-2 mb-2">
    <slot></slot>
    <div class="field row">
      <label class="col-4">Type</label>
      <select v-model='data.type' class="form-control">
        <option
          v-for="(display, posible_type) in posibility"
          :key="posible_type"
          :value="posible_type"
          :selected='data.type==posible_type'
        >
          {{ display }}
        </option>
      </select>
    </div>

    <div class="field row">
      <label class="col-4">Name</label>
      <input
        class="form-control"
        type="text"
        :name="data.name"
        v-model="data.name"
      />
    </div>
    <div class="field row" v-if="data.type == 'CheckboxInput' || data.type == 'DropdownInput'">
      <label class="col-12">Options</label>
      <textarea class="form-control"> </textarea>
    </div>
  </div>
</template>

<script>
export default {
  name: "FieldOption",
  props: {
    posibility: {},
    data: {},
  },
  data: () => ({
    dataValue: this.data,
  }),
};
</script>
