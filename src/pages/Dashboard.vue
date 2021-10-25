<template>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</template>

<script>
import store from "../store";
export default {
  name: 'Dashboard',
  mounted() {
    if(!store.is()){
      this.$router.go(0)
    }
  },
};
</script>
