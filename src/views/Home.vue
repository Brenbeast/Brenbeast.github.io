<template>
  <div class="home">
    <section class="view">
      <div class="row">
        <div class="col-md-6">
          <div
            class="
              d-flex
              flex-column
              justify-content-center
              align-items-center
              h-100
            "
          >
            <img
              src="@/assets/tree.png"
              width="30%"
              class="animate__animated animate__bounce"
            >
            <h1 class="heading display-4">
              What Is Climate Change?
            </h1>
            <h4 class="subheading font-weight-bold">
              Climate change can be a natural process where temperature,
              rainfall, wind and other elements vary over decades or more.
            </h4>
            <div class="mr-auto">
              <router-link
                class="nav-link"
                to="/contact"
              >
                <button
                  type="button"
                  class="btn btn-lily btn-margin btn-rounded text-light"
                >
                  Contact Us<i class="fas fa-caret-right ml-3" />
                </button>
              </router-link>
            </div>
          </div>
        </div>

        <div class="col-md-6">
          <div class="view">
            <Weather />
          </div>
        </div>
      </div>
    </section>
    <div class="container my-5">
      <Counter />
    </div>

    <Carousel />
    <div class="container my-5">
      <Features />
      <Blog />
    </div>
    <div class="container my-5 py-5 z-depth-1">
      <Chart />
    </div>
    <div class="container my-5 py-5 z-depth-1">
      <!--Section: Content-->
      <section class="text-center px-md-5 mx-md-5 dark-grey-text">
        <div class="row mb-5">
          <div class="col-md-4 mx-auto">
            <div class="view mb-4 pb-2">
              <img
                src="https://mdbootstrap.com/img/illustrations/undraw_connected_world_wuay.svg"
                class="img-fluid"
                alt="smaple image"
              >
            </div>
          </div>
        </div>

        <h3 class="font-weight-bold mb-4 pb-2">
          Want to support us?
        </h3>

        <p class="text-center mx-auto mb-4 pb-2">
          We are hard working people and we need every little bit of help that
          we can get.
        </p>

        <button
          type="button"
          class="btn btn-deep-purple btn-rounded"
        >
          Donate to our Foundation Now
        </button>
      </section>
      <!--Section: Content-->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Counter from "@/components/Counter.vue";
import Weather from "@/components/Weather.vue";
import Features from "@/components/Features.vue";
import Blog from "@/components/Blog.vue";
import Carousel from "@/components/Carousel.vue";
import Chart from "@/components/Chart.vue";
export default {
  name: "Home",
  components: {
    Weather,
    Features,
    Blog,
    Counter,
    Carousel,
    Chart,
  },
};
</script>
<style scoped>
.hm-gradient {
  background: linear-gradient(
    40deg,
    rgba(0, 51, 199, 0.3),
    rgba(209, 149, 249, 0.3)
  );
}
.heading {
  margin: 0 6rem;
  font-weight: 700;
  color: #5d4267;
}
.subheading {
  margin: 2.5rem 6rem;
  color: #bcb2c0;
}
.btn.btn-margin {
  margin-left: 6rem;
  margin-top: 3rem;
}
.btn.btn-lily {
  background: green;
}
.title {
  margin-top: 6rem;
  margin-bottom: 2rem;
  color: #5d4267;
}
.subtitle {
  color: #bcb2c0;
  margin-left: 20%;
  margin-right: 20%;
  margin-bottom: 6rem;
}
.animate__animated.animate__bounce {
  --animate-duration: 3s;
  --animate-delay: 3s;
}
</style>
