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
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="red" nuxt to="/members/join-us">
            Join Us 
          </v-btn>
          <v-btn color="primary" nuxt to="/members">
            Members
          </v-btn>
          <v-btn color="primary" nuxt to="/gundams">
            See our Mobile Suits
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default { name: 'IndexPage' };
</script>
