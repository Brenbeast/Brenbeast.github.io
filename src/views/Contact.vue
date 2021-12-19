<template>
  <div class="container mt-5">
    <!--Section: Content-->
    <section class="dark-grey-text mb-5">
      <!-- Section heading -->
      <h3 class="font-weight-bold text-center mb-4">
        Contact Us
      </h3>
      <!-- Section description -->
      <p class="text-center w-responsive mx-auto pb-5">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error
        amet numquam iure provident voluptate esse quasi, veritatis totam
        voluptas nostrum quisquam eum porro a pariatur veniam.
      </p>

      <!-- Grid row -->
      <div class="row">
        <!-- Grid column -->
        <div class="col-lg-5 mb-lg-0 pb-lg-3 mb-4">
          <!-- Form with header -->
          <div class="card">
            <div class="card-body">
              <!-- Header -->
              <div class="form-header accent-1">
                <h3 class="mt-2">
                  <i class="fas fa-envelope" /> Write to us:
                </h3>
              </div>

              <!-- Body -->
              <div class="md-form">
                <i class="fas fa-user prefix grey-text" />
                <input
                  id="form-name"
                  type="text"
                  class="form-control"
                >
                <label for="form-name">Your name</label>
              </div>
              <div class="md-form">
                <i class="fas fa-envelope prefix grey-text" />
                <input
                  id="form-email"
                  type="text"
                  class="form-control"
                >
                <label for="form-email">Your email</label>
              </div>
              <div class="md-form">
                <i class="fas fa-tag prefix grey-text" />
                <input
                  id="form-Subject"
                  type="text"
                  class="form-control"
                >
                <label for="form-Subject">Subject</label>
              </div>
              <div class="md-form">
                <i class="fas fa-pencil-alt prefix grey-text" />
                <textarea
                  id="form-text"
                  class="form-control md-textarea"
                  rows="3"
                />
                <label for="form-text">Send message</label>
              </div>
              <div class="text-center">
                <button class="btn btn-light-blue">
                  Submit
                </button>
              </div>
            </div>
          </div>
          <!-- Form with header -->
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="col-lg-7">
          <!--Google map-->
          <div
            id="map-container-section"
            class="z-depth-1-half map-container-section mb-4"
            style="height: 400px"
          >
            <iframe
              src="https://maps.google.com/maps?q=Manhatan&t=&z=15&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              style="border: 0"
              allowfullscreen
            />
          </div>
          <!-- Buttons-->
          <div class="row text-center">
            <div class="col-md-4">
              <a class="btn-floating blue accent-1">
                <i class="fas fa-map-marker-alt" />
              </a>
              <p>New York, 94126</p>
              <p class="mb-md-0">
                United States
              </p>
            </div>
            <div class="col-md-4">
              <a class="btn-floating blue accent-1">
                <i class="fas fa-phone" />
              </a>
              <p>+ 01 234 567 89</p>
              <p class="mb-md-0">
                Mon - Fri, 8:00-22:00
              </p>
            </div>
            <div class="col-md-4">
              <a class="btn-floating blue accent-1">
                <i class="fas fa-envelope" />
              </a>
              <p>info@gmail.com</p>
              <p class="mb-0">
                sale@gmail.com
              </p>
            </div>
          </div>
        </div>
        <!-- Grid column -->
      </div>
      <!-- Grid row -->
    </section>
    <!--Section: Content-->
  </div>
</template>
<script>
export default {
  name: "Contact",
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
.map-container-section {
  overflow: hidden;
  padding-bottom: 56.25%;
  position: relative;
  height: 0;
}
.map-container-section iframe {
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  position: absolute;
}
</style>