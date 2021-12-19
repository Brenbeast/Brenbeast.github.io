<template>
  <div id="app">
    <Header />
    <transition
      mode="out-in"
      enter-active-class="animate__animated animate__backInLeft"
    >
      <router-view class="mobile-space pt-5" />
    </transition>
    <Footer />
  </div>
</template>
<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap");

// #app {
//   font-family: 'Roboto', Helvetica, Arial, sans-serif;
//   margin-top: 150px;
//   text-align: center;
//   color: #2c3e50;
// }
@media screen and (max-width: 767px) {
  .mobile-space {
    margin-top: 40px;
  }
}
</style>
