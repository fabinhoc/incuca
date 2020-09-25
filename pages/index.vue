<template>
  <v-row justify="center" align="center">
    <v-col
      cols="12"
      sm="12"
      md="8"
      class="text-center m-0 m-auto mt-10"
      justify="center"
      align="center"
    >
      <h1 class="text-h2 white--text text-uppercase">
        Tell me a joke!
      </h1>
      <br>
      <center>
        <div class="emoji">
          <div class="eyes">
            <div class="eye">
              <div class="iris" />
            </div>
            <div class="eye">
              <div class="iris" />
            </div>
          </div>
          <!-- <div class="shy-left" /> -->
          <div class="mouth neutral" />
          <!-- <div class="shy-right" /> -->
        </div>
      </center>
      <br><br>
      <v-btn color="accent" width="250" :to="'/start'" large>
        Play now!
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>

export default {
  components: {
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>
