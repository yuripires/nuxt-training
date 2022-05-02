<template>
  <div>
    <!-- <v-form ref="formUser" v-model="valid"> -->
    <v-form ref="formUser" @submit.prevent="addUser">
      <div class="text-center">
        <v-dialog
          v-model="dialog"
          width="500"
        >
          <v-card>
            <v-card-title class="text-h5 blue lighten-2">
              Congratulations
            </v-card-title>

            <v-card-text>
              Congratulations, You are now a member
            </v-card-text>

            <v-divider />
            <v-card-actions>
              <v-spacer />
              <v-btn
                color="primary"
                text
                @click="dialog = false"
              >
                OK
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              v-model.lazy="userData.firstName"
              :rules="nameRules"
              :counter="15"
              label="First name"
              required
            />
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              v-model="userData.lastName"
              :counter="15"
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
        <v-col class="mt-2">
          <v-btn type="submit" color="red" @keyup.enter="addUser">
            Submit
          </v-btn>
          <v-btn color="primary" nuxt to="/members"> 
            See our Members 
          </v-btn>
          <v-btn color="primary" nuxt to="/"> 
            Go to the front page
          </v-btn>
        </v-col>
      </v-container>
    </v-form>
  </div>
</template>

<script type="text/javascript" src="./script.js" />

<!--<style scoped type="text/css" src="./style.css">

</style>-->
