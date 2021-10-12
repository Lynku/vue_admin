<template>
  <div id="app">
    <header class="meta">
      <h1>{{ $route.meta.title }}</h1>
      <img
        v-show="$route.path === '/'"
        src="/logo.png"
        alt="VeeValidate Logo"
        width="200"
      />
      <p>{{ $route.meta.description }}</p>
      <div class="buttons">
        ️️<router-link
          class="button is-primary is-small"
          v-show="$route.path !== '/'"
          to="/"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
            width="24"
            height="24"
            viewBox="0 0 20 20"
            class="icon icon-arrow-back"
          >
            <title>arrow back</title>
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M4.29,12.71a1,1,0,0,1,0-1.42l4-4A1,1,0,1,1,9.71,8.71L7.41,11H19a1,1,0,0,1,0,2H7.41l2.3,2.29a1,1,0,0,1,0,1.42,1,1,0,0,1-1.42,0Z"
            />
          </svg>
          <span>Back to examples</span>
        </router-link>
        <a
          class="button is-info is-small"
          v-if="$route.path !== '/'"
          target="_blank"
          rel="noopener"
          href="https://baianat.github.io/vee-validate"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
            width="24"
            height="24"
            viewBox="0 0 20 20"
            class="icon icon-library-books"
          >
            <title>library books</title>
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M7,2A3,3,0,0,0,4,5V19a3,3,0,0,0,3,3H19a1,1,0,0,0,1-1V3a1,1,0,0,0-1-1ZM9,7h6a1,1,0,0,1,0,2H9A1,1,0,0,1,9,7Zm0,4h3a1,1,0,0,1,0,2H9a1,1,0,0,1,0-2Zm9,8v1H7a1,1,0,0,1,0-2H18Z"
            />
          </svg>
          <span>Docs</span>
        </a>
      </div>
    </header>

    <main>
      <div class="grid">
        <div class="column"><router-view></router-view></div>
      </div>
    </main>
    <footer></footer>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  padding: 20px;
}

a {
  display: block;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

.meta {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
}
</style>
