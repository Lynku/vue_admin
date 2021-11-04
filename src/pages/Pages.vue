<template>
  <div>
    <router-link class="btn btn-sm btn-primary float-end" :to="newPageURL">
      <el-button type="primary"> + Add New </el-button>
    </router-link>
    <el-table :data="pages" style="width: 100%">
      <el-table-column label="#" width="50">
        <template slot-scope="scope">
          <span>{{ scope.row.id }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="Title"></el-table-column>
      <el-table-column label="Status">
        <template slot-scope="scope">
          <span>{{ scope.row.status }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Operations">
        <template slot-scope="scope">
          <router-link :to="'/page/' + scope.row.id">
            <el-button size="mini" type="primary" plain> Edit </el-button>
          </router-link>
          <el-button
            size="mini"
            type="danger"
            plain
            @click="remove(scope.$index, scope.row.id)"
            >Delete</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import http from "../http";
export default {
  name: "Pages",
  data: () => ({
    newPageURL: "",
    pages: [],
  }),
  watch: {
    pages: function (newVal, oldVal) {
      // watch it
      console.log("Prop changed: ", newVal, " | was: ", oldVal);
    },
  },
  mounted: function () {
    this.newPageURL = "/page/new/" + this.$route.params.type;
    http.get("pages/" + this.$route.params.type).then((r) => {
      this.pages = r.data;
    });
  },
  methods: {
    remove(index, id) {
      this.$confirm("Are you sure?", "Warning", {
        confirmButtonText: "OK",
        cancelButtonText: "Cancel",
        type: "error",
      })
        .then(() => {
          http.delete("page/" + id).then((r) => {
            //this.$router.go(this.$router.currentRoute);
            this.$message({
              type: "success",
              message: "Delete completed",
            });
          });
        })
        .catch(() => {});
    },
  },
};
</script>
