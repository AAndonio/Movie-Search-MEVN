<template>
  <div style="margin: 10px 20px; padding: 0">
    <b-form-input v-model="text" placeholder="Inserisci nome"></b-form-input>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        text: ''
      }
    }
  }
</script>