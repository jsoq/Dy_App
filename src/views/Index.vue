<template>
  <div class="index">
    <tab-bar></tab-bar>
    <video-list></video-list>
  </div>
</template>

<script>
import TabBar from "../components/index/TopBar";
import videoList from "../components/index/videoList";
export default {
  components: {
    TabBar,
    videoList
  }
};
</script>

<style scoped>
.index {
  background: #000;
}
</style>