<template>
  <b-container fluid style="padding: 0 0;">
    <v-layout wrap>
      <v-navigation-drawer v-model="drawer" absolute temporary>
        <h2 align="center">Filtri</h2>
        <v-list>
          <v-list-group>
            <template v-slot:activator>
              <v-list-tile>
                <v-list-tile-title class="sidebar-item">Colori</v-list-tile-title>
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
                <v-list-tile-title class="sidebar-item">Content Rating</v-list-tile-title>
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
                <v-list-tile-title class="sidebar-item">Generi</v-list-tile-title>
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
                <v-list-tile-title class="sidebar-item">Anno</v-list-tile-title>
              </v-list-tile>
            </template>
            <div style="display:block">
              <Slider name="Year" :values="yearLabel" v-on:childToParent="onSliderUpdating"/>
            </div>
          </v-list-group>
          <v-list-group>
            <template v-slot:activator>
              <v-list-tile>
                <v-list-tile-title class="sidebar-item">Durata</v-list-tile-title>
              </v-list-tile>
            </template>
            <Slider name="Duration" :values="durationLabel" v-on:childToParent="onSliderUpdating"/>
          </v-list-group>
          <v-list-group>
            <template v-slot:activator>
              <v-list-tile>
                <v-list-tile-title class="sidebar-item">Budget</v-list-tile-title>
              </v-list-tile>
            </template>
            <Slider2 name="Budget" :values="budgetLabel" v-on:childToParent="onSliderUpdating"/>
          </v-list-group>
          <v-list-group>
            <template v-slot:activator>
              <v-list-tile>
                <v-list-tile-title class="sidebar-item">Incasso</v-list-tile-title>
              </v-list-tile>
            </template>
            <Slider2 name="Gross" :values="grossLabel" v-on:childToParent="onSliderUpdating"/>
          </v-list-group>
          <v-list-group>
            <template v-slot:activator>
              <v-list-tile>
                <v-list-tile-title class="sidebar-item">IMDB Rating</v-list-tile-title>
              </v-list-tile>
            </template>
            <Slider name="Rating" :values="ratingLabel" v-on:childToParent="onSliderUpdating"/>
          </v-list-group>
          <v-list-group>
            <template v-slot:activator>
              <v-list-tile>
                <v-list-tile-title class="sidebar-item">Numero di recensioni dalla critica</v-list-tile-title>
              </v-list-tile>
            </template>
            <Slider name="Critics" :values="criticLabel" v-on:childToParent="onSliderUpdating"/>
          </v-list-group>
          <v-list-group>
            <template v-slot:activator>
              <v-list-tile>
                <v-list-tile-title>Regista</v-list-tile-title>
              </v-list-tile>
            </template>
            <div>
              <InputText name="Regista" id="1" v-on:childToParent="onDirectorUpdating"/>
            </div>
          </v-list-group>
          <v-list-group>
            <template v-slot:activator>
              <v-list-tile>
                <v-list-tile-title>Attore</v-list-tile-title>
              </v-list-tile>
            </template>
            <div>
              <InputText id="1" v-on:childToParent="onActorUpdating"/>
            </div>
            <div>
              <InputText id="2" v-on:childToParent="onActorUpdating"/>
            </div>
            <div>
              <InputText id="3" v-on:childToParent="onActorUpdating"/>
            </div>
          </v-list-group>
        </v-list>
      </v-navigation-drawer>
    </v-layout>

    <b-row align-h="end" style="padding: 40px 65px 0px 65px">
      <b-col md="1" class="my-1" style="padding-top: 30px">
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
      <b-col md="4" class="my-1" style="padding-top: 30px">
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
        <b-form-group label-cols-sm="3" label="Per pagina" class="mb-0">
          <b-form-select v-model="perPage" :options="pageOptions"></b-form-select>
        </b-form-group>
      </b-col>
      <b-col md="4" class="my-1" style="padding-top: 30px">
        <b-form-group label-cols-sm="3" label="Ordina" class="mb-0">
          <b-input-group>
            <b-form-select v-model="sortBy" :options="sortOptions">
              <option slot="first" :value="null">-- none --</option>
            </b-form-select>
            <b-form-select
              v-model="sortDesc"
              :disabled="!sortBy"
              slot="append"
              style="background-color: #b45a5a !important; color: white;"
            >
              <option :value="false">ASC</option>
              <option :value="true">DESC</option>
            </b-form-select>
          </b-input-group>
        </b-form-group>
      </b-col>
    </b-row>

    <b-row md="12" style="padding: 40px 65px 0px 65px">
      <p>
        Sono stati trovati
        <b>{{items.length}}</b> risultati
      </p>
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
        <template slot="movie_title" slot-scope="row">{{ row.value }}</template>
        <template slot="title_year" slot-scope="row">{{ row.value }}</template>
        <template slot="director_name" slot-scope="row">{{ row.value }}</template>
        <template slot="duration" slot-scope="row">{{ row.value }}</template>
        <template slot="imdb_score" slot-scope="row">{{ row.value }}</template>
        <template slot="movie_imdb_link" slot-scope="row">
          <a :href="row.value">Link</a>
        </template>

        <template slot="row-details" slot-scope="row">
          <b-card>
            <ul>
              <li v-for="(value, key) in row.item" :key="key">{{ key }}: {{ value }}</li>
            </ul>
          </b-card>
        </template>
      </b-table>

      <b-row align-h="center">
        <b-col md="5" class="my-1">
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
import Slider2 from "./Slider2";
import InputText from "./InputText";
import { Labels } from "../assets/labels";

