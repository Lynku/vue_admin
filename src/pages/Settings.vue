<template>
  <div>
    <div v-if="data.settings">
      <field-settings
        ref="forms"
        v-for="(filed, index) in data.settings"
        :key="filed.id"
        :data="filed"
      >
        <button
          class="btn btn-sm btn-danger remove"
          type="button"
          @click="toRemove(index)"
          v-html="icons.delete"
        ></button>
      </field-settings>
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
import FieldSettings from "../components/FieldSettings.vue";
import icons from "../assets/svg";
import http from "../http";

export default {
  components: {
    FieldSettings,
  },
  name: "Settings",
  data: () => ({
    icons: {},
    data: {},
  }),
  mounted: function () {
    this.icons = icons;
    http.get("settings").then((r) => {
      this.data = r.data;
      this.data["remove"] = [];
    });
  },
  watch: {
    data: (newVal, oldVal) => {},
  },
  methods: {
    newOption() {
      this.data["settings"].push({
        value: "",
        name: "",
      });
    },
    toRemove(index) {
      if (this.data["settings"][index]["id"] != undefined) {
        this.data["remove"].push(this.data["settings"][index]["id"]);
      }
      this.data["settings"].splice(index, 1);
    },
    submit() {
      Promise.all(
        this.$refs.forms.map(function (form) {
          return form.validate();
        })
      ).then(this._save);
    },
    _save(results) {
      if (
        results.filter(function (result) {
          return !result;
        }).length === 0
      ) {
        http.post("settings", this.data).then((r) => {
          this.$router.go(0);
        });
      }
    },
  },
};
</script>

<style scoped>
</style>