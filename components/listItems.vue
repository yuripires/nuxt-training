<template>
  <v-card>
    <ul>
      <a :href="link" target="_blank"><h2>{{ name }} </h2></a>
      <v-img :src="image" max-width="800px" />
    </ul>
  </v-card>
</template>

<script>


export default {
  props: {
    name: {
      type     : String,
      required : true
    },
    image: {
      type     : String,
      required : true
    },
    link: {
      type     : String,
      required : true
    }
  }
};
</script>