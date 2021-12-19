<template>
  <div class="container my-5 z-depth-1 test">
    <!--Section: Content-->
    <section class="dark-grey-text">
      <div class="row pr-lg-5">
        <div class="col-md-7 mb-4">
          <div class="view">
            <img
              src="@/assets/env.svg"
              class="img-fluid"
              alt="smaple image"
              style="width: 50%"
            >
          </div>
        </div>
        <div class="col-md-5 d-flex align-items-center">
          <div>
            <h3 class="font-weight-bold mb-4">
              About
            </h3>
            <p>
              So, the Earth's average temperature has increased about 2 degrees
              Fahrenheit during the 20th century. What's the big deal? Two
              degrees may sound like a small amount, but it's an unusual event
              in our planet's recent history. Earth's climate record, preserved
              in tree rings, ice cores, and coral reefs, shows that the global
              average temperature is stable over long periods of time.
              Furthermore, small changes in temperature correspond to enormous
              changes in the environment. For example, at the end of the last
              ice age, when the Northeast United States was covered by more than
              3,000 feet of ice, average temperatures were only 5 to 9 degrees
              cooler than today.
            </p>
            <button
              type="button"
              class="btn btn-orange btn-rounded mx-0"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
    <!--Section: Content-->
  </div>
</template>
<script>
export default {
  name: "About",
  components: {},
  /**
   * The mounted() function is called when the component is mounted on the DOM.
   * It is a good place to perform any initialization code.
   */
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>
<style scoped>
.test {
  margin-top: 100px !important;
}
</style>