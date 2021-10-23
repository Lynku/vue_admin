<template>
  <div v-if="data.page" class="w-100 p-3">
    <div class="mb-3">
      <input
        type="text"
        class="form-control"
        id="title"
        name="title"
        v-model="data.page.title"
        placeholder="Title"
      />
    </div>
    <div class="mb-3">
      <textarea
        class="form-control"
        id="content"
        name="content"
        rows="3"
        v-model="data.page.content"
      ></textarea>
    </div>

    <div v-if="data.fields">
      <component
        v-for="filed in data.fields"
        :key="filed.name"
        :is="filed.type"
        :data="filed"
      ></component>
    </div>

    <button class="btn btn-primary" type="button" @click="save()">Save</button>
  </div>
</template>

<script>
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

import http from "../http";

export default {
  components: {
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
    data: [],
  }),
  mounted: function () {
    if (this.$route.params.type) {
      http.get("page/new/" + this.$route.params.type).then((r) => {
        this.data = r.data;
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
    save() {
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
            console.log(r);
            this.data = r.data;
          });
      }
    },
  },
};
</script>
