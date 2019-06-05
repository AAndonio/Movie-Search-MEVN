<template>
<div>
  <Navbar/>
  <Menu/>
  <scaleRotate/>
  <Table/>
</div>
</template>

<script>
import Navbar from './components/Navbar'
import Table from './components/Table'
import Menu from './components/Menu'
import scaleRotate from './components/scaleRotate'

export default {
  name: 'App',
  components: {
    Navbar,
    Menu,
    scaleRotate,
    Table
  },
  data () {
    return {
      //
    }
  }
  
}
</script>
