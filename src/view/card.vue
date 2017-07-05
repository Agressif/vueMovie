<template>
<div class="ui right aligned search">
  <div class="ui left icon input">
    <input class="prompt" type="text" placeholder="Search GitHub">
    <i class="github icon"></i>
  </div>
  <div class="results"></div>
  
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
          console.log(response);
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
