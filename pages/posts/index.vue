<template>
  <div>
    <h1>記事一覧</h1>
    <ul>
      <li v-for="post in posts" v-bind:key=post.id>
        <NuxtLink :to="'/posts/' + post.id">{{post.title}}</NuxtLink>
      </li>
      <li v-for="user in users" v-bind:key=user.id>
        {{user.name}}
      </li>
    </ul>
  </div>
  
</template>
<script>
// import axios from 'axios';

export default {
  async asyncData(context) {
  // const responsePost = await axios.get('https://jsonplaceholder.typicode.com/posts/')
  // const responseUser = await axios.get('https://jsonplaceholder.typicode.com/users/')
  // return { posts: responsePost.data, users:responseUser.data}
  // },
  const posts = await
  context.$axios.$get('/posts/')
  return {posts}
  },
  head() {
    return {
      title: "記事一覧"
    }
  },
}
</script>