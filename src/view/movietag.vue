<template>

<div id="main">
  <div class="ui inverted segment">
    <div class="ui large inverted stackable secondary menu">
      <a class="active item" data-tab="first">最近热映</a>
      <a class="item" data-tab="second">即将上映</a>
      <a class="item" data-tab="third" @click="show()">关于</a>
      <moviesearch class="right item"></moviesearch>
      <About></About>
    </div>
  </div>
  <div class="ui active tab segment" data-tab="first">
      <movietheater></movietheater>
  </div>
  <div class="ui tab segment" data-tab="second">
      <moviesoon></moviesoon>
  </div>
</div>

</template>

<script>
  import $ from 'jquery';
  import About from '@/view/about';
  import movietheater from '@/view/movieTheater';
  import moviesoon from '@/view/moviesoon';
  import moviesearch from '@/view/moviesearch';

  export default {
    methods: {
      show() {
        $('.ui.modal').modal('show');
      },
    },
    mounted() {
      $('.ui .item').tab();
      const map = {};
      window.onhashchange = () => {
        document.body.scrollTop = 0;
      };
      window.onscroll = () => {
        if (document.body.scrollTop) {
          map[location.hash] = document.body.scrollTop;
        } else {
          let timer = null;
          timer = setInterval(() => {
            if (document.body.scrollTop === map[location.hash]) {
              clearInterval(timer);
            } else {
              document.body.scrollTop = map[location.hash];
            }
          }, 20);
        }
      };
    },
    components: { About, movietheater, moviesoon, moviesearch },
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
