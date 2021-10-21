<template>
  <div>
    <router-link class="btn btn-sm btn-primary float-end" to="/type/new">
      + Add New
    </router-link>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Title</th>
          <th scope="col">Acrtions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="pageType in types" :key="pageType.id">
          <th scope="row">{{ pageType.id }}</th>
          <td>{{ pageType.name }}</td>
          <td>
            <router-link class="btn btn-success" :to="'/type/' + pageType.id">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-pen-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001z"
                />
              </svg>
            </router-link>
            <a class="btn btn-danger" @click="remove(pageType.id)">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-trash2-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M2.037 3.225A.703.703 0 0 1 2 3c0-1.105 2.686-2 6-2s6 .895 6 2a.702.702 0 0 1-.037.225l-1.684 10.104A2 2 0 0 1 10.305 15H5.694a2 2 0 0 1-1.973-1.671L2.037 3.225zm9.89-.69C10.966 2.214 9.578 2 8 2c-1.58 0-2.968.215-3.926.534-.477.16-.795.327-.975.466.18.14.498.307.975.466C5.032 3.786 6.42 4 8 4s2.967-.215 3.926-.534c.477-.16.795-.327.975-.466-.18-.14-.498-.307-.975-.466z"
                />
              </svg>
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import http from "../http";

export default {
  name: "Types",
  data: () => ({
    types: [],
  }),
  watch: {
    pages: (newVal, oldVal) => {    },
  },
  mounted: function () {
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
