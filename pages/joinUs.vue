<template>
<div>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            v-model.lazy="userData.firstName"
            :rules="nameRules"
            :counter="10"
            label="First name"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            v-model="userData.lastName"
            :counter="10"
            :rules="nameRules"
            label="Last name"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            v-model="userData.email"
            label="E-mail"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-btn @click="addMember">Submit</v-btn>
    </v-container>
  </v-form>
  <li v-for="user in userInformation" :key="user.id">
      {{user.firstName}} {{user.lastName}}
    </li>
    </div>
</template>

<script>
export default {
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
      userInformation: []
    }
  },
  methods: {
    addMember () {
      this.userData.id = Date.now()
      console.log(this.userData.id)
      console.log(this.userData.firstName)
      console.log(this.userData.lastName)
      console.log(this.userData.email)
      const userData = this.userData
      this.userInformation.push(userData)
      console.log(this.userInformation)
      console.log(this.userData)
    }
  },
  name: 'InspirePage'
}
</script>
