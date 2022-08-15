<template>
  <div class="pe-4">
    <div class="container-fluid m-3 mt-4" style="height: 95vh">
      <div class="row h-100">
        <div class="col-4 bg-white rounded-4 p-3 pe-4 ps-4">
          <SideNav />
        </div>
        <div class="col-8">dlkjf</div>
      </div>
    </div>
  </div>
</template>

<script>
import SideNav from '@/components/SideNav.vue';

export default {
  name: 'Home-',
  components: {
    SideNav,
  },
};
</script>
