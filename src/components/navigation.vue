<template>
<div class="ui inverted segment">
  <div class="ui large inverted stackable secondary menu">
    <router-link ref="recent" class="active item" to="/movie/theater">最近热映</router-link>
    <router-link ref="soon" class="item" to="/movie/comingsoon" @click.native="toggle()">即将上映</router-link>
    <a class="item" @click="show()">关于</a>
    <search class="right item"></search>
    <About></About>
  </div>
</div>
</template>

<script>
  import $ from 'jquery';
  import About from '@/components/about';
  import search from '@/components/search';

  export default {
    methods: {
      show() {
        $('.ui.modal').modal('show');
      },
      toggle() {
        this.$refs.soon.$el.className = 'active item';
        this.$refs.recent.$el.className = 'item';
      },
    },
    components: { About, search },
  };
</script>

<style scoped>
  .ui.segment {
    padding: 8px;
    border-radius: 0;
  }
</style>
