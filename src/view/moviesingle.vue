<template>
<div class="ui container">
  <loading v-if="loading"></loading>
  <div v-else class="ui items">
    <div class="item">
        <div class="ui secondary pointing menu">
          <a class="active item" @click="goBack()"><i class="angle left icon"></i>返回</a>
        </div>
    </div>
    <div class="item">
      <div class="ui medium image" style="max-height:450px;margin:15px"><img :src="images.large"></div>
      <div class="content">
        <div class="header">
          {{movie.title}} / {{movie.original_title}} ({{movie.year}})
        </div>
        <p>导演: {{directors.name}}</p>
        <p>类型: {{type}}</p>
        <p>制片国家/地区: {{countries}}</p>
        <p>又名: {{aka}}</p>
        <p>评分: {{star}}</p>
        <p>想看人数: {{movie.wish_count}}</p>
        <p>看过人数: {{movie.collect_count}}</p>
        <p>简介: {{movie.summary}}</p>
      </div>
    </div>
    <div class="ui header" style="text-align:left">主演</div>
    <div class="item">
    <div class="ui doubling cards">
      <div class="ui card"  v-for="cast in casts" :key="cast.id" style="max-width:170px">
      <div class="ui small image" style="margin:10px">
        <img :src="cast.avatars.large" style="height:215px">
      </div>
      <div class="extra"><p>{{cast.name}}</p></div>
      </div>
    </div>
    </div>
  </div>
</div>
</template>

<script>
  import getData from '@/common/getData';
  import loading from '@/components/loading';

  export default {
    data() {
      return {
        id: this.$route.params.id,
        movie: '',
        images: '',
        directors: '',
        casts: '',
        aka: '',
        type: '',
        countries: '',
        star: '',
        loading: true,
      };
    },
    created() {
      this.setPage();
    },
    methods: {
      setPage() {
        const url = `movie/subject/${this.id}`;
        getData(url).then((res) => {
          this.movie = res;
          this.images = res.images;
          this.directors = res.directors[0];
          this.casts = res.casts;
          this.aka = res.aka.join(' / ');
          this.countries = res.countries.join(' / ');
          this.star = res.rating.average;
          this.type = res.genres.join(' / ');
          this.loading = false;
        });
      },
      goBack() {
        this.$router.go(-1);
      },
    },
    components: { loading },
  };
</script>

<style scoped>
  .ui.container {
    line-height: 10px;
  }
  .content p {
    font-size: 1.2em;
    text-align: left;
  }
  .ui.items .item .content .header {
    font-size: 1.6em;
    margin-top: 5px;
    line-height: 80px;
  }
  .ui.segment.inverted {
    font-size: 1.2em;
    border-radius: 0;
    padding: 10px;
    width: 100%;
  }
</style>
