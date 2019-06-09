<template>
  <b-container fluid style="padding: 0 0;">
    
    <b-row align-h="end" style="padding: 40px 65px 0px 65px">
      <b-col md="12" class="my-1" style="padding-top: 30px">
        <p>Voglio il numero di apparizioni di attori che hanno recitato in film di genere</p>
      </b-col>
    </b-row>
        <b-row align-h="end" style="padding: 0px 65px 0px 65px">
      <b-col md="12" class="my-1" style="padding-top: 30px">
        <b-form-select v-model="genreSelected" :options="genresLabel" v-on:change="getCastAppareances"></b-form-select>
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
        <template slot="_id" slot-scope="row" href="movie_imdb_link">{{ row.value }}</template>
        <template slot="title_year" slot-scope="row">{{ row.value }}</template>

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
import { Labels } from "../assets/labels";

export default {


    data() {
      return {
        items: [],
        fields: [
        { key: "_id",label: "Attore"},
        { key: "total", label: "Apparizioni"}
      ],
        numberOfMovies: null,
        genreSelected: null,
        genresLabel: Labels.genresLabel,
        castLabel: Labels.castLabel,
        totalRows: 1,
        currentPage: 1,
        perPage: 10,
      }
    }, 
    methods: {
      async getCastAppareances() {
        var response = await MovieService.getAppareances(this.numberOfMovies, this.genreSelected);
        this.items = response.data;
        this.totalRows = this.items.length;
      },
    }
  }
</script>
