<template>
  <v-app dark>
    <v-main>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer
      :absolute="!fixed"
      app
      color="white"
      class="pa-8 border-solid--top"
      style="overflow:hidden"
    >
      <v-row cols="12">
        <v-col md="3" sm="3" xs="3">
          <center>
            <div class="emoji" :class="$store.state.countJoke > 0 ? 'colored' : ''">
              <div class="eyes">
                <div class="eye">
                  <div class="iris" />
                </div>
                <div class="eye">
                  <div class="iris" />
                </div>
              </div>
              <div class="mouth ungry" />
            </div>
          </center>
        </v-col>
        <v-col md="3" sm="3" xs="3">
          <center>
            <div class="emoji" :class="$store.state.countJoke >= 2 ? 'colored' : ''">
              <div class="eyes">
                <div class="eye">
                  <div class="iris" />
                </div>
                <div class="eye">
                  <div class="iris" />
                </div>
              </div>
              <div class="mouth neutral" />
            </div>
          </center>
        </v-col>
        <v-col md="3" sm="3" xs="3">
          <center>
            <div
              class="emoji"
              :class="$store.state.countJoke >= 3 ? 'colored' : ''"
            >
              <div class="eyes">
                <div class="eye">
                  <div class="iris" />
                </div>
                <div class="eye">
                  <div class="iris" />
                </div>
              </div>
              <div class="shy-left" :class="$store.state.countJoke >= 3 ? 'colored-shy' : ''" />
              <div class="mouth neutral" />
              <div class="shy-right" :class="$store.state.countJoke >= 3 ? 'colored-shy' : ''" />
            </div>
          </center>
        </v-col>
        <v-col md="3" sm="3" xs="3">
          <center>
            <div class="emoji" :class="$store.state.countJoke >= 4 ? 'colored' : ''">
              <div class="eyes">
                <div class="eye">
                  <div class="iris" />
                </div>
                <div class="eye">
                  <div class="iris" />
                </div>
              </div>
              <div class="mouth happy" />
            </div>
          </center>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      title: 'page laugh'
    }
  }
}
</script>

<style lang="css" scoped>

.border-solid--top {
  border-top: 2px solid #eb3361 !important;
}
#app {
  background: rgba(171,0,145,1);
  background: -moz-linear-gradient(top, rgba(171,0,145,1) 0%, rgba(171,0,145,1) 31%, rgba(175,58,111,1) 66%, rgba(176,79,99,1) 79%, rgba(235,0,59,1) 100%);
  background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(171,0,145,1)), color-stop(31%, rgba(171,0,145,1)), color-stop(66%, rgba(175,58,111,1)), color-stop(79%, rgba(176,79,99,1)), color-stop(100%, rgba(235,0,59,1)));
  background: -webkit-linear-gradient(top, rgba(171,0,145,1) 0%, rgba(171,0,145,1) 31%, rgba(175,58,111,1) 66%, rgba(176,79,99,1) 79%, rgba(235,0,59,1) 100%);
  background: -o-linear-gradient(top, rgba(171,0,145,1) 0%, rgba(171,0,145,1) 31%, rgba(175,58,111,1) 66%, rgba(176,79,99,1) 79%, rgba(235,0,59,1) 100%);
  background: -ms-linear-gradient(top, rgba(171,0,145,1) 0%, rgba(171,0,145,1) 31%, rgba(175,58,111,1) 66%, rgba(176,79,99,1) 79%, rgba(235,0,59,1) 100%);
  background: linear-gradient(to bottom, rgba(171,0,145,1) 0%, rgba(171,0,145,1) 31%, rgba(175,58,111,1) 66%, rgba(176,79,99,1) 79%, rgba(235,0,59,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ab0091', endColorstr='#eb003b', GradientType=0 );
  width: 100%;
}

.emoji {
  width: 50px;
  height: 50px;
  background-color: #F5F9E9;
  border: 3px solid #cccccc;
}
.mouth {
  width: 20px;
}
.eyes {
  margin-left: 0;
  margin-bottom: 10px;
}
.eye {
  width: 15px;
  height: 15px;
  margin-left: 5px;
}
.iris {
  width: 5px;
  height: 5px;
}
.neutral {
  margin-bottom: 168px;
}
.shy-left {
  width: 12px;
  height: 12px;
  left: 0px;
  background-color: #cccccc;
  border: 1px solid #cccccc;
}
.shy-right {
  width: 12px;
  height: 12px;
  right: 0px;
  background-color: #cccccc;
  border: 1px solid #cccccc;
}
.happy {
  margin-bottom: 165px;
  margin-left: 2px;
}
.colored {
  background-color: #ffca4f;
  border: 3px solid orange;
}

.colored-shy {
  background-color: #EF8C00;
  border: 1px solid orange;
}
</style>
