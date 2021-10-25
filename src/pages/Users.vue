<template>
  <div>
    <router-link class="btn btn-sm btn-primary float-end" to="/user_new">
      + Add New
    </router-link>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Active</th>
          <th scope="col" class="text-end">Acrtions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in userList" :key="user.id">
          <th scope="row">{{ user.id }}</th>
          <td>{{ user.username }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.status }}</td>
          <td class="text-end">
            <router-link class="btn btn-success" :to="'/user/' + user.id">
              <span v-html="icons.edit"></span>
            </router-link>
            <a class="btn btn-danger" @click="remove(user.id)">
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
import icons from "../assets/svg";
export default {
  name: "Users",
  data: () => ({
    icons: {},
    userList: [],
  }),
  mounted: function () {
    this.icons = icons;
    http.get("users").then((r) => {
      console.log(r.data);
      this.userList = r.data;
    });
  },
  methods: {
    remove(id) {
      if (confirm("Are you sure?")) {
        http.delete("user/" + id).then((r) => {
          this.$router.go(this.$router.currentRoute);
        });
      }
    },
  },
};
</script>
