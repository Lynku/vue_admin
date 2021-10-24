<template>
  <div v-if="data.page" class="w-100 p-3">
    <div class="mb-3">
      <title-input
        ref="title"
        fieldName="Title"
        :data="data.page"
      ></title-input>
    </div>
    <div class="mb-3">
      <VueTrix
        inputId="content"
        v-model="data.page.content"
        placeholder="content..."
      />
    </div>
    <hr />
    <div v-if="data.fields">
      <component
        class="component p-2"
        v-for="filed in data.fields"
        :key="filed.name"
        :ref="filed.type != 'Repeater' ? 'forms' : 'repeater'"
        :is="filed.type"
        :data="filed"
      ></component>
    </div>

    <button class="btn btn-primary" type="button" @click="submit()">
      Save
    </button>
  </div>
</template>

<script>
import TitleInput from "../components/inputs/TitleInput.vue";
import TextInput from "../components/inputs/TextInput.vue";
import PhoneInput from "../components/inputs/PhoneInput.vue";
import CheckboxInput from "../components/inputs/CheckboxInput.vue";
import ColorInput from "../components/inputs/ColorInput.vue";
import DateInput from "../components/inputs/DateInput.vue";
import DropdownInput from "../components/inputs/DropdownInput.vue";
import EditorInput from "../components/inputs/EditorInput.vue";
import EmailInput from "../components/inputs/EmailInput.vue";
import ImageInput from "../components/inputs/ImageInput.vue";
import NumberInput from "../components/inputs/NumberInput.vue";
import RadioInput from "../components/inputs/RadioInput.vue";
import Repeater from "../components/inputs/Repeater.vue";
import TextareInput from "../components/inputs/TextareInput.vue";
import UrlInput from "../components/inputs/UrlInput.vue";
import VueTrix from "vue-trix";

import http from "../http";

export default {
  components: {
    VueTrix,
    TitleInput,
    TextInput,
    PhoneInput,
    CheckboxInput,
    ColorInput,
    DateInput,
    DropdownInput,
    EditorInput,
    EmailInput,
    ImageInput,
    NumberInput,
    RadioInput,
    Repeater,
    TextareInput,
    UrlInput,
  },
  name: "EditPage",
  data: () => ({
    data: { page: { name: "" } },
  }),
  mounted: function () {
    if (this.$route.params.type) {
      http.get("page/new/" + this.$route.params.type).then((r) => {
        this.data = r.data;
        this.data["page"] = { name: "" , content:''};
      });
    } else {
      http.get("page/" + this.$route.params.id).then((r) => {
        this.data = r.data;
      });
    }
  },
  watch: {
    data: (newVal, oldVal) => {},
  },
  methods: {
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
        if (this.$route.params.type) {
          http
            .post("page/new/" + this.$route.params.type, this.data)
            .then((r) => {
              this.$router.push({ path: "/pages/" + this.$route.params.type });
            });
        } else {
          http
            .put("page/update/" + this.$route.params.id, this.data)
            .then((r) => {
              this.$router.go(0);
            });
        }
      }
    },
  },
};
</script>
<style scoped>
.component {
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
}
</style>