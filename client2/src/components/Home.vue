<template>
  <b-container fluid style="padding: 0 0;">
    <v-layout wrap>
      <v-navigation-drawer v-model="drawer" absolute temporary>
        <v-list-group>
          <template v-slot:activator>
            <v-list-tile>
              <v-list-tile-title style="color: darkred; font-weight: bold">Colori</v-list-tile-title>
            </v-list-tile>
          </template>
          <div style="padding:0 20px; font-size: 1.3em">
            <Toggle
              name="Colore"
              style="color: #ADB5BD; font-weight: 400;"
              :labelToggle="colorLabel"
              dbFieldName="color"
              v-on:childToParent="onToggleUpdating"
            />
          </div>
        </v-list-group>
        <v-list-group>
          <template v-slot:activator>
            <v-list-tile>
              <v-list-tile-title style="color: darkred; font-weight: bold">Content Rating</v-list-tile-title>
            </v-list-tile>
          </template>
          <div style="padding:0 20px; font-size: 1.3em">
            <Toggle
              name="Content Rating"
              id="toggle2"
              style="color: #ADB5BD; font-weight: 400;"
              :labelToggle="contentLabel"
              dbFieldName="content_rating"
              v-on:childToParent="onToggleUpdating"
            />
          </div>
        </v-list-group>
        <v-list-group>
          <template v-slot:activator>
            <v-list-tile>
              <v-list-tile-title style="color: darkred; font-weight: bold">Generi</v-list-tile-title>
            </v-list-tile>
          </template>
          <div style="padding:0 20px; font-size: 1.3em">
            <Toggle
              name="Genres"
              id="toggle3"
              style="color: #ADB5BD; font-weight: 400;"
              :labelToggle="genresLabel"
              dbFieldName="genres"
              v-on:childToParent="onToggleUpdating"
            />
          </div>
        </v-list-group>
        <v-list-group>
          <template v-slot:activator>
            <v-list-tile>
              <v-list-tile-title style="color: darkred; font-weight: bold">Budget</v-list-tile-title>
            </v-list-tile>
          </template>
          <div>
            <Slider
              name="Budget"
              id="slider1"
            />
          </div>
        </v-list-group>
      </v-navigation-drawer>
    </v-layout>

    <b-row align-h="end" style="padding: 40px 65px 0px 65px">
      <b-col md="3" class="my-1" style="padding-top: 30px">
        <button align-h="end" @click.stop="drawer = !drawer">
          <img
            style=" background-color: Transparent;
    background-repeat:no-repeat;
    border: none;
    cursor:pointer;
    overflow: hidden;
    outline:none;width: 50px;
        height: 50px;"
            src="../assets/filter.png"
          >
        </button>
      </b-col>
      <b-col md="3" class="my-1" style="padding-top: 30px">
        <b-form-group label-cols-sm="3" label="Filtra" class="mb-0">
          <b-input-group>
            <b-form-input v-model="filter" placeholder="Clicca per cercare"></b-form-input>
            <b-input-group-append>
              <b-button :disabled="!filter" @click="filter = ''" style="margin: 0">Clear</b-button>
            </b-input-group-append>
          </b-input-group>
        </b-form-group>
      </b-col>
      <b-col md="3" class="my-1" style="padding-top: 30px">
        <b-form-group label-cols-sm="3" label="Film per pagina" class="mb-0">
          <b-form-select v-model="perPage" :options="pageOptions"></b-form-select>
        </b-form-group>
      </b-col>
      <b-col md="3" class="my-1" style="padding-top: 30px">
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
        <b-col md="12" class="my-1">
          <b-pagination
            v-model="currentPage"
            :total-rows="totalRows"
            :per-page="perPage"
            align="fill"
            class="my-0"
          ></b-pagination>
        </b-col>
      </b-row>
    </b-container>
  </b-container>
</template>

<script>
import MovieService from "../services/MovieService";
import Toggle from "./Toggle";
import Slider from "./Slider";
import { Labels } from "../assets/labels";

export default {
  name: "Home",
  components: {
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
      drawer: null,
      sidebarItems: [
        { title: "Home", icon: "dashboard" },
        { title: "About", icon: "question_answer" }
      ],
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
      contentLabel: Labels.contentRatingLabel,
      genresLabel: Labels.genresLabel
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

<style>
img.resize {
  width: 20px;
  height: 20px;
}
</style>