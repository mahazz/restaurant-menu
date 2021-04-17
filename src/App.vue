<template>
  <div id="app">
    <Header></Header>
    <banner></banner>
    <router-view />
  </div>
</template>
<script>
import Header from "./components/Header.vue";
import banner from "./components/Banner.vue";

export default {
  name: "app",
  data() {
    return {};
  },
  components: {
    Header,
    banner
  }
  // mounted() {
  //   this.asNavFor1.push(this.$refs.thumbnails);
  //   this.asNavFor2.push(this.$refs.main);
  // }
};
</script>
<style>
</style>
