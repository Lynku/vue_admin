<template>
  <div id="nav" class="d-flex flex-column justify-content-between">
    <div class="list-group">
      <span v-for="ex in linkPagesTop" :key="ex.path">
        <router-link
          class="list-group-item d-flex align-items-center"
          :class="{ active: isActive }"
          :to="ex.path"
          :key="ex.path"
        >
          <span v-html="ex.icon"></span>
          <span>{{ ex.name }}</span>
        </router-link>
      </span>
    </div>

    <div class="list-group bottom">
      <span v-for="ex in linkPages" :key="ex.path">
        <router-link
          class="list-group-item"
          :class="{ active: isActive }"
          :to="ex.path"
          :key="ex.path"
        >
          <span v-html="ex.icon"></span>
          <span>{{ ex.name }}</span>
        </router-link>
      </span>
    </div>
  </div>
</template>

<script>
import { routes, router } from "../router";
import icons from "../assets/svg";
import http from "../http";

export default {
  name: "navigation",
  data: () => ({
    linkPagesTop: routes
      .map((r) => {
        return {
          path: r.path,
          name: r.meta.title,
          icon: r.meta.icon,
          position: r.meta.position,
        };
      })
      .filter((r) => {
        return r.name != undefined;
      })
      .filter((r) => {
        return r.position == "top";
      }),
    linkPages: routes
      .map((r) => {
        return {
          path: r.path,
          name: r.meta.title,
          icon: r.meta.icon,
          position: r.meta.position,
        };
      })
      .filter((r) => {
        return r.position == "bottom";
      }),
  }),
  watch: {
    linkPages: (newVal, oldVal) => {},
  },
  computed: {
    isActive() {
      return this.path === this.$route.path;
    },
  },
  methods: {
    goTo(path) {
      this.$router.go(0);
    },
  },
  mounted: function () {
    http.get("types").then((r) => {
      r.data.forEach((e) => {
        this.linkPagesTop.push({
          path: "/pages/" + e.id,
          params: { type: e.id },
          name: e.name,
          position: "top",
          icon: icons.sticky,
        });
      });
    });
  },
};
</script>
<style scoped>
#nav {
  height: 85%;
}
#nav .list-group-item span {
  margin-right: 10px;
}
.list-group-item,
.list-group-item {
  color: white;
  background-color: transparent;
  border-color: transparent;
  font-weight: 500;
  border-bottom: 1px solid transparent;
}
.list-group.bottom::before {
  content: "";
  width: 90%;
  margin: 0 auto;
  height: 1px;
  border-top: 2px solid white;
  border-radius: 0;
}
.router-link-exact-active {
  border-bottom: 1px solid white;
}
</style>