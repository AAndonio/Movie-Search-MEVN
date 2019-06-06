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
    props: {
      labelToggle: Array
     },
    data() {
      return {
        selected: [], // Must be an array reference!
        options: this.labelToggle
          //{ text: 'A Colore', value: 'colore' },
        
      }
    }
  }
</script>