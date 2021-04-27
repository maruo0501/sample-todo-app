<template>
  <div>
    <input type="button" value="-" v-on:click="decrement">
    {{count}}
    <input type="button" value="+" v-on:click="increment">
  </div>
</template>
<script>
export default {
  computed: {
    count() {
      return this.$store.getters['count/getCount']
    }
  },
  methods: {
    increment() {
      this.$store.commit('count/increment')
    },
    decrement() {
      this.$store.commit('count/decrement')
    } 
  }
}
</script>