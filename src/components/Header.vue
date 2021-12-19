<template>
  <mdb-navbar
    color="green"
    position="top"
    dark
  >
    <router-link
      class="nav-link"
      to="/"
    >
      <mdb-navbar-brand>
        <i class="fas fa-cloud-sun-rain fa-2x pr-2" />Climate Change
      </mdb-navbar-brand>
    </router-link>
    <mdb-navbar-toggler>
      <mdb-navbar-nav right>
        <router-link
          class="nav-link"
          to="/"
        >
          <mdb-nav-item active>
            Home
          </mdb-nav-item>
        </router-link>
        <router-link
          class="nav-link"
          to="/about"
        >
          <mdb-nav-item>About</mdb-nav-item>
        </router-link>
        <router-link
          class="nav-link"
          to="/gallery"
        >
          <mdb-nav-item>Climate Change Gallery</mdb-nav-item>
        </router-link>
        <router-link
          class="nav-link"
          to="/earth"
        >
          <mdb-nav-item>
            Eyes on Earth
            <sup><b
              class="text-danger Blink"
              style="font-size: 10px"
            >&#11044;</b></sup>
          </mdb-nav-item>
        </router-link>
        <router-link
          class="nav-link"
          to="/contact"
        >
          <mdb-nav-item>Contact Us</mdb-nav-item>
        </router-link>
        <router-link
          class="nav-link"
          to="/faq"
        >
          <mdb-nav-item>FAQ</mdb-nav-item>
        </router-link>
      </mdb-navbar-nav>
    </mdb-navbar-toggler>
  </mdb-navbar>
</template>
<script>
import {
  mdbNavbar,
  mdbNavbarBrand,
  mdbNavbarToggler,
  mdbNavbarNav,
  mdbNavItem,
} from "mdbvue";
export default {
  name: "Header",
  components: {
    mdbNavbar,
    mdbNavbarBrand,
    mdbNavbarToggler,
    mdbNavbarNav,
    mdbNavItem,
  },
};
</script>
<style scoped>
.Blink {
  animation: blinker 1.5s cubic-bezier(0.5, 0, 1, 1) infinite alternate;
}

@keyframes blinker {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>