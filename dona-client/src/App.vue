<template>
  <Home />
  <!-- <router-view /> -->
</template>

<script>
import Home from './views/Home.vue';

export default {
  name: 'App',
  components: {
    Home,
  },
};
</script>

<style>
body {
  background-color: steelblue;
}
</style>
