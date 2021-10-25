<template>
  <div class="w-100 p-3">
    <div class="mb-3">
      <title-input ref="title" 
      fieldName='Name' 
      :data="data.type"></title-input>
    </div>

    <div v-if="data.options">
      <field-option
        ref="forms"
        v-for="(filed, index) in data.options"
        :key="filed.id"
        :data="filed"
        :posibility="data.posibility"
      >
        <button
          class="btn btn-danger btn-sm"
          type="button"
          @click="toRemove(index)"
          v-html="icons.delete"
        ></button>
      </field-option>
    </div>
    <button class="btn btn-success" type="button" @click="newOption()">
      + ADD
    </button>
    <button class="btn btn-primary" type="button" @click="submit()">
      Save
    </button>
  </div>
</template>

<script>
import TitleInput from "../components/inputs/TitleInput.vue";
import FieldOption from "../components/FieldOption.vue";
import icons from "../assets/svg";
import store from "../store";
import http from "../http";

export default {
  components: {
    FieldOption,
    TitleInput,
  },
  name: "EditType",
  data: () => ({
    icons: {},
    data: { type: { name: "" } },
  }),
  mounted: function () {
    this.icons = icons;
    if (this.$route.params.id) {
      http.get("type/" + this.$route.params.id).then((r) => {
        this.data = r.data;
        this.data["remove"] = [];
      });
    } else {
      http.get("type/new").then((r) => {
        this.data = r.data;
        this.data["type"] = { name: "" };
      });
    }
  },
  watch: {
    data: (newVal, oldVal) => {console.log(newVal)},
  },
  methods: {
    newOption() {
      this.data["options"].push({
        type: "",
        name: "",
        options: {},
      });
    },
    toRemove(index) {
      if (this.data["options"][index]["id"] != undefined) {
        this.data["remove"].push(this.data["options"][index]["id"]);
      }
      this.data["options"].splice(index, 1);
    },
    submit() {
      let validationFiled = [];

      validationFiled.push(this.$refs.title.validate());
      if (this.$refs.forms != undefined) {
        this.$refs.forms.map(function (form) {
          validationFiled.push(form.validate());
        });
      }
      Promise.all(validationFiled).then(this._save);
    },
    _save(results) {
      if (
        results.filter(function (result) {
          return !result;
        }).length === 0
      ) {
        if (this.$route.params.id) {
          http.put("type/" + this.$route.params.id, this.data).then((r) => {
            store.del("app.navigation");
            this.$router.go(0);
          });
        } else {
          http.post("type/new", this.data).then((r) => {
            store.del("app.navigation");
            this.$router.push("/types");
          });
        }
      }
    },
  },
};
</script>
<style scoped>
</style>