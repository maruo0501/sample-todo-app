<template>
  <section class="container">
    <h1>Todoリスト</h1>
    <div class="addArea">
      <input type="text" name="addName" v-model="text" placeholder="タスクを入力してください">
      <button id="addButton" v-on:click="add" class="button button--green">追加</button>
    </div>
    <div class="Filter">
      <button class="button button--gray is-active">全て</button>
      <button class="button button--gray">作業前</button>
      <button class="button button--gray">作業中</button>
      <button class="button button--gray">完了</button>
    </div>
    <table class="Lists">
      <thead>
        <tr>
          <th>タスク</th>
          <th>登録日時</th>
          <th>状態</th>
        </tr>
      </thead>
      <tbody>
        <!-- <li v-for="todo in todos" :key="todo.id">
      <input :checked="todo.done" @change="toggle(todo)" type="checkbox" />
      <span :class="{ done: todo.done }">{{ todo.text }}</span>
      <button @click="removeTodo(todo)">remove</button>
    </li> -->
        <li v-for="todo in todos" v-bind:key=todo.id> 
          {{todo.text.text}}
          <button v-on:click="remove(todo)">削除</button> 
        </li> 
        <!-- <tr v-for="todo in todos" v-bind:key=todo.id>
          <td>{{todo.text}}</td>
          <td>{{todo}}</td>
          <td><button class="button button--yet">{{todo.state}}</button></td>
          <td><button class="button button--delete">削除</button></td>
        </tr>  -->
      </tbody>
    </table>
  </section>
</template>
<script>
export default {
  computed: {
    todos() {
      return this.$store.state.todos.todos
    }
  },
  methods: {
    add() {
      if (this.text != "") {
        this.$store.commit('todos/add', {text: this.text});
        this.text = ""
      }
    },
    remove(todo) {
      this.$store.commit('todos/remove', todo)
    }
  }
}
</script>