<template>
    <b-collapse id="collapse-3">
      <b-card-text>
        <v-app id="inspire">
          <v-card flat color="transparent">
            <v-card-text>
              <v-layout row>
                <v-flex class="px-3">
                  <v-range-slider v-model="value3" :max="600" :min="20" :step="10"></v-range-slider>
                </v-flex>
                <v-flex shrink style="width: 60px; margin-right: auto;">
                  <v-text-field
                    v-model="value3[0]"
                    class="mt-0"
                    hide-details
                    single-line
                    type="number"
                  ></v-text-field>
                </v-flex>
                <v-flex shrink style="width: 60px">
                  <v-text-field
                    v-model="value3[1]"
                    class="mt-0"
                    hide-details
                    single-line
                    type="number"
                  ></v-text-field>
                </v-flex>
              </v-layout>
            </v-card-text>
          </v-card>
        </v-app>
      </b-card-text>
    </b-collapse>
</template>

<script>
export default {
  
  data() {
    return {
      value3: [110, 440]
    };
  },
  methods: {
    // Triggered when `childToParent` event is emitted by the child.
    onChildClick (params) {
      this.fromChild = value
    }
  }

};
</script>