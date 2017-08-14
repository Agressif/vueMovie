<template>
<div class="extra">
  <div v-if="rating>0" class="ui rating">
    <i v-for="n in getStar.star" class="star icon"></i>
    <i v-for="n in getStar.half" class="icon star half empty"></i>
    <i v-for="n in getStar.empty" class="empty star icon"></i>
  </div>
  <div v-else class="content">暂无评分</div>
</div>
</template>

<script>
  export default {
    props: ['rating'],
    computed: {
      getStar() {
        const star = Math.floor(this.rating / 2);
        const half = Math.ceil(this.rating / 2) - star;
        const empty = 5 - Math.ceil(this.rating / 2);
        return {
          star,
          half,
          empty,
        };
      },
    },
  };
</script>

<style scoped>
  .ui.rating .icon {
    color: rgba(0,0,0,.87) !important;
  }
</style>
