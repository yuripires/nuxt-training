<template>
  <v-row justify="center" align="center">
    <v-card>
      <v-card class="logo py-4 d-flex justify-center">
        <TesteImage />
      </v-card>
      <div v-if="!userInformation || !userInformation.length">
        <h1>We are currently without members, why dont you join us?</h1>
      </div>
      <div v-else>
        <h1> Our current members are:</h1>
      </div>
      <v-list v-for="user in userInformation" :key="user.id">
        <p class="red darken-4--text font-weight-bold ">
          Name: {{ user.firstName }} {{ user.lastName }} 
        </p>
        <p class="blue darken-4--text font-weight-bold">
          Email: {{ user.email }} 
        </p>
      </v-list>
      <v-col class="mt-2">
        <v-btn color="red" nuxt to="/members/join-us"> 
          Join Us
        </v-btn>
        <v-btn color="primary" nuxt to="/"> 
          Go to the front page
        </v-btn>
      </v-col>
    </v-card>
  </v-row>
</template>

<script>
export default { 
  name: 'DummiPage',

  computed: {
    userInformation() {
      return this.$store.getters.currentUsers;
    }
  }
};
</script>
