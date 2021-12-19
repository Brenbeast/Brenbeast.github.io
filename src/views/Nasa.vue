<template>
  <div class="embed-responsive embed-responsive-16by9">
    <iframe
      class="embed-responsive-item"
      src="https://climate.nasa.gov/earth-now/?vs_name=air_temperature&dataset_id=820&group_id=46&animating=f&start=&end=#/"
    />
  </div>
</template>


<script>
export default {
  name: "Earth",
  /**
   * @return {Object}
   */
  components: {},
  /**
   * The data() function returns an object that contains the data that will be
   * available in the component's template.
   */
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
iframe {
  display: block;
  width: 800px;
  border: 1px solid #ccc;
  max-height: 100vh;
}
</style>