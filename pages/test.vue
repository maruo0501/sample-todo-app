<template>
  <div>
    <!-- <button @click="increment">+</button> -->
    <input type="button" value="+" v-on:click="increment">
    {{ count }}
    <!-- <button @click="decrement">-</button> -->
    <input type="button" value="-" v-on:click="decrement">
  </div>
</template>

<script>
export default {
  computed: {
    count () {
      // console.log('Call the computed count')
      return this.$store.state.test.count
    }
  },
  methods: {
    // 「+」ボタンクリック時に呼ばれる
    increment () {
      // console.log('Call the methods increment')
      // mutations の increment を呼び出す
      this.$store.commit('test/increment')
    },
    // 「-」ボタンクリック時に呼ばれる
    decrement () {
      // console.log('Call the methods decrement')
      // mutations の decrement を呼び出す
      this.$store.commit('test/decrement')
    }
  }
}
</script>