<template>
  <div>
    <router-view></router-view>
    <tab-bar></tab-bar>
  </div>
</template>

<script>
import TabBar from "../components/home/TabBar";
export default {
  components: {
    TabBar
  }
};
</script>

<style scoped>
</style>