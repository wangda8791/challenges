<template>
  <section v-if="info">
    <div class="book-info">
      <div class="title">
        <router-link :to="{ name: 'book-detail', params: { slug:info.slug } }">
          <h3>{{ info.seq }}. {{ info.title }}</h3>
        </router-link>
        <span class="rate">({{ info.rating }}/10)</span>
      </div>
      <div class="author">
        {{ info.author }}
      </div>

      <div class="synopsis">
        <p>{{ info.synopsis | ellipse(200) }}</p>
      </div>

      <div class="upvote">
        <div
          v-if="info.upvoted"
          class="upvoted"
        >
          Upvoted
        </div>
        <div v-else>
          Upvote
        </div>
        Upvoted {{ info.upvotes }} times
      </div>
    </div>
    
    <router-link :to="{ name: 'book-detail', params: { slug:info.slug } }">
      <img :src="info.cover">
    </router-link>
  </section>
</template>

<script>
export default {
  name: 'Book',
  filters: {
    ellipse(value, length) {
      return value.substring(0, length) + "...";
    }
  },
  props: {
    info: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
section {
  padding: 20px;
  clear: both;
  overflow: auto;
}
.book-info {
  float: left;
  text-align: left;
  width: calc(100% - 140px);
  .author {
    font-style: italic;
  }
}
img {
  float: right;
  width: 100px;
  border-radius: 10px;
}
.title {
  h3 {
    display: inline-block;
    color: $yellow-dark;
    margin-right: 6px;
  }
}
.synopsis {
  margin-top: 1.5em;
}
</style>
