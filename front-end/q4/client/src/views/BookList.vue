<template>
  <section>
    <div class="main">
      <div class="container">
        <div class="header">
          <h1 class="title">
            Top books of all time
          </h1>
          <a
            href="javascript:;"
            @click="onReload"
          >Reload</a>
          <div class="search">
            <input
              ref="searchText"
              type="text"
              v-model="keyword"
              v-show="willSearch"
              @keyup.enter="search"
              @blur="willSearch=false"
            />
            <a
              href="javascript:;"
              @click="onRequestSearch"
            ><font-awesome-icon icon="search" /></a>
          </div>
        </div>
        <div class="message" v-if="pagination.total == 0">
          {{ message }}
        </div>
        <dl class="list-alt" v-else>
          <dd 
            v-for="book in booksOfPage"
            :key="book.slug"
          >
            <Book :info="book" />
          </dd>
        </dl>
      </div>
    </div>
    <Pagination
      :total="pagination.total"
      :page="pagination.page"
      :page-size="pagination.pageSize"
      @page-changed="onPageChanged"
    />
  </section>
</template>

<script>
import Book from "../components/Book"
import Pagination from "../components/Pagination"
import BookService from "../services/BookService"

export default {
  components: {
    Book,
    Pagination
  },
  data() {
    return {
      books: [],
      filtered: [],
      pagination: {
        total: 0,
        page: 1,
        pageSize: 3
      },
      willSearch: false,
      keyword: '',
      message: '',
    };
  },
  computed: {
    booksOfPage() {
      return this.getBooksOfPage(this.pagination.page, this.pagination.pageSize);
    }
  },
  async created() {
    await this.load();
  },
  methods: {
    async load() {
      try {
        const { books, meta } = await BookService.getBooks();
        this.filtered = this.books = books;
        this.pagination.total = meta.count;
        this.message = '';
      } catch (err) {
        this.message = 'Sorry, loading books are failed.'
      }
    },
    getBooksOfPage(page, pageSize) {
      return this.filtered.slice((page -  1) * pageSize, Math.min(this.books.length, page * pageSize));
    },
    search() {
      const keyword = this.keyword.toLowerCase();
      this.filtered = this.books.filter(book => {
        if (book.title.toLowerCase().indexOf(keyword) != -1 || 
          book.synopsis.toLowerCase().indexOf(keyword) != -1) return true;
        return false;
      }).map((book, idx) => {
        book.seq = idx + 1;
        return book;
      });
      this.pagination.total = this.filtered.length;
      this.pagination.page = 1;
      if (this.pagination.total == 0) {
        this.message = 'Sorry, no books exist.';
      }
      
      this.keyword = "";
      this.willSearch = false;
    },
    onPageChanged(pg) {
      this.pagination.page = pg;
    },
    onRequestSearch() {
      if (this.willSearch) {
        this.search();
      } else {
        this.keyword = "";
        this.willSearch = true;
        this.$nextTick(() => {
          this.$refs.searchText.focus();
        });
      }
    },
    async onReload() {
      await this.load();
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  background-color: $info-bgcolor;
}
h1 {
  margin: 0px;
  padding: 14px 20px;
  font-weight: 500;
  color: $yellow-light;
}
dl.list-alt {
  background-color: $info-bgcolor;
  margin: 0;
  dd {
    margin: 0;
  }
  dd:nth-child(odd) {
    background-color: white;
  }
}
.header {
  position: relative;
}
.header > a {
  position: absolute;
  left: 18px;
  top: 18px;
}
.search {
  position: absolute;
  top: 15px;
  right: 10px;
  color: $yellow-light;
  input {
    border: 1px solid $yellow-light;
    padding-left: 3px;
    border-radius: 2px;
    height: 16px;
    font-size: 1em;
    color: $text-color;
  }
  input:focus{
    outline: none;
  }
  a {
    display: inline-block;
    margin-left: 4px;
    font-size: 13px;
  }
}
</style>
