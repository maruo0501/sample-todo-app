<template>
  <div class="page">
    <ComponentTest v-bind:message="myMessage"></ComponentTest>
  </div>
</template>

<script>
import ComponentTest from '@/components/ComponentTest';
export default {
  data() {
    return {
      myMessage: "Hello, Component!!"
    }
  },
  components: {
    ComponentTest: ComponentTest,
  },
}
</script>