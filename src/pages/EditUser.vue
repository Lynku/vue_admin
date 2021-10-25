<template>
  <div class="w-100 p-3">
    <div class="mb-3 position-relative">
      <input
        type="text"
        placeholder="username"
        class="form-control"
        ref="forms"
        v-model="data.username"
        :class="{ 'is-invalid': validation.hasError('data.username') }"
      />
      <div class="invalid-tooltip">
        {{ validation.firstError("data.username") }}
      </div>
    </div>
    <div class="mb-3 position-relative">
      <input
        type="text"
        class="form-control"
        ref="forms"
        placeholder="****"
        v-model="data.password"
      />
    </div>
    <div class="mb-3 position-relative">
      <input
        type="email"
        placeholder="e-mail"
        class="form-control"
        ref="forms"
        :class="{ 'is-invalid': validation.hasError('data.email') }"
        v-model="data.email"
      />
      <div class="invalid-tooltip">
        {{ validation.firstError("data.email") }}
      </div>
    </div>
    <div class="mb-3">
      <label
        >Status
        <input type="checkbox" v-model="data.status" />
      </label>
    </div>
    <button class="btn btn-primary" type="button" @click="submit()">
      Save
    </button>
  </div>
</template>

<script>
import http from "../http";
import SimpleVueValidation from "simple-vue-validator";
const Validator = SimpleVueValidation.Validator;

export default {
  name: "EditUser",
  data: () => ({
    data: { username: "", email: "", status: false, password: "" },
  }),
  mounted: function () {
    console.log(this.$route.params.id);
    if (this.$route.params.id != undefined) {
      http.get("user/" + this.$route.params.id).then((r) => {
        this.data = r.data;
        this.data["password"] = "";
      });
    } else {
      this.data = { username: "", email: "", status: false, password: "" };
    }
  },
  watch: {
    data: (newVal, oldVal) => {},
  },
  validators: {
    "data.username": function (value) {
      return Validator.value(value).required().minLength(5);
    },
    "data.email": function (value) {
      return Validator.value(value).required().email();
    },
  },
  methods: {
    submit() {
      this.$validate().then(this._save);
    },
    _save(success) {
      if (success) {
        if (this.$route.params.id != undefined) {
          http.put("user/" + this.$route.params.id, this.data).then((r) => {
            this.$router.go(0);
          });
        } else {
          http.post("user_new", this.data).then((r) => {
            this.$router.push({ path: "/users" });
          });
        }
      }
    },
    reset() {
      this.validation.reset();
    },
  },
};
</script>
<style scoped>
</style>