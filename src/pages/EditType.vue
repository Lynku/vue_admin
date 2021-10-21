<template>
  <div class="w-100 p-3 ">
    <div class="mb-3">
      <input
        type="text"
        class="form-control"
        id="name"
        name="name"
        v-model="data.type.name"
        placeholder="Name"
      />
    </div>

    <div v-if="data.options">
      <field-option
        v-for="(filed, index) in data.options"
        :key="filed.id"
        :data="filed"
        :posibility="data.posibility"
      >
      <button class="btn btn-danger remove" type="button" @click="toRemove(index)"> - </button>
      </field-option>
    </div>
    <button class="btn btn-success" type="button" @click="newOption()"> + ADD </button>
    <button class="btn btn-primary" type="button" @click="save()">Save</button>
  </div>
</template>

<script>
import FieldOption from "../components/FieldOption.vue";


import http from "../http";

export default {
  components: {
    FieldOption
  },
  name: "EditType",
  data: () => ({
    data: {},
  }),
  mounted: function () {
    if (this.$route.params.id) {
      http.get("type/" + this.$route.params.id).then((r) => {
        this.data = r.data;
        this.data['remove'] = [];
      });
    } else {
      http.get("type/new").then((r) => {
        this.data = r.data;
        this.data['type'] = {'name':''};
      });
    }
  },
  watch: {
    data: (newVal, oldVal) => {},
  },
  methods: {
    newOption(){
      this.data['options'].push({
        'type' :'',
        'options' :'',
        'name' :''
      })
    },
    toRemove(index){
      if(this.data['options'][index]['id'] != undefined){
        this.data['remove'].push(this.data['options'][index]['id']); 
      }
      this.data['options'].splice(index, 1);
    },
    save() {
      if (this.$route.params.id) {
        http.put("type/" + this.$route.params.id, this.data).then((r) => {
          this.data = r.data;
        });
      } else {
        http
          .post("type/new", this.data)
          .then((r) => {
            this.data = r.data;
          });
      }
    },
  },
};
</script>
<style scoped>
.remove{
  max-width: 32px;
  align-self: end;
}
</style>