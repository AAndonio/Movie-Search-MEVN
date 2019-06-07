<template>
  <b-container fluid style="padding: 0 0;">
    <div id="app">
      <ScaleRotate
        disableOutsideClick
        style="
      position: absolute;
      height: 30px;
      cursor: pointer;"
      >
        <b-button v-b-toggle="'toggle1'" class="m-1" style="width: -webkit-fill-available">Colore</b-button>
        <Toggle
          name="Colore"
          style="color: #ADB5BD"
          id="toggle1"
          :labelToggle="colorLabel"
          dbFieldName="color"
          v-on:childToParent="onToggleUpdating"
        />
        <b-button
          v-b-toggle="'toggle2'"
          class="m-1"
          style="width: -webkit-fill-available"
        >Content Rating</b-button>
        <Toggle
          name="Content Rating"
          id="toggle2"
          style="color: #ADB5BD"
          :labelToggle="contentLabel"
          dbFieldName="content_rating"
          v-on:childToParent="onToggleUpdating"
        />
        <Slider/>
      </ScaleRotate>
      <main id="page-wrap">
        <b-row align-h="end" style="padding: 40px 65px 0px 65px">
          <b-col md="6" class="my-1" style="padding-top: 30px">
            <b-form-group label-cols-sm="3" label="Filtra" class="mb-0">
              <b-input-group>
                <b-form-input v-model="filter" placeholder="Clicca per cercare"></b-form-input>
                <b-input-group-append>
                  <b-button :disabled="!filter" @click="filter = ''">Clear</b-button>
                </b-input-group-append>
              </b-input-group>
            </b-form-group>
          </b-col>
          <b-col md="6" class="my-1" style="padding-top: 30px">
            <b-form-group label-cols-sm="3" label="Film per pagina" class="mb-0">
              <b-form-select v-model="perPage" :options="pageOptions"></b-form-select>
            </b-form-group>
          </b-col>
        </b-row>

        <b-row align-h="end" style="padding: 0 65px">
          <b-col md="6" class="my-1">
            <b-form-group label-cols-sm="3" label="Ordina" class="mb-0">
              <b-input-group>
                <b-form-select v-model="sortBy" :options="sortOptions">
                  <option slot="first" :value="null">-- none --</option>
                </b-form-select>
                <b-form-select v-model="sortDesc" :disabled="!sortBy" slot="append">
                  <option :value="false">Asc</option>
                  <option :value="true">Desc</option>
                </b-form-select>
              </b-input-group>
            </b-form-group>
          </b-col>
        </b-row>

        <b-container fluid style="padding: 50px">
          <!-- Main table element -->
          <b-table
            striped
            show-empty
            stacked="md"
            hover
            head-variant="dark"
            :items="items"
            :fields="fields"
            :current-page="currentPage"
            :per-page="perPage"
            :filter="filter"
            :sort-by.sync="sortBy"
            :sort-desc.sync="sortDesc"
            :sort-direction="sortDirection"
            @filtered="onFiltered"
          >
            <template slot="movie_title" slot-scope="row" href="movie_imdb_link">{{ row.value }}</template>
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
import MovieService from "../services/MovieService";
import Toggle from "./Toggle";
import Slider from "./Slider";

import { ScaleRotate } from "vue-burger-menu";
import { Labels } from "../assets/labels";


export default {
  name: "Home",
  components: {
    ScaleRotate,
    Toggle,
    Slider
  },
  props: {
    request: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  data() {
    return {
      items: [],
      fields: [
        {
          key: "movie_title",
          label: "Titolo",
          sortable: true,
          sortDirection: "desc"
        },
        { key: "title_year", label: "Anno", sortable: true }
      ],
      totalRows: 1,
      currentPage: 1,
      perPage: 20,
      pageOptions: [20, 50, 100],
      filter: null,
      sortBy: null,
      sortDesc: false,
      sortDirection: "asc",
      infoModal: {
        id: "info-modal",
        title: "",
        content: ""
      },
      colorLabel: Labels.colorLabel,
      contentLabel: Labels.contentRatingLabel
    };
  },
  computed: {
    sortOptions() {
      // Create an options list from our fields
      return this.fields
        .filter(f => f.sortable)
        .map(f => {
          return { text: f.label, value: f.key };
        });
    }
  },
  mounted() {
    // Set the initial number of items
    this.getMovies();
  },
  methods: {
    async getMovies() {
      var response = await MovieService.getMoviesSelection(this.request);
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
    },
    onToggleUpdating(value) {
      var field = value.fieldName;
      if (value.selected.length == 0) {
        delete this.request[field];
      } else {
        this.request[field] = value.selected;
      }
      this.getMovies();
    }
  }
};
</script>