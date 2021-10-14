<template>
  <div class="list-group list-group-flush">
    <span v-for="ex in linkPages" :key="ex.path">
      <router-link
        class="list-group-item list-group-item-action list-group-item-secondary"
        :class="{ active: isActive }"
        :to="ex.path"
      >
        {{ ex.name }}
      </router-link>
    </span>
  </div>
</template>

<script>
import { routes } from "../router";
import http from "../http";

export default {
  name: "navigation",
  data: () => ({
    linkPages: routes.map((r) => {
        return {
          path: r.path,
          name: r.meta.title,
        };
    }),
  }),
  computed: {
    isActive() {
      return this.path === this.$root.currentRoute;
    },
  },
};
</script>
