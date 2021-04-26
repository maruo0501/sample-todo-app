<template>
  <h1>カテゴリー：{{ this.$route.params.category }}</h1>
</template>
<script>
export default {
  head() {
    return {
      title: 'category'
    }
  }
}
</script>