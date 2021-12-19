<template>
  <!--Section: Content-->
  <section class="p-5 floating">
    <h3 class="text-center font-weight-bold mb-5">
      Look at the statistics
    </h3>

    <div class="row d-flex justify-content-center">
      <div class="col-md-6 col-lg-3 mb-4 text-center">
        <p class="font-weight-bold text-muted">
          Global Temperature
        </p>
        <h4 class="h1 font-weight-normal mb-3">
          <i class="fas fa-arrow-up red-text" />
          <span
            class="d-inline-block count-up"
            data-from="0"
            data-to="100"
            data-time="2000"
          >1.18</span>
        </h4>
        <p class="font-weight-normal text-muted">
          °C since 1880
        </p>
      </div>

      <div class="col-md-6 col-lg-3 mb-4 text-center">
        <p class="font-weight-bold text-muted">
          Arctic Sea Ice Extent
        </p>
        <h4 class="h1 font-weight-normal mb-3">
          <i class="fas fa-arrow-down red-text" />
          <span
            class="d-inline-block count1"
            data-from="0"
            data-to="250"
            data-time="2000"
          >13.0%</span>
        </h4>
        <p class="font-weight-normal text-muted">
          Per Decade
        </p>
      </div>

      <div class="col-md-6 col-lg-3 mb-4 text-center">
        <p class="font-weight-bold text-muted">
          Sea Level
        </p>
        <h4 class="h1 font-weight-normal mb-3">
          <i class="fas fa-arrow-up red-text" />
          <span
            class="d-inline-block count2"
            data-from="0"
            data-to="330"
            data-time="2000"
          >3.4m</span>
        </h4>
        <p class="font-weight-normal text-muted">
          Up per Year
        </p>
      </div>

      <div class="col-md-6 col-lg-3 mb-4 text-center">
        <p class="font-weight-bold text-muted">
          Carbon Dioxide
        </p>
        <h4 class="h1 font-weight-normal mb-3">
          <i class="fas fa-arrow-up red-text" />
          <span
            class="d-inline-block count3"
            data-from="0"
            data-to="430"
            data-time="2000"
          >412</span>
        </h4>
        <p class="font-weight-normal text-muted">
          Parts per million
        </p>
      </div>
    </div>
  </section>
  <!--Section: Content-->
</template>
<script>
export default {
  name: "Counter",
  components: {},
};
</script>
<style scoped>
.floating {
  animation-name: floating;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  margin-left: 30px;
  margin-top: 5px;
}

@keyframes floating {
  0% {
    transform: translate(0, 0px);
  }
  50% {
    transform: translate(0, 15px);
  }
  100% {
    transform: translate(0, -0px);
  }
}
</style>