<template>
  <div class="ui fluid search">
    <div class="ui right icon input">
    <input class="prompt" type="text" placeholder="Search Movie name">
    <i class="search icon"></i>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';

export default {
  mounted() {
    $('.ui.search').search({
      apiSettings: {
        url: '/api/movie/search?q={query}',
        minCharacters: 1,
        onResponse(movieResponse) {
          const response = {
            results: [],
          };
          $.each(movieResponse.subjects, (index, item) => {
            response.results.push({
              title: item.title,
              url: `/movie/detail/${item.id}`,
            });
          });
          return response;
        },
      },
      fields: {
        results: 'results',
        title: 'title',
        url: 'url',
      },
    });
  },
};
</script>

<style scoped>
  .ui.search .prompt {
    border-radius: 5px;
  }
</style>
