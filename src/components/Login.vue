<template>
  <div class="d-flex justify-content-center flex-column h-100">
    <div
      class="alert alert-danger"
      v-if="error"
      role="alert"
      v-text="error"
    ></div>
    <div class="card">
      <div class="card-header">
        <h3>Sign In</h3>
      </div>
      <div class="card-body">
        <div class="input-group mb-3">
          <span class="input-group-text" v-html="icons.user">@</span>
          <input
            type="text"
            v-model="data.username"
            class="form-control"
            placeholder="username"
          />
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text" v-html="icons.pass">@</span>
          <input
            type="password"
            v-model="data.password"
            class="form-control"
            placeholder="password"
          />
        </div>
        <div class="form-group">
          <input
            type="button"
            value="Login"
            class="btn float-end btn-secondary"
            @click="submit(data)"
          />
        </div>
      </div>
      <div class="card-footer">
        <div class="d-flex justify-content-center">Hello World!</div>
      </div>
    </div>
  </div>
</template>

<script>
import icons from "../assets/svg";
import store from "../store";
import http from "../http";

export default {
  name: "Login",
  data: () => ({
    icons: {},
    data: {},
    error: null,
  }),
  mounted() {
    this.icons = icons;
  },
  methods: {
    submit(data) {
      http.login(data).then((r) => {
        if (r.error) {
          this.error = r.error;
        } 
        if(r.token && r.username){
            store.set('token', r.token);
            store.set('app', {'username': r.username});
            this.$router.go(0);
        }
      });
    },
  },
};
</script>

<style scoped>
.card {
  height: 370px;
  margin: 100px auto;
  width: 400px;
}

input:focus {
  outline: 0 0 0 0 !important;
  box-shadow: 0 0 0 0 !important;
}
</style>