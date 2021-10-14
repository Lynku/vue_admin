<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Title</th>
        <th scope="col">Status</th>
        <th scope="col">Acrtions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="page in pages" :key="page.id">
        <th scope="row">{{ page.id }}</th>
        <td>{{ page.Title }}</td>
        <td>{{ page.Status }}</td>
        <td>
          <a class="btn btn-success">E</a>
          <a class="btn btn-error">D</a>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>

export default {
  name: 'Pages',
   data: () => ({
    pages: [],
  }),
  mounted: function () {
    http.get("pages/2").then((r) => {
      this.pages = r.data;
    });
  },
};
</script>
