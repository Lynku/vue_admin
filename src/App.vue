<template>
  <div id="app">
    <header class="meta">
      <nav class="navbar navbar-expand-lg navbar-light navbar-dark bg-primary">
        <div class="container-fluid">
          <a class="navbar-brand" href="/"
            ><i class="bi bi-compass-fill"></i
          ></a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><hr class="dropdown-divider" /></li>
                  <li>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>

    <main>
      <div class="container-fluid g-0">
        <div class="row g-0">
          <div class="col-3">
            <navigation></navigation>
          </div>
          <div class="col-9 card">
              <div class="card-header">
                App...
              </div>
          <router-view></router-view>
          </div>
        </div>
      </div>
    </main>

    <footer></footer>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue';
import  Route  from 'vue-router';

export default {
  components: { Navigation },
  name: "App",
};
</script>

<style>
.row.g-0{
  min-height: 85vh;
}
.row.g-0 .col-3{
  background-color: var(--bs-gray);
}
</style>
