<template>
  <div class="ui link stackable four cards container">
    <div class="ui card" :key="subject.id" v-for="subject in subjects">
      <a class="image" :href="'/movie/detail/' + subject.id">
        <img :src="subject.images.large"></img>
      </a>
      <div v-if="subject.rating.average > 0" class="content">
        {{ subject.title }} ({{ subject.rating.average }})
      </div>
      <div v-else class="content">
        {{ subject.title }}
      </div>
      <div class="extra">
        <div v-if="subject.rating.average>0" class="ui rating" :data-rating="Math.ceil(subject.rating.average/2)" data-max-rating="5"></div>
        <div v-else class="content">暂无评分</div>
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
        subjects: [],
        errorMsg: '',
      };
    },
    mounted() {
      const api = '/api/movie/in_theaters';
      axios.get(api).then((response) => {
        this.subjects = response.data.subjects;
      }).catch(() => {
        this.errorMsg = 'Movie does not exist!';
        this.data = [];
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
