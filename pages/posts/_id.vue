<template>
<div>
  <h1>記事個別ページ{{ post.id }}</h1>
  <h2>{{ post.title }}</h2>
  <p>{{ post.body}}</p>
</div>
</template>

<script>
import axios from 'axios';

export default {
  async asyncData(context) {
    const response = await
    axios.get('https://jsonplaceholder.typicode.com/posts/' + context.params.id)
    return {
      post: response.data,
      title: "個別データ"
    }
  },
  head() {
    return {
      title: this.title
    }
  }
  // asyncData() {
  //   return {
  //     title: "個別データ"
  //   }
  // },
  // head(){
  //   return {
  //     title: this.title
  //   }
  // },
  // data(){
  //   return {
  //     post: {},
  //   }
  // },
  // mounted(){
  //   axios.get('https://jsonplaceholder.typicode.com/posts/' + this.$route.params.id)
  //         .then(response => this.post = response.data);
  // }
}
</script>