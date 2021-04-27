export const state = () => ({
  count: 0
})

export const mutations = {
  increment (state) {
    console.log('Call the mutations increment')
    state.count++
  },
  decrement (state) {
    console.log('Call the mutations decrement')
    state.count--
  }
}