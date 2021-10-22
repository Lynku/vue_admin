<template>
<div>
    <div v-if="data.settings">
      <field-settings
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
    <button class="btn btn-success" type="button" @click="newOption()"> + ADD </button>
    <button class="btn btn-primary" type="button" @click="save()">Save</button>
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
      this.data['settings'].push({
        value: "",
        name: "",
      });
    },
    toRemove(index) {
      if (this.data['settings'][index]["id"] != undefined) {
        this.data["remove"].push(this.data['settings'][index]["id"]);
      }
      this.data['settings'].splice(index, 1);
    },
    save() {
      http.post("settings", this.data).then((r) => {
        this.$router.go(0);
      });
    },
  },
};
</script>

<style scoped>
.remove {
  max-width: 32px;
  align-self: end;
}
</style>