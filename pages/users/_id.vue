<template>
  <div>
    <h1>ユーザー個別</h1>
    <h2>{{user.username}}</h2>
    <h3>{{user.email}}</h3>
  </div>
</template>
<script>
// import axios from 'axios';

export default {
  async asyncData(context) {
    const user = await context.$axios.$get('https://jsonplaceholder.typicode.com/users/' + context.params.id)
    return {user: user}
  }

  // data() {
  //   return {
  //     user: {}
  //   }
  // },
  // mounted() {
  //   axios.get('https://jsonplaceholder.typicode.com/users/' + this.$route.params.id)
  //     .then(response => this.user = response.data)
  // }
}
</script>