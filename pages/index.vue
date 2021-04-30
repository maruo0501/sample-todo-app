<template>
  <div class="page">
    <component v-bind:message="myMessage"></component>
  </div>
</template>

<script>
import Component from '@/components/Component.vue';
export default {
  data() {
    return {
      myMessage: "Hello"
    }
  },
  components: {
    Component: Component,
  },
}
</script>