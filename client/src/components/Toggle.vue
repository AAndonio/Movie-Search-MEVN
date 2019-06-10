<template>
  <div>
    <b-card-text>
      <b-form-group>
        <b-form-checkbox-group
          v-model="selected"
          :options="options"
          switches
          stacked
          v-on:input="aggiorna"
        ></b-form-checkbox-group>
      </b-form-group>
    </b-card-text>
  </div>
</template>

<script>
export default {
  props: {
    labelToggle: {
      type: Array,
      required: true
    },
    dbFieldName: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      selected: [], // Must be an array reference!
      options: this.labelToggle
    };
  },
  methods: {
    aggiorna() {
      var message = { fieldName: this.dbFieldName, selected: this.selected };
      this.$emit("childToParent", message);
    }
  }
};
</script>

<style>
.custom-control-input:checked ~ .custom-control-label::before {
  color: #fff !important;
  border-color: goldenrod !important;
  background-color: darkred !important;
}
.custom-control-input:focus ~ .custom-control-label::before {
  -webkit-box-shadow: 0 0 0 0.2rem rgba(218, 165, 32, 0.25) !important;
  box-shadow: 0 0 0 0.2rem rgba(218, 165, 32, 0.25) !important;
}
</style>