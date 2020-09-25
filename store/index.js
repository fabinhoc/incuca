export const state = () => ({
  mouthReaction: 'neutral',
  countJoke: 0
})

export const mutations = {
  SET_MOUTH_REACTION (state, payload) {
    state.mouthReaction = payload
  },
  SET_COUNT_JOKE (state) {
    state.countJoke++
  },
  RESET_COUNT_JOKE (state) {
    state.countJoke = 0
  }
}
