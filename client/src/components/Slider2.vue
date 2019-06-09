<template>
  <div style="margin: 10px 20px 30px 20px; padding: 0">
    <vue-slider
      v-model="selectedValues"
      :interval="interval"
      :min="min"
      :max="max"
      :adsorb="true"
      :data="data"
      :marks="true"
      v-on:drag-end="aggiorna"
      class="slider2"
    ></vue-slider>
  </div>
</template>

<script>
import { Labels } from "../assets/labels";

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
        "0",
        "100k",
        "300k",
        "500k",
        "1Ml",
        "5Ml",
        "10Ml",
        "25Ml",
        "50Ml",
        "100Ml",
        "250Ml",
        "500Ml"
      ],
      realValues: Labels.slider2Values
    };
  },
  methods: {
    aggiorna() {
      var message = {
        minField: this.minField,
        selectedMin: this.getRealValue(this.selectedValues[0]),
        maxField: this.maxField,
        selectedMax: this.getRealValue(this.selectedValues[1])
      };
      this.$emit("childToParent", message);
    },

    getRealValue(value){
      return this.realValues[value];
    }
  }
};
</script>

<style>
.vue-slider-ltr .vue-slider-mark-label {
  font-size: xx-small;
}
</style>
