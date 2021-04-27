<template>
  <div>
    <h1>ユーザー一覧</h1>
    <ul>
      <li v-for="user in users" v-bind:key=user.id>{{user.name}}</li>
    </ul>
  </div>
</template>
<script>
// import axios from 'axios';

export default {
  async asyncData(context) {
    const users = await context.$axios.$get('https://jsonplaceholder.typicode.com/users/')
    return {users: users}
  }
  // data() {
  //   return {
  //     users: []
  //   }
  // },
  // mounted() {
  //   axios.get('https://jsonplaceholder.typicode.com/users/').then(response => this.users = response.data)
  // }
}
</script>