export default {
  name: "Home",
  components: {
    Toggle,
    Slider,
    Slider2,
    InputText
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
        { key: "title_year", label: "Anno", sortable: true },
        { key: "director_name", label: "Regista" },
        { key: "duration", label: "Durata" },
        { key: "imdb_score", label: "Voto", filtrable: false },
        { key: "movie_imdb_link", label: "IMDB" }
      ],
      fieldsFiltrable: [
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
      genresLabel: Labels.genresLabel,
      yearLabel: Labels.yearLabel,
      budgetLabel: Labels.budgetLabel,
      grossLabel: Labels.grossLabel,
      ratingLabel: Labels.ratingLabel,
      durationLabel: Labels.durationLabel,
      criticLabel: Labels.criticLabel,
      actors: {}
    };
  },
  computed: {
    sortOptions() {
      // Create an options list from our fields
      return this.fieldsFiltrable
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
    },
    onSliderUpdating(message) {
      var minField = message.minField;
      var maxField = message.maxField;
      if (message.selectedMax == message.selectedMin && message.selectedMax == 0) {
        delete this.request[minField];
        delete this.request[maxField];
      } else {
        this.request[minField] = message.selectedMin;
        this.request[maxField] = message.selectedMax;
      }
      this.getMovies();
    },
    onActorUpdating(message) {
      if (message.newValue === "") {
        delete this.actors[message.id];
      } else {
        this.actors[message.id] = message.newValue;
      }

      var arrayActors = Object.values(this.actors);

      if (arrayActors.length == 0) {
        delete this.request["actors"];
      } else {
        this.request["actors"] = arrayActors;
      }
      this.getMovies();
    },

    onDirectorUpdating(message) {
      if (message.newValue === "") {
        delete this.request["director_name"];
      } else {
        this.request["director_name"] = message.newValue;
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
.btn-secondary {
  background-color: darkred !important;
}
.pagination .page-item.active .page-link {
  background-color: darkred !important;
  color: goldenrod !important;
}
.input-group > .custom-select:not(:last-child),
.input-group > .form-control:not(:last-child) {
  background: rgba(255, 215, 0, 0.1) !important;
}
.custom-control-label::before,
.custom-file-label,
.custom-select {
  background: rgba(255, 215, 0, 0.1) !important;
}
.input-group > .custom-select:not(:last-child):focus,
.input-group > .form-control:not(:last-child):focus {
  -webkit-box-shadow: inset 0 0 0 0.2rem rgba(255, 215, 0, 0.3) !important;
  box-shadow: inset 0 0 0 0.2rem rgba(255, 215, 0, 0.3) !important;
}
.custom-control-label::before,
.custom-file-label,
.custom-select:focus {
  -webkit-box-shadow: 0 0 0 0.2rem rgba(255, 215, 0, 0.3) !important;
  box-shadow: inset 0 0 0 0.2rem rgba(255, 215, 0, 0.3) !important;
}
.table .thead-dark th {
  background-color: darkred !important;
  border-color: darkred !important;
}
.table-striped tbody tr:nth-of-type(odd) {
  background-color: rgba(255, 215, 0, 0.1) !important;
}
.table-striped tbody tr:nth-of-type(odd):focus,
.table-striped tbody tr:nth-of-type(even):focus {
  background-color: rgba(255, 215, 0, 0.25) !important;
}
.form-control {
  background-color: rgba(255, 215, 0, 0.25) !important;
}
.form-control:focus {
  -webkit-box-shadow: 0 0 0 0.2rem rgba(255, 215, 0, 0.3) !important;
  box-shadow: inset 0 0 0 0.2rem rgba(255, 215, 0, 0.3) !important;
}
.v-list__tile__title {
  color: darkred !important;
  font-weight: bold !important;
}
.v-navigation-drawer--temporary:not(.v-navigation-drawer--close),
.v-navigation-drawer--is-mobile:not(.v-navigation-drawer--close) {
  width: 400px !important;
}
</style>