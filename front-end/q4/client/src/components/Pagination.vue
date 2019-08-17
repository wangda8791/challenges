<template>
  <div
    v-if="lastPg > 1"
    class="pagination"
  >
    <a
      v-if="Math.floor((curPg-1)/5) * 5 + 1 > 5"
      href="javascript:;"
      @click="toPage(Math.floor((curPg-1)/5) * 5)"
    >...</a>
    <a
      v-for="i in pages"
      href="javascript:;"
      :class="{'selected':i==curPg}"
      :key="i"
      @click="toPage(i)"
    >{{ i }}</a>
    <a
      v-if="Math.floor((curPg-1)/5) * 5 + 5 < lastPg"
      href="javascript:;"
      @click="toPage(Math.floor((curPg-1)/5) * 5 + 6)"
    >...</a>
  </div>
</template>

<script>
  export default {
    props: {
      page: {
        type: Number,
        default: 1,
        required: false
      },
      total: {
        type: Number,
        required: true
      },
      pageSize: {
        type: Number,
        required: false,
        default: 3
      }
    },
    watch: {
      curPg: function (val, oldVal) {
        this.toPg = val;
      },
      page: function(val, oldVal) {
        this.curPg = val;
      }
    },
    data: function () {
      return {
        curPg: 1,
        toPg: 1
      }
    },
    computed: {
      lastPg() {
        return Math.ceil(this.total / this.pageSize);
      },
      pages: function() {
        var startPg = Math.floor((this.curPg - 1) / 5) * 5 + 1;
        var endPg = Math.min(this.lastPg, Math.floor((this.curPg - 1) / 5) * 5 + 5);
        var pageNums = [];
        for (var i=startPg; i<=endPg; i++) {
          pageNums.push(i);
        }
        return pageNums;
      }
    },
    methods: {
      toPage: function(pg) {
        if (pg < 1) pg = 1;
        if (pg > this.lastPg) pg = this.lastPg;
        this.curPg = pg;

        this.$emit('page-changed', parseInt(this.curPg));
      }
    }
  }
</script>

<style lang="scss" scoped>
.pagination {
  margin-top: 10px;
  a {
    display: inline-block;
    width: 24px;
    height: 24px;
    line-height: 24px;
    border: 1px solid $link-color;
    border-radius: 13px;
    margin-right: 4px;
    padding: 0px;

    text-align: center;
    font-size: 1.2em;
  }
  a:last-child {
    margin-right: 0px;
  }
  a:hover, a.selected {
    background-color: $link-color;
    color: white;
  }
}
</style>
