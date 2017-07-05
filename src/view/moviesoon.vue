<template>
  <div class="ui link stackable four cards container">
    <div class="card" v-for="subject in subjects" :key="subject.id">
      <a class="image" :href="'/movie/detail/' + subject.id ">
        <img :src="subject.images.large"></img>
      </a>
      <div v-if="subject.rating.average > 0" class="content">
        {{ subject.title }} ({{ subject.rating.average }})
      </div>
      <div v-else class="content">
        {{ subject.title }}
      </div>
      <div class="extra">
        <div v-if="subject.rating.average > 0" class="ui rating" data-max-rating="5" :data-rating="Math.ceil(subject.rating.average/2)"></div>
        <div class="content" v-else>暂无评分</div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import $ from 'jquery';

  export default {
    data() {
      return {
        star: [],
        subjects: [],
        errorMsg: '',
      };
    },
    mounted() {
      const api = '/api/movie/coming_soon';
      axios.get(api).then((response) => {
        this.subjects = response.data.subjects;
      }).catch((error) => {
        this.errorMsg = 'Movie does not exist!';
        this.data = [];
        console.log(error);
      });
    },
    updated() {
      $('.ui.rating').rating('disable');
    },
  };
</script>

<style scoped>
  img {
    min-height: 400px;
  }
</style>
