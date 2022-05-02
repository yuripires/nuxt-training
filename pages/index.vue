<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="logo py-4 d-flex justify-center">
        <TesteImage />
      </v-card>
      <v-card>
        <v-card-title class="headline">
          Welcome to the Gundam template
        </v-card-title>
        <v-card-text>
          <p>
            For more information on Gundam, check out the
            <a
              href="https://gundam.fandom.com/wiki/Mobile_Suit_Gundam_IRON-BLOODED_ORPHANS"
              target="_blank"
              rel="noopener noreferrer"
            >
              Wiki </a>.
          </p>
          <p>
            If you have questions, please join the official
            <a
              href="https://chat.vuetifyjs.com/"
              target="_blank"
              rel="noopener noreferrer"
              title="chat"
            >
              discord </a>.
          </p>
          <p>
            Find a bug? Report it on the github
            <a
              href="https://github.com/vuetifyjs/vuetify/issues"
              target="_blank"
              rel="noopener noreferrer"
              title="contribute"
            >
              issue board </a>.
          </p>
          <p>
            Thank you for developing with Vuetify and I look forward to bringing
            more exciting features in the future.
          </p>
          <div class="text-xs-right">
            <em><small>&mdash; John Leider </small></em>
          </div>
          <a
            href="https://nuxtjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nuxt Documentation
          </a>
          <a
            href="https://github.com/nuxt/nuxt.js"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nuxt GitHub
          </a>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="red" nuxt to="/members/join-us">
            Join Us 
          </v-btn>
          <v-btn color="primary" nuxt to="/members">
            Members
          </v-btn>
          <v-btn color="primary" nuxt to="/find-your-gundam">
            Find your Gundam
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default { name: 'IndexPage' };
</script>
