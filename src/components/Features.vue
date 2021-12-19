<template>
  <mdb-container>
    <section class="text-center my-5">
      <h2 class="h1-responsive font-weight-bold my-5">
        Why is it so important?
      </h2>
      <p class="lead grey-text w-responsive mx-auto mb-5">
        Scientists attribute the global warming trend observed since the
        mid-20th century to the human expansion of the "greenhouse effect"1 —
        warming that results when the atmosphere traps heat radiating from Earth
        toward space.
      </p>
      <p class="lead grey-text w-responsive mx-auto mb-5">
        Certain gases in the atmosphere block heat from escaping. Long-lived
        gases that remain semi-permanently in the atmosphere and do not respond
        physically or chemically to changes in temperature are described as
        "forcing" climate change. Gases, such as water vapor, which respond
        physically or chemically to changes in temperature are seen as
        "feedbacks."
      </p>
      <mdb-row>
        <mdb-col md="4">
          <mdb-icon
            icon="chart-area"
            size="3x"
            class="red-text"
          />
          <h5 class="font-weight-bold my-4">
            How Do We Know?
          </h5>
          <p class="grey-text mb-md-0 mb-5">
            The Earth's climate has changed throughout history
          </p>
        </mdb-col>
        <mdb-col md="4">
          <mdb-icon
            icon="book"
            size="3x"
            class="cyan-text"
          />
          <h5 class="font-weight-bold my-4">
            Causes of Climate Change
          </h5>
          <p class="grey-text mb-md-0 mb-5">
            Life on Earth depends on energy coming from the Sun
          </p>
        </mdb-col>
        <mdb-col md="4">
          <mdb-icon
            far
            icon="comments"
            size="3x"
            class="orange-text"
          />
          <h5 class="font-weight-bold my-4">
            Solving the problem
          </h5>
          <p class="grey-text mb-md-0 mb-5">
            NASA is a world leader in climate studies and Earth science
          </p>
        </mdb-col>
      </mdb-row>
    </section>
  </mdb-container>
</template>
<script>
import { mdbContainer, mdbRow, mdbCol, mdbIcon } from "mdbvue";
export default {
  name: "Features",
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbIcon,
  },
};
</script>