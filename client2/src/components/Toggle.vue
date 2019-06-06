<template>
  <div>
    <b-button v-b-toggle="idVarToggle" class="m-1" style="width:-webkit-fill-available">{{this.name}}</b-button>
        <!-- Element to collapse -->
        <b-collapse :id="id">
          <b-card-text>
            <b-form-group>
              <b-form-checkbox-group
              v-model="selected"
              :options="options"
              switches
              stacked
              ></b-form-checkbox-group>
            </b-form-group>
          </b-card-text>
        </b-collapse>
  </div>
</template>

<script>
  export default {
    props:  {   
      id: {
        type: String,
        required: true
      },
      idVarToggle: {
        type: String,
        required: true
      },
      name: {
        type: String,
        required: true
      },
      labelToggle: {
        type: Array,
        required: true
      }
    },
    data() {
      console.log(this.idVarToggle);
      return {
        selected: [], // Must be an array reference!
        options: this.labelToggle
          //{ text: 'A Colore', value: 'colore' },
        
      }
    }
  }
</script>