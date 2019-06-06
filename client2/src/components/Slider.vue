<template>
  <div>
    <b-form-slider :value="value" @slide-start="slideStart" @slide-stop="slideStop"></b-form-slider>
    <p>Slider has value {{ value }}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: 5
    }
  }
}
</script>