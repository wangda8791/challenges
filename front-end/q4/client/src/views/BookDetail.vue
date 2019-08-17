<template>
  <section>
    <div
      v-if="message!=''"
      class="message"
    >
      {{ message }}
      <br />
      <router-link :to="{ name: 'book-list' }">
        Go Home
      </router-link>
    </div>
    <div
      v-if="book"
      class="main" 
    >
      <div class="container">
        <div class="header">
          <h1 class="title">
            {{ book.title }}
          </h1>
          <div class="upvote">
            Upvoted {{ book.upvotes }} times
            <div 
              v-if="book.upvoted" 
              class="upvoted"
            >
              Upvoted
            </div>
            <div v-else>
              Upvote
            </div>
          </div>
          <div class="author">
            {{ book.author }}
          </div>
        </div>

        <img :src="book.cover">

        <div class="synopsis">
          <h3>Synopsis</h3>
          <p>{{ book.synopsis }}</p>
        </div>
        
        <div class="rating">
          <h4>Rating: {{ book.rating }}/10</h4>
        </div>
      </div>

      <div class="comments">
        <Comment
          v-for="comment in comments"
          :key="comment.id"
        />
        <VueEditor
          v-model="htmlForEditor"
          :editor-toolbar="customToolbar"
        />
        <a
          href="javascript:;"
          class="button"
        >
          <font-awesome-icon icon="search" />
          Add Comment
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import Comment from "../components/Comment"
import BookService from "../services/BookService"
import CommentService from "../services/CommentService"
import { VueEditor } from "vue2-editor";

export default {
  components: {
    Comment,
    VueEditor
  },
  data() {
    return {
      book: null,
      comments: [],
      message: '',
      customToolbar: [
        ["bold", "italic", "underline"],
        [{ list: "ordered" }, { list: "bullet" }],
        ["image", "code-block"]
      ],
      htmlForEditor: "",
    };
  },
  async created() {
    try {
      const book = await BookService.getBook(this.$route.params.slug);
      const comments = await CommentService.getComments(book.slug);
      this.book = book;
      this.comments = comments;
    } catch (err) {
      this.message = 'Error occured on server.'
    }
  },
}
</script>

<style lang="scss" scoped>
.container, .comments {
  padding: 0 20px 20px 20px;
  * {
    text-align: left;
  }
}
.comments {
  text-align: left;
}
.header {
  overflow: auto;
  margin-bottom: 20px;
  .title {
    color: $yellow-dark;
    display: inline-block;
    margin-bottom: 0px;
  }
}
.author {
  font-style: italic;
}
img {
  width: 240px;
  border-radius: 6px;
}
.upvote {
  float: right;
  margin-top: 20px;
  div {
    margin-right: 0px;
  }
}
a.button {
  display: inline-block;
  background-color: $yellow-light;
  color: white;
  margin-top: 10px;
  border-radius: 4px;
  padding: 4px 10px;
  font-size: 1em;
}
a.button:hover {
  background-color: $yellow-lighter;
}
</style>
