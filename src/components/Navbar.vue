<template>
  <div class="box-shadow border-bottom bg-white mb-2">
    <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 wrapper">
      <h5 class="my-0 mr-md-auto font-weight-normal">R-bot</h5>
      <nav class="my-2 my-md-0 mr-md-3">
        <router-link class="p-2 text-dark" to="/exchanges">Exchanges</router-link>
        <router-link class="p-2 text-dark" to="/arbitrage">Arbitrage</router-link>
        <router-link class="p-2 text-dark" to="/caddy">Order Caddy</router-link>
        <a class="p-2 text-dark" @click="logout" href="#">Logout</a>
      </nav>
    </div>
  </div>
</template>
<script>
import * as types from '@/store/mutation_types';

export default {
  methods: {
    logout() {
      this.$store.commit(types.LOG_OUT);
    }
  }
};
</script>
<style scoped>
.box-shadow { box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05); }
</style>
