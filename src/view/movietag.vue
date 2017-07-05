<template>

<div id="main">
  <div class="ui inverted segment">
    <div class="ui inverted stackable compact pointing secondary menu">
      <a class="active item" data-tab="first">最近热映</a>
      <a class="item" data-tab="second">即将上映</a>
      <a class="item" data-tab="third" @click="show()">关于</a>
      <moviesearch></moviesearch>
      <About></About>
    </div>
  </div>
  <div class="ui active tab segment" data-tab="first">
    <movietheater></movietheater>
  </div>
  <div class="ui tab segment" data-tab="second">
    <moviesoon></moviesoon>
  </div>
  <copyright></copyright>
</div>

</template>

<script>
  import $ from 'jquery';
  import About from '@/view/about';
  import movietheater from '@/view/movieTheater';
  import moviesoon from '@/view/moviesoon';
  import moviesearch from '@/view/moviesearch';
  import copyright from '@/view/copyright';

  export default {
    data() {
      return {
        content: '',
      };
    },
    methods: {
      show() {
        $('.ui.modal').modal('show');
      },
    },
    mounted() {
      $('.ui .item').tab();
    },
    components: { About, movietheater, moviesoon, moviesearch, copyright },
  };
</script>

<style scoped>
  .ui.segment.inverted {
    font-size: 1.2em;
    border-radius: 0;
    padding: 10px;
  }
  .ui.segment.active {
    border: 0;
  }
</style>
