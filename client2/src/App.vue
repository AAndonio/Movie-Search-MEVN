<template>
<div id="app">
  <Navbar/>
      <ScaleRotate>
        <a id="home" href="#">
            <span>Home</span>
        </a>
      </ScaleRotate>
      <main id="page-wrap">
        <Table/>
      </main>
</div>
</template>

<script>
import Navbar from './components/Navbar'
import Table from './components/Table'
import { ScaleRotate } from 'vue-burger-menu'

export default {
  name: 'App',
  components: {
    Navbar,
    ScaleRotate,
    Table
  },
  data () {
    return {
      //
    }
  }
  
}
</script>
