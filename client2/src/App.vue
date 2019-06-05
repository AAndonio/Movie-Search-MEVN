<template>
  <div id="app">
    <Navbar/>
    <ScaleRotate disableOutsideClick>
        <b-button v-b-toggle="'collapse-2'" class="m-1" style="width:-webkit-fill-available">Colore</b-button>
        <!-- Element to collapse -->
        <b-collapse id="collapse-2">
          <b-card-text>
            <Toggle/>
          </b-card-text>
        </b-collapse>
    </ScaleRotate>
    <main id="page-wrap">
      <Table/>
    </main>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Table from "./components/Table";
import { ScaleRotate } from "vue-burger-menu";
import Toggle from "./components/Toggle";

export default {
  name: "App",
  components: {
    Navbar,
    ScaleRotate,
    Toggle,
    Table
  },
  data() {
    return {
      //
    };
  }
};
</script>
