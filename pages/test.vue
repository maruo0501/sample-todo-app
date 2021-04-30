<template>
  <div>
    <Test v-bind:message="myMessage"></Test>
  </div>
</template>
<script>
import Test from "@/components/Test"
export default {
  components: {
    Test,
  },
  data() {
    return {
      myMessage: "Hello, Test!"
    }
  },
}
</script>