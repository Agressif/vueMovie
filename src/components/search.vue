<template>
  <div class="ui fluid search">
    <div class="ui right icon input">
      <input v-model="searchContent" class="prompt" type="text" placeholder="请输入电影名称..." autofocus="autofocus">
      <i class="search icon"></i>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
import getData from '@/common/getData';

export default {
  data() {
    return {
      searchContent: '',
      data: [],
    };
  },
  watch: {
    searchContent: 'getResult',
  },
  methods: {
    getResult() {
      const url = `movie/search?q=${this.searchContent}`;
      getData(url).then((res) => {
        res.subjects.forEach((ele) => {
          this.data.push({ title: ele.title, url: `#/movie/detail/${ele.id}` });
        });
        if (this.searchContent.length === 0) {
          this.data = [];
        }
      });
    },
  },
  updated() {
    $('.ui.search').search({
      source: this.data,
      searchFields: [
        'title',
        'url',
      ],
      minCharacters: 1,
      searchOnFocus: true,
      selectFirstResult: true,
      searchFullText: true,
      hideDelay: 500,
      searchDelay: 100,
    });
  },
};
</script>

<style scoped>
  .ui.search .prompt {
    border-radius: 5px;
  }
</style>
