<template>
  <div>
    <router-link class="btn btn-sm btn-primary float-end" :to="newPageURL">
      + Add New
    </router-link>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Title</th>
          <th scope="col">Status</th>
          <th scope="col" class="text-end">Acrtions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="page in pages" :key="page.id">
          <th scope="row">{{ page.id }}</th>
          <td>{{ page.title }}</td>
          <td>{{ page.status }}</td>
          <td class="text-end">
            <router-link class="btn btn-success" :to="'/page/' + page.id">
              <span v-html="icons.edit"></span>
            </router-link>
            <a class="btn btn-danger" @click="remove(page.id)">
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
import icons from '../assets/svg'
export default {
  name: "Pages",
  data: () => ({
    newPageURL: "",
    pages: [],
    icons
  }),
  watch: {
    pages: function (newVal, oldVal) {
      // watch it
      console.log("Prop changed: ", newVal, " | was: ", oldVal);
    },
  },
  mounted: function () {
    this.icons = icons;
    this.newPageURL = "/page/new/" + this.$route.params.type;
    http.get("pages/" + this.$route.params.type).then((r) => {
      this.pages = r.data;
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
