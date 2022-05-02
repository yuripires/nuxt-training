<template>
  <v-row justify="center" align="center">
    <v-card>
      <h1 style="text-align:center">
        Here are our Gundams
      </h1>
      <div v-for="gundam in gundams" :key="gundam.id">
        <list-items :link="gundam.link" :name="gundam.name" :image="gundam.image" />
      </div>
      <v-col class="mt-2">
        <v-btn color="primary" nuxt to="/"> 
          Go to the front page
        </v-btn>
      </v-col>
    </v-card>
  </v-row>
</template>

<script>
import gundamsDb from "../../gundamData.json";
import listItems from '~/components/listItems.vue';

export default {
  components: { listItems },
  data() {
    return {
      gundams: gundamsDb
    };
  }
};
</script>
