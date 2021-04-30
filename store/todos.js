export const state = () => ({
  todos: []
})
export const getters = {
  getTodo: (state) => {
    return state.todos
  }
}
export const mutations = {
  add(state, text) {
    state.todos.push({
      text: text,
    })
  },
  remove(state, { todo }) {
    state.todos.splice(state.todos.indexOf(todo), 1)
  },
}