<template>
  <div>
    <router-link class="btn btn-sm btn-primary float-end" to="/type_new">
      + Add New
    </router-link>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Title</th>
          <th scope="col" class="text-end">Acrtions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="pageType in types" :key="pageType.id">
          <th scope="row">{{ pageType.id }}</th>
          <td>{{ pageType.name }}</td>
          <td class="text-end">
            <router-link class="btn btn-success" :to="'/type/' + pageType.id">
               <span v-html="icons.edit"></span>
            </router-link>
            <a class="btn btn-danger" @click="remove(pageType.id)">
              <span v-html="icons.delete"></span>
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import http from "../http";
import icons from '../assets/svg';

export default {
  name: "Types",
  data: () => ({
    types: [],
    icons
  }),
  watch: {
    pages: (newVal, oldVal) => {    },
  },
  mounted: function () {
    this.icons = icons;
    http.get("types").then((r) => {
      this.types = r.data;
    });
  },
  methods: {
    remove(id) {
      if (confirm("Are you sure?")) {
        http.delete("page/" + id).then((r) => {
          this.$router.go(this.$router.currentRoute);
        });
      }
    },
  },
};
</script>
