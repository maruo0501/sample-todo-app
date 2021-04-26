<template>
  <main>
    <h1>About Page</h1>
    <!-- <nuxt-link to="/">Home Page</nuxt-link> -->
  </main>
</template>
<script>
export default {
  head() {
    return {
      title: "About Page",
      meta: [
        {hid: 'descrition', name: "descrition", content: "これはAboutページです"}
      ]
    }
  },
}
</script>