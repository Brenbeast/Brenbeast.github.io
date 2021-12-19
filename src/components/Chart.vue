<template>
  <!--Section: Content-->
  <section class="text-center px-md-5 mx-md-5 dark-grey-text">
    <h3 class="font-weight-bold mb-4 pb-2">
      CO2 Emissions Worldwide
    </h3>

    <mdb-container>
      <mdb-line-chart
        :data="lineChartData"
        :options="lineChartOptions"
        :width="600"
      />
    </mdb-container>
  </section>
  <!--Section: Content-->
</template>
<script>
import { mdbLineChart, mdbContainer } from "mdbvue";
import dataset from "@/dataset1.json";
export default {
  name: "ChartPage",
  components: {
    mdbLineChart,
    mdbContainer,
  },
  /**
   * The data prop is where you define the data that will be used in the
   * charts.
   *
   * @type {Object}
   */

  data() {
    return {
      lineChartData: dataset,
      lineChartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [
            {
              gridLines: {
                display: true,
                color: "rgba(0, 0, 0, 0.1)",
              },
            },
          ],
          yAxes: [
            {
              gridLines: {
                display: true,
                color: "rgba(0, 0, 0, 0.1)",
              },
            },
          ],
        },
      },
    };
  },
};
</script>