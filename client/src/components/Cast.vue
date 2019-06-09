<template>
  <b-container fluid style="padding: 0 0;">
    
    <b-row align-h="end" style="padding: 40px 65px 0px 65px">
      <b-col md="3" class="my-1" style="padding-top: 70px"> Cerca gli attori comparsi in più film di un determinato genere</b-col>
      <b-col md="3" class="my-1" style="padding-top: 30px">
        <p>Selezionare numero di film</p>
        <b-form-select
          v-model="toptenTypeSelected"
          :options="toptenTypeLabel"
          v-on:change="getTopTen"
        ></b-form-select>
      </b-col>
      <b-col md="3" class="my-1" style="padding-top: 30px">
        <p>Selezionare il genere</p>
        <b-form-select v-model="genreSelected" :options="genresLabel" v-on:change="getTopTen"></b-form-select>
      </b-col>
      <b-col md="3" class="my-1" style="padding-top: 30px"></b-col>
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
export default {};
</script>

