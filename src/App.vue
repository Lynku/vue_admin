<template>
  <div id="app">
    <main>
      <div class="container-fluid g-0">
        <div class="row g-0">
          <div class="col-3">
            <h2>My APP</h2>
            <navigation></navigation>
          </div>
          <div class="col-9 card">
            <div class="card-header">App...</div>
            <div class="card-body">
              <router-view></router-view>
            </div>
          </div>
        </div>
      </div>
    </main>

    <footer></footer>
  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue";
import Route from "vue-router";

export default {
  components: { Navigation },
  name: "App",
};
</script>

<style scope>
h2 {
  color: white;
  padding: .5rem 1rem;
  text-transform: uppercase;
}
.row.g-0 {
  min-height: 100vh;
}
.row.g-0 .col-3 {
  background: rgb(2, 0, 36);
  background: linear-gradient(
    180deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(160, 108, 213, 1) 100%,
    rgba(160, 108, 213, 1) 100%
  );
}
</style>
