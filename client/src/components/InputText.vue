<template>
  <div style="margin: 10px 20px; padding: 0">
    <b-form-input v-model="text" placeholder="Inserisci nome" v-on:change="aggiorna"></b-form-input>
  </div>
</template>

<script>
  export default {
    props: {
      id: { 
        type: String,
        required: true
      }
    },
    data() {
      return {
        text: "",
      }
    },
    methods: {
      aggiorna() {
        var message = {id: this.id, newValue: this.text};
        this.$emit("childToParent", message);
      }
    }
  }
</script>