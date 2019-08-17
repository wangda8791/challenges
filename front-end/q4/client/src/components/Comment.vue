<template>
  <section>
    Comment
  </section>
</template>

<script>
export default {
  name: 'Comment',
  props:{
    comment: Object
  },
}
</script>

<style lang="scss" scoped>
section {
  background-color: $comment-bgcolor;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 5px;
}
</style>
