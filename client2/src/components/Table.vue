<template>
  <b-container fluid style="padding: 0 0">
    <!-- User Interface controls -->
    <div id="app">
      <ScaleRotate disableOutsideClick style="
      position: absolute;
      height: 30px;
      cursor: pointer;">
        <b-button v-b-toggle="'collapse-1'" class="m-1" style="width:-webkit-fill-available">Colore</b-button>
        <!-- Element to collapse -->
        <b-collapse id="collapse-1">
          <b-card-text>
            <Toggle/>
          </b-card-text>
        </b-collapse>
        <b-button v-b-toggle="'collapse-2'" class="m-1" style="width:-webkit-fill-available">Cuntent Rating</b-button>
        <!-- Element to collapse -->
        <b-collapse id="collapse-2">
          <b-card-text>
            <Toggle/>
          </b-card-text>
        </b-collapse>
                <b-button v-b-toggle="'collapse-3'" class="m-1" style="width:-webkit-fill-available">Colore</b-button>
        <!-- Element to collapse -->
        <b-collapse id="collapse-3">
          <b-card-text>
            <Slider/>
          </b-card-text>
        </b-collapse>
      </ScaleRotate>
      <main id="page-wrap">
        <b-row align-h="end" style="padding: 40px 65px 0px">
          <b-col md="3" class="my-1" style="margin: auto; padding-top: 30px">
            <b-form-group label-cols-sm="3" label="Filtra" class="mb-0">
              <b-input-group>
                <b-form-input v-model="filter" placeholder="Type to Search"></b-form-input>
                <b-input-group-append>
                  <b-button :disabled="!filter" @click="filter = ''">Clear</b-button>
                </b-input-group-append>
              </b-input-group>
            </b-form-group>
          </b-col>

          <b-col md="3"  class="my-1" style="margin: auto; padding-top: 30px">
            <b-form-group label-cols-sm="3" label="Film per pagina" class="mb-0">
              <b-form-select v-model="perPage" :options="pageOptions"></b-form-select>
            </b-form-group>
          </b-col>
        </b-row>
        <b-container fluid style="padding: 50px">
        <!-- Main table element -->
        <b-table
          show-empty
          stacked="md"
          striped
          hover
          head-variant="dark"
          :items="items"
          :fields="fields"
          :current-page="currentPage"
          :per-page="perPage"
          :filter="filter"
          @filtered="onFiltered"
        >
          <template slot="movie_title" slot-scope="row">{{ row.value }}</template>
          <template slot="title_year" slot-scope="row">{{ row.value }}</template>

          <template slot="row-details" slot-scope="row">
            <b-card>
              <ul>
                <li v-for="(value, key) in row.item" :key="key">{{ key }}: {{ value }}</li>
              </ul>
            </b-card>
          </template>
        </b-table>

        <b-row>
          <b-col md="6" class="my-1">
            <b-pagination
              v-model="currentPage"
              :total-rows="totalRows"
              :per-page="perPage"
              class="my-0"
            ></b-pagination>
          </b-col>
        </b-row>
        </b-container>
      </main>    
    </div>
  </b-container>
</template>

<script>

import MovieService from '../services/MovieService';
import { ScaleRotate } from "vue-burger-menu";
import Toggle from "./Toggle";
import Slider from "./Slider"

export default {
  name: "Home",
  components: {
    ScaleRotate,
    Toggle,
    Slider
  },
  data() {
    return {
      items: [],
      fields: [
        { key: "movie_title", label: "Titolo"},
        { key: "title_year", label: "Anno" }
      ],
      totalRows: 1,
      currentPage: 1,
      perPage: 20,
      pageOptions: [20, 50, 100],
      filter: null,
      infoModal: {
        id: "info-modal",
        title: "",
        content: ""
      }
    };
  },
  mounted() {
    // Set the initial number of items
    this.getMovies()

  },
  methods: {

    async getMovies() {
      const response = await MovieService.getMoviesSelection();
      this.items = response.data;
      this.totalRows = this.items.length;
    },


    info(item, index, button) {
      this.infoModal.title = `Row index: ${index}`;
      this.infoModal.content = JSON.stringify(item, null, 2);
      this.$root.$emit("bv::show::modal", this.infoModal.id, button);
    },
    resetInfoModal() {
      this.infoModal.title = "";
      this.infoModal.content = "";
    },
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    }
  }
};
</script>