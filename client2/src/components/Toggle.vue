<template>
  <div>
    <b-form-group>
      <b-form-checkbox-group
        v-model="selected"
        :options="options"
        switches
        stacked
      ></b-form-checkbox-group>
    </b-form-group>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        selected: [], // Must be an array reference!
        options: [
          { text: 'A Colore', value: 'colore' },
          { text: 'Bianco e Nero', value: 'blackNwhite' },
        ]
      }
    }
  }
</script>