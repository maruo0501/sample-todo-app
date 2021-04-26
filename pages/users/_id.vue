<template>
  <h1>ユーザID:{{user.name}}</h1>
</template>
<script>
export default {
  head() {
    return {
      title: this.user.name,
    }
  },
  data() {
    return {
      id: this.$route.params.id,
      users: [
        {id: 1, name: "Taro"},
        {id: 2, name: "Hana"},
        {id: 3, name: "Kota"}
      ]
    }
  },
  computed: {
    user() {
      return this.users.find(user => user.id == this.id);
    }
  }
}
</script>