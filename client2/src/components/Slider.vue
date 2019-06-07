<template>
  <div id="app">
    <v-app id="inspire">
      <v-card flat color="transparent">
        <v-card-text>
          <v-layout row>
            <v-flex class="px-3">
              <v-range-slider v-model="range" :max="max" :min="min"></v-range-slider>
            </v-flex>
            <v-flex shrink style="width: 60px; margin-right: auto">
              <v-text-field v-model="range[0]" class="mt-0" hide-details single-line type="number"></v-text-field>
            </v-flex>
            <v-flex shrink style="width: 60px">
              <v-text-field v-model="range[1]" class="mt-0" hide-details single-line type="number"></v-text-field>
            </v-flex>
          </v-layout>
        </v-card-text>
      </v-card>
    </v-app>
  </div>
</template>

<script>
export default {
  data() {
    return {
      min: -50,
      max: 90,
      slider: 40,
      range: [-20, 70]
    };
  }
};
</script>