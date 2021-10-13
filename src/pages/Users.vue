<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Email</th>
        <th scope="col">Status</th>
        <th scope="col">Acrtions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="user in userList" :key="user.id">
        <th scope="row">{{ user.id }}</th>
        <td>{{ user.Name }}</td>
        <td>{{ user.Email }}</td>
        <td>{{ user.Status }}</td>
        <td>
          <a class="btn btn-success">E</a>
          <a class="btn btn-error">D</a>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import http from "../http";
export default {
  name: "Users",
  props: ['userList'],
  created: function(){
    http.get("/root/users").then((r) => {
      this.userList = r;
    });
  },
};
</script>
