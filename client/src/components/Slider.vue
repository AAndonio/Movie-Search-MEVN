<template>
  <div style="margin: 10px 20px; padding: 0">
    <vue-slider v-model="selectedValues" :interval="interval" :min="min" :max="max" v-on:drag-end="aggiorna"></vue-slider>
    <v-layout row>
      <v-flex shrink style="width: 120px; margin-right: auto">
        <v-text-field v-model="selectedValues[0]" class="mt-0" hide-details single-line type="number" :min="min" :max="max"></v-text-field>
      </v-flex>
      <v-flex shrink style="width: 120px">
        <v-text-field v-model="selectedValues[1]" class="mt-0" hide-details single-line type="number" :min="min" :max="max"></v-text-field>
      </v-flex>
    </v-layout>
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
      selectedValues: [this.values.min,this.values.min],
      min: this.values.min,
      max: this.values.max,
      interval: this.values.interval,
      minField: this.values.field1,
      maxField: this.values.field2,
    };
  },
  methods: {
    aggiorna() {
      var message = { minField: this.minField, 
                    selectedMin: this.selectedValues[0],
                    maxField: this.maxField,
                    selectedMax: this.selectedValues[1]};
      this.$emit("childToParent", message);
    }
  }
};
</script>

<style>
.vue-slider-dot-handle {
  background-color: darkred !important;
}
.vue-slider-process {
  background-color: goldenrod !important;
}
.vue-slider-dot-tooltip-inner {
  border-color: goldenrod !important;
  background-color: darkred !important;
  color: gold !important;
}
.theme--light.v-input:not(.v-input--is-disabled) input{
    color: darkred !important;
}
.vue-slider-dot-handle {
    -webkit-box-shadow: 0 0 0 0.2rem rgba(218, 165, 32, 0.25) !important;
    box-shadow: 0 0 0 0.2rem rgba(218, 165, 32, 0.25) !important;
}
</style>
