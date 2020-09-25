<template>
  <v-row justify="center" align="center">
    <v-col
      cols="12"
      sm="12"
      md="8"
      class="text-center m-0 m-auto"
      justify="center"
      align="center"
    >
      <h1 class="text-h2 white--text text-uppercase">
        Start by telling a geek joke to change the feeling
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
          <div class="mouth" :class="mouthReaction" />
          <!-- <div class="shy-right" /> -->
        </div>
      </center>
      <br><br>
      <v-btn :to="'/joke'" color="accent" width="250" large>
        Start
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>

export default {
  data () {
    return {
      mouthReaction: this.$store.state.mouthReaction
    }
  },
  created () {
    this.changeFace()
  },
  methods: {
    changeFace () {
      // use mutation to change mouthReaction value
      this.$store.commit('SET_MOUTH_REACTION', 'ungry')
      this.mouthReaction = this.$store.state.mouthReaction
    }
  },
  head: {
    title: 'Start',
    meta: [
      {
        hid: 'Start',
        name: 'description',
        content: 'Start to play and see the best geek jokes and see the face reaction'
      }
    ]
  }
}
</script>
