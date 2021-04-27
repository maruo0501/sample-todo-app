// 状態管理したい要素に名前をつけて、stateとしてexportする
export const state = () => ({
  count: 0
})
export const getters = {
  getCount: (state) => {
    return state.count
  },
}

// 状態を変更する処理は mutationとしてexportする
export const mutations = {
  increment(state) {
    state.count++
  },
  decrement(state) {
    state.count--
  }
}

// 実際に各コンポーネントから呼び出す処理をactionとしてexportする
export const actions = {
}