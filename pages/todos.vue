<template>
  <section class="container">
    <h1>Todoリスト</h1>
    <div class="addArea">
      <input type="text" name="addName" v-model="text" @focus="set_flg" placeholder="タスクを入力してください">
      <button id="addButton" v-on:click="add" class="button button--green">追加</button>
      <button id="findButton" v-on:click="find" class="button button--green">検索</button>
    </div>
    <li v-for="todo in display_todos" v-bind:key=todo.id> 
      {{todo.text.text}}
      <button v-on:click="remove(todo)">削除</button> 
    </li> 
  </section>
</template>
<script>
export default {
  data() {
    return {
      text: '',
      find_flg: false
    }
  },
  computed: {
    todos() {
      return this.$store.getters['todos/getTodo']
    },
    display_todos() {
      if (this.find_flg) {
        let arr = []
        let data = this.todos
        data.forEach(element => {
          if (element.text.text == this.text) {
            arr.push(element)
          }
        })
        return arr;
      } else {
        return this.todos;
      }
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
    },
    find() {
      this.find_flg = true;
    },
    // 入力欄押されたら呼ばれる
    // find_flgがtrueの場合(検索ボタンが押されてたら)、
    // find_flgはfalse(検索終了)になり入力欄空白にする
    set_flg() {
      if(this.find_flg) {
        this.find_flg = false;
        this.text = '';
      }
    },
  }
}
</script>