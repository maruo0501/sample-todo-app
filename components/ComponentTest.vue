<template>
  <div class="component">
    <p>{{message}}</p>
  </div>
</template>
<script>
export default {
  // プロパティ定義
  props: {
    message: {
      type: String,
      default: "こんにちは"
    }
  }
}
</script>