<template>
  <section v-if="info">
    Comment
  </section>
</template>

<script>
export default {
  name: 'Comment',
  props: {
    info: {
      type: Object,
      required: true
    }
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
