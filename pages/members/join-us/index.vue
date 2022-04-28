<template>
  <div>
    <!-- <v-form ref="formUser" v-model="valid"> -->
    <v-form ref="formUser" @submit.prevent="addUser">
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              v-model.lazy="userData.firstName"
              :rules="nameRules"
              :counter="10"
              label="First name"
              required
            />
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              v-model="userData.lastName"
              :counter="10"
              :rules="nameRules"
              label="Last name"
              required
            />
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              v-model="userData.email"
              label="E-mail"
              :rules="emailRules"
              required
            />
          </v-col>
        </v-row>
        <v-btn type="submit" @keyup.enter="addUser">
          Submit
        </v-btn>
        <v-btn color="primary" nuxt to="/members"> 
          See our Members 
        </v-btn>
        <v-btn color="primary" nuxt to="/"> 
          Go to the front page
        </v-btn>
      </v-container>
    </v-form>
  </div>
</template>

<script>
export default {
  name: 'InspirePage',
  data() {
    return {
      userData: {
        firstName: '',

        lastName: '',

        email: '',

        id: ''
      },
      nameRules: [
        (value) => !!value || 'Name is required',
        (v) => v.length <= 10 || 'Name must be less than 10 characters',
        (v) => v.length > 1 || 'Minimun lenght is 2'
      ],
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
      userInformation: []
    };
  },
  methods: {
    addUser() {
      if (this.$refs.formUser.validate()) {
        this.userData.id = Date.now() - Math.random();
        this.$store.dispatch('setUser', this.userData);
      }
    }
  }
};
</script>
