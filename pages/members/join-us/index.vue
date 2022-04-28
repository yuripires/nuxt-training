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
              :rules ="emailRules"
              required
            />
          </v-col>
        </v-row>
        <v-btn @keyup.enter="addUser" type="submit">
          Submit
        </v-btn>
      </v-container>
    </v-form>
    <li v-for="user in userInformation" :key="user.id">
      {{ user.firstName }} {{ user.lastName }} {{user.email}}
    </li>
  </div>
</template>

<script>
export default {
  name: 'InspirePage',
  data () {
    return {
      userData: {
        firstName: '',
        lastName: '',
        email: '',
        id: ''
      },
      nameRules: [
        value => !!value || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters',
        v => v.length > 1 || 'Minimun lenght is 2'
      ],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
      userInformation: []
    }
  },
  methods: {
    addUser () {
      console.log('validate', this.$refs.formUser.validate())
      if (this.$refs.formUser.validate()) {
        this.userData.id = Date.now()
        const userData = { ...this.userData }
        console.log('userData', userData)
        this.userInformation.push(userData)
      }
    }
  }
}
</script>
