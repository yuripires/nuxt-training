<template>
  <v-card>
    <li>
      <p>{{ name }} </p> 
      <v-img :src="image" max-width="800px" />
    </li>
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
    }
  }
};
</script>