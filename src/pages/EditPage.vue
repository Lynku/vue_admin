<template>
  <div class="w-100 p-3">
    <div class="mb-3">
      <input
        type="text"
        class="form-control"
        id="title"
        name="title"
        v-model="page.Title"
        placeholder="Title"
      />
    </div>
    <div class="mb-3">
      <textarea
        class="form-control"
        id="content"
        name="content"
        rows="3"
        v-model="page.Content"
      ></textarea>
    </div>

    <div v-if="page.Fields">
      <component
        v-for="filed in page.Fields"
        :key="filed.name"
        :is="filed.type"
        :data="filed"
      ></component>
    </div>

    <button class="btn" type="button" @click="save()">Save</button>
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
    page: [],
  }),
  mounted: function () {
    http.get("page/" + this.$route.params.id).then((r) => {
      this.page = r.data;
    });
  },
  watch: {
    page: function (newVal, oldVal) {
      // watch it
      console.log("Prop changed: ", newVal, " | was: ", oldVal);
    },
  },
  methods: {
    save() {
      console.log(this.page);
    },
  },
};
</script>
