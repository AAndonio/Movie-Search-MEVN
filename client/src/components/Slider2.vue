<template>
  <div style="margin: 10px 20px 30px 20px; padding: 0">
    <vue-slider
      v-model="selectedValues"
      :interval="interval"
      :min="min"
      :max="max"
      :adsorb="true"
      :data="data"
      :marks="marks"
      v-on:drag-end="aggiorna"
      class="slider2"
    ></vue-slider>
  </div>
</template>

<script>
export default {
  props: {
    values: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      selectedValues: [this.values.min, this.values.min],
      min: this.values.min,
      max: this.values.max,
      interval: this.values.interval,
      minField: this.values.field1,
      maxField: this.values.field2,
      data: [
        "100",
        "500",
        "1000",
        "5000",
        "1000000",
        "25000000",
        "50000000",
        "100000000",
        "250000000",
        "500000000"
      ],
      marks: [
        "100k",
        "500k",
        "1ML",
        "5ML",
        "10ML",
        "25ML",
        "50ML",
        "100ML",
        "250ML",
        "500ML"
      ]
    };
  },
  methods: {
    aggiorna() {
      var message = {
        minField: this.minField,
        selectedMin: this.selectedValues[0],
        maxField: this.maxField,
        selectedMax: this.selectedValues[1]
      };
      this.$emit("childToParent", message);
    }
  }
};
</script>

<style>
.vue-slider-ltr .vue-slider-mark-label {
  font-size: xx-small;
}
</style>
