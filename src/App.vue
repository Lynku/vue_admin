<template>
  <div id="app">
    <main>
      <div class="container-fluid g-0">
        <div v-if="isLogin" class="row g-0">
          <div class="col-3">
            <h2>My APP</h2>
            <navigation></navigation>
          </div>
          <div class="col-9 card">
            <div class="card-header">
              <div class="d-flex justify-content-between">
                App...
                <span v-text="app.username"></span>
                <button
                  type="button"
                  class="btn logout btn-sm"
                  title="logout"
                  @click="logout()"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-x-octagon-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M11.46.146A.5.5 0 0 0 11.107 0H4.893a.5.5 0 0 0-.353.146L.146 4.54A.5.5 0 0 0 0 4.893v6.214a.5.5 0 0 0 .146.353l4.394 4.394a.5.5 0 0 0 .353.146h6.214a.5.5 0 0 0 .353-.146l4.394-4.394a.5.5 0 0 0 .146-.353V4.893a.5.5 0 0 0-.146-.353L11.46.146zm-6.106 4.5L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div class="card-body">
              <router-view></router-view>
            </div>
          </div>
        </div>
        <div v-if="!isLogin">
          <login></login>
        </div>
      </div>
    </main>

    <footer></footer>
  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue";
import Login from "./components/Login.vue";
import icons from "./assets/svg";
import store from "./store";

export default {
  components: { Navigation, Login },
  name: "App",
  data: () => ({
    icons: {},
    isLogin: false,
    app: {},
  }),
  watch: {
    isLogin: (newVal, oldVal) => {
      console.log(newVal);
    },
  },
  methods: {
    logout() {
      if (confirm("Are you sure")) {
        store.del("app");
        store.del("token");
        this.$router.go(0);
      }
    },
  },
  created() {
    this.icons = icons;
    this.isLogin = store.is();
    this.app = store.get("app");
  },
};
</script>

<style scope>
h2 {
  color: white;
  padding: 0.5rem 1rem;
  text-transform: uppercase;
}
.logout {
  color: #b02a37;
}
.row.g-0 {
  min-height: 100vh;
}
.row.g-0 .col-3 {
  background: rgb(2, 0, 36);
  background: linear-gradient(
    180deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(160, 108, 213, 1) 100%,
    rgba(160, 108, 213, 1) 100%
  );
}
</style>
