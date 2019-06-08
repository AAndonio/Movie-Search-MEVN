<template>
  <b-container fluid style="padding: 0 0;">
    <b-row align-h="end" style="padding: 40px 65px 0px 65px">
      <b-col md="3" class="my-1" style="padding-top: 30px">
        <p>Selezionare tipologia top ten</p>
        <b-form-select v-model="toptenTypeSelected" :options="toptenTypeLabel" v-on:change="getTopTen"></b-form-select>
      </b-col>
      <b-col md="3" class="my-1" style="padding-top: 30px">
        <p>Selezionare il genere</p>
        <b-form-select v-model="genreSelected" :options="genresLabel" v-on:change="getTopTen"></b-form-select>
      </b-col>
      <b-col md="3" class="my-1" style="padding-top: 30px"></b-col>
    </b-row>

    <b-container v-if="toptenTypeSelected === 'imdb_score'" fluid style="padding: 50px">
      <!-- Main table element -->
      <b-table
        striped
        show-empty
        stacked="md"
        hover
        head-variant="dark"
        :items="itemsScore"
        :fields="fieldsScore"
      >
        <template slot="movie_title" slot-scope="row">{{ row.value }}</template>
        <template slot="title_year" slot-scope="row">{{ row.value }}</template>
        <template slot="director_name" slot-scope="row">{{ row.value }}</template>
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
    </b-container>

    <b-container v-if="toptenTypeSelected === 'movie_facebook_likes'" fluid style="padding: 50px">
      <!-- Main table element -->
      <b-table
        striped
        show-empty
        stacked="md"
        hover
        head-variant="dark"
        :items="itemsLikes"
        :fields="fieldsLikes"
      >
        <template slot="movie_title" slot-scope="row">{{ row.value }}</template>
        <template slot="title_year" slot-scope="row">{{ row.value }}</template>
        <template slot="movie_facebook_likes" slot-scope="row">{{ row.value }}</template>
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
    </b-container>
  </b-container>
</template>

<script>
import MovieService from "../services/MovieService";
import { Labels } from "../assets/labels";

export default {


    data() {
      return {
        itemsScore: [],
        itemsLikes: [],
        fieldsScore: [
        { key: "movie_title",label: "Titolo"},
        { key: "title_year", label: "Anno"},
        { key: "imdb_score", label: "Voto"},
        { key: "movie_imdb_link", label: "IMDB"}
      ],
        fieldsLikes: [
        { key: "movie_title",label: "Titolo"},
        { key: "title_year", label: "Anno"},
        { key: "movie_facebook_likes", label: "Like"},
        { key: "movie_imdb_link", label: "IMDB"}
      ],
        toptenTypeSelected: null,
        genreSelected: null,
        genresLabel: Labels.genresLabel,
        toptenTypeLabel: Labels.toptenTypeLabel
      }
    }, 
    methods: {
      async getTopTen() {
        var response = await MovieService.getTopTen(this.toptenTypeSelected, this.genreSelected);
        
        if(this.toptenTypeSelected === 'imdb_score'){
          this.itemsScore = response.data;
        } else {
          this.itemsLikes = response.data;
        }
      },
    }
  }
</script>

