export const state = () => ({
  // todos: [
  //   {content: "テスト", created: '2020-04-30 17:00', state: "作業前"},
  //   {content: "コーディング", created: '2020-04-30 16:00', state: "作業中"},
  //   {content: "環境構築", created: '2020-04-30 15:30', state: "完了"}
  // ]
  todos: []
})
export const mutations = {
  add(state, text) {
    state.todos.push({
      text: text,
      done: false,
      id: state.todos.length + 1,
    })
  },
  remove(state, { todo }) {
    state.todos.splice(state.todos.indexOf(todo), 1)
  },
}