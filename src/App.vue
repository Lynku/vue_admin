<template>
  <div id="app">
    <main>
      <el-row v-if="isLogin" class="row g-0">
        <el-col :span="6">
          <h2>My APP</h2>
          <navigation></navigation>
        </el-col>
        <el-col :span="18">
          <el-container>
            <el-header style="text-align: right; font-size: 12px">
              <el-dropdown>
                <i class="el-icon-setting" style="margin-right: 15px"></i>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>View</el-dropdown-item>
                  <el-dropdown-item @click="logout()">Logout</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
              <span v-text="app.username"></span>
            </el-header>

            <el-main>
              <router-view></router-view>
            </el-main>
          </el-container>
        </el-col>
      </el-row>
      <div v-if="!isLogin">
        <login></login>
      </div>
    </main>

    <footer></footer>
  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue";
import Login from "./components/Login.vue";
import store from "./store";

export default {
  components: { Navigation, Login },
  name: "App",
  data: () => ({
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
      this.$confirm("Are you sure?", "Warning", {
        confirmButtonText: "OK",
        cancelButtonText: "Cancel",
        type: "error",
      })
        .then(() => {
          store.del("app");
          store.del("token");
          this.$router.go(0);
        })
        .catch(() => {});
    },
  },
  created() {
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
.el-header {
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(160, 108, 213, 1) 100%
  );
  color: #fff;
  line-height: 60px;
}

.el-aside {
  color: #fff;
}

.row.g-0 {
  min-height: 100vh;
}

.row.g-0 .el-col-6 {
  background: rgb(2, 0, 36);
  background: linear-gradient(
    180deg,
    rgba(2, 0, 36, 1) 10%,
    rgba(160, 108, 213, 1) 100%
  );
}
</style>
