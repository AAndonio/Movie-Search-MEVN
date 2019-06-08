<template>
<b-container fluid style="padding: 0 0;">
    <b-row align-h="end" style="padding: 40px 65px 0px 65px">
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

     <b-row align-h="center">
        <b-col  md="5" class="my-1">
         
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
export default {
    
}
</script>

