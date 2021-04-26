<template>
  <h1>記事一覧: {{ this.$route.params.category }}/{{ this.$route.params.article }}</h1>
</template>
<script>
export default {
  head() {
    return {
      title: "article"
    }
  },
}
</script>