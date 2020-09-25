<template>
  <v-row justify="center" align="center">
    <v-col
      cols="12"
      sm="12"
      md="8"
      class="text-center m-0 m-auto mt-1"
      justify="center"
      align="center"
    >
      <div style="height:80px; overflow-y:auto">
        <h5 class="text-h5 white--text text-uppercase font-weight-thin">
          {{ joke }}
        </h5>
      </div>
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
          <div :class="shy ? 'shy-left' : ''" />
          <div class="mouth" :class="mouthReaction" />
          <div :class="shy ? 'shy-right' : ''" />
        </div>
      </center>
      <v-dialog
        v-model="dialog"
        max-width="700"
        persistent
      >
        <v-card>
          <v-card-title />
          <v-card-text>
            <p class="purple--text text-uppercase text-center">
              <span class=" font-weight-regular">
                <b class="text-h3">Congratulations!</b> <br><br>
                Your mood has impoved a lot!!!
              </span>
            </p>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn
              color="green darken-1"
              text
              @click="close"
            >
              Close
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-col
        cols="12"
        sm="12"
        md="12"
        lg="12"
        xs="12"
        class="mt-1"
      >
        <v-btn color="accent" width="250" large @click="nextJoke">
          <span>Next</span>
          <v-icon size="14">
            mdi-send
          </v-icon>
        </v-btn>
      </v-col>
      <v-col cols="12" sm="12" md="12" lg="12" xs="12">
        <v-btn width="125" large @click="reset">
          <span>Try again</span>
        </v-btn>
        <v-btn width="125" :to="'/'" large @click="reset">
          <span>Go Back</span>
        </v-btn>
      </v-col>
    </v-col>
  </v-row>
</template>

<script>

export default {
  components: {
  },
  data () {
    return {
      mouthReaction: this.$store.state.mouthReaction,
      dialog: false,
      joke: '',
      shy: false,
      finished: false
    }
  },
  created () {
    this.getJoke()
    this.reset()
  },
  methods: {
    nextJoke () {
      this.$axios.get('joke/').then((response) => {
        this.joke = response.data.joke
        this.$store.commit('SET_COUNT_JOKE')

        // countJoke is responsible by count the jokes that was showed
        // For each joke the reaction feel is changed
        switch (this.$store.state.countJoke) {
          case 2:
            this.mouthReaction = 'neutral'
            break
          case 3:
            this.mouthReaction = 'neutral'
            this.shy = !this.shy
            break
          case 4:
            this.mouthReaction = 'happy'
            this.shy = !this.shy
            this.showFinished()
            this.finished = true
            break
        }

        this.$store.commit('SET_MOUTH_REACTION', this.mouthReaction)
      })
    },
    showFinished () {
      setTimeout(() => {
        this.$confetti.start()
        this.dialog = true
      }, 1000)
    },
    async getJoke () {
      await this.$axios.get('joke/').then((response) => {
        this.joke = response.data.joke
      })
    },
    close () {
      this.dialog = false
      this.$confetti.stop()
    },
    reset () {
      this.$store.commit('SET_MOUTH_REACTION', 'ungry')
      this.$store.commit('RESET_COUNT_JOKE')
      this.mouthReaction = this.$store.state.mouthReaction
      this.$confetti.stop()
    }
  },
  head: {
    title: 'Joke',
    meta: [
      {
        hid: 'Joke',
        name: 'description',
        content: 'Start to play and see the best geek jokes and see the face reaction'
      }
    ]
  }
}
</script>
