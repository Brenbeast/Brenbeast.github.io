<template>
  <div class="container my-5">
    <!--Section: Content-->
    <section>
      <h6
        class="
          font-weight-normal
          text-uppercase
          font-small
          grey-text
          mb-4
          text-center
        "
      >
        FAQ
      </h6>
      <!-- Section heading -->
      <h3 class="font-weight-bold black-text mb-4 pb-2 text-center">
        Frequently Asked Questions
      </h3>
      <hr class="w-header">
      <!-- Section description -->
      <p class="lead text-muted mx-auto mt-4 pt-2 mb-5 text-center">
        Got a question? We've got answers. If you have some other questions, see
        our support center.
      </p>

      <div class="row text-center text-md-left">
        <div class="col-md-6 mb-4">
          <h5 class="font-weight-normal mb-3">
            We Live in a Greenhouse?
          </h5>
          <p class="text-muted">
            Life on Earth depends on energy coming from the Sun. About half the
            light reaching Earth's atmosphere passes through the air and clouds
            to the surface, where it is absorbed and then radiated upward in the
            form of infrared heat. About 90 percent of this heat is then
            absorbed by the greenhouse gases and radiated back toward the
            surface.
          </p>
        </div>

        <div class="col-md-6 mb-4">
          <h5 class="font-weight-normal mb-3">
            Is the Sun to Blame?
          </h5>
          <p class="text-muted">
            Since 1978, a series of satellite instruments have measured the
            energy output of the Sun directly. The satellite data show a very
            slight drop in solar irradiance (which is a measure of the amount of
            energy the Sun gives off) over this time period. So the Sun doesn't
            appear to be responsible for the warming trend observed over the
            past several decades.
          </p>
        </div>

        <div class="col-md-6 mb-4">
          <h5 class="font-weight-normal mb-3">
            How do we know that changes in the Sun aren’t to blame for current
            global warming trends?
          </h5>
          <p class="text-muted">
            ALonger-term estimates of solar irradiance have been made using
            sunspot records and other so-called “proxy indicators,” such as the
            amount of carbon in tree rings. The most recent analyses of these
            proxies indicate that solar irradiance changes cannot plausibly
            account for more than 10 percent of the 20th century’s warming.
          </p>
        </div>

        <div class="col-md-6 mb-4">
          <h5 class="font-weight-normal mb-3">
            Water Vapour affects the climate?
          </h5>
          <p class="text-muted">
            YThe most abundant greenhouse gas, but importantly, it acts as a
            feedback to the climate. Water vapor increases as the Earth's
            atmosphere warms, but so does the possibility of clouds and
            precipitation, making these some of the most important feedback
            mechanisms to the greenhouse effect.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "Faq",
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