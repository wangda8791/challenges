<template>
  <section>
    <p class="page-container">
      404 page not found
    </p>
    <router-link :to="{ name: 'book-list' }">
      Go Home
    </router-link>
  </section>
</template>

<style lang="scss" scoped>
  .page-container {
    font-size: 20px;
    text-align: center;
    color: rgb(192, 204, 218);
  }
</style>