<template>
  <v-row justify="center" align="center">
    <v-card>
      <h1 style="text-align:center">
        Here are our Gundams
      </h1>
      <v-text-field v-model="search" class="search-wrapper panel-heading col-sm-12" placeholder="Search" />
      <ul v-for="gundam in filteredProducts" :key="gundam.id">
        <a :href="gundam.link" target="_blank"><h3>{{ gundam.name }} </h3></a>
      </ul>
      <v-col class="mt-2">
        <v-btn color="primary" nuxt to="/"> 
          Go to the front page
        </v-btn>
      </v-col>
    </v-card>
  </v-row>
</template>

<script>
import gundamsDb from "../../../gundamData.json";

export default {
  data() {
    return {
      search  : '',
      gundams : gundamsDb
    };
  },
  computed: {
    filteredProducts() {
      return this.gundams.filter(p => {
        // return true if the product should be visible

        // in this example we just check if the search string
        // is a substring of the product name (case insensitive)
        return p.name.toLowerCase().indexOf(this.search.toLowerCase()) !== -1;
      });
    }
  }
};
</script>
