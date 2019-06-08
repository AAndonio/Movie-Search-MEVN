<template>
  <div style="margin: 10px 20px; padding: 0">
    <vue-slider v-model="value_2" :interval="5" :min="0" :max="100"></vue-slider>
    <v-layout row>
      <v-flex shrink style="width: 60px; margin-right: auto">
        <v-text-field v-model="value_2[0]" class="mt-0" hide-details single-line type="number" :min="0" :max="100"></v-text-field>
      </v-flex>
      <v-flex shrink style="width: 60px">
        <v-text-field v-model="value_2[1]" class="mt-0" hide-details single-line type="number" :min="0" :max="100"></v-text-field>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
module.exports = {
  props: {
    values: {
      type: Object,
      required: true
    }
  },
  data: function() {
    return {
      value_2: [0, 50]
    };
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
