<template>
  <div id="app">
    <Header></Header>
    <banner></banner>
    <Footer></Footer>
    <router-view />
  </div>
</template>
<script>
import Header from "./components/Header.vue";
import banner from "./components/Banner.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "app",
  data() {
    return {};
  },
  components: {
    Header,
    banner,
    Footer
  }
};
</script>
<style lang="css" src="./assets/css/style.css">
</style>
