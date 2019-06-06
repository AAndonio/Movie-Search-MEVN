<template>
  <div>
    <b-form-select v-model="selected" :options="options" class="mb-3">
      <!-- This slot appears above the options from 'options' prop -->
      <template slot="first">
        <option :value="null" disabled>-- Please select an option --</option>
      </template>

      <!-- These options will appear after the ones from 'options' prop -->
      <option value="C">Option C</option> <option value="D">Option D</option>
    </b-form-select>

    <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        selected: null,
        options: [
          { value: 'A', text: 'Option A (from options prop)' },
          { value: 'B', text: 'Option B (from options prop)' }
        ]
      }
    }
  }
</script>