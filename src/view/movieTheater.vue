<template>
  <div id="theater" class="ui link stackable four cards container">
    <loading v-if="loading"></loading>
    <div v-else class="ui card" :key="subject.id" v-for="subject in subjects">
      <router-link class="image" :to="{ name:'moviesingle', params: {id: subject.id}}">
        <img v-lazy="subject.images.large"></img>
      </router-link>
      <div v-if="subject.rating.average > 0" class="content">
        {{ subject.title }} ({{ subject.rating.average }})
      </div>
      <div v-else class="content">
        {{ subject.title }}
      </div>
      <star :rating="subject.rating.average"></star>
    </div>
  </div>
</template>

<script>
  import getData from '@/common/getData';
  import star from '@/components/star';
  import loading from '@/components/loading';

  export default {
    data() {
      return {
        subjects: [],
        loading: true,
        position: '',
      };
    },
    created() {
      this.getMovieTheater();
    },
    methods: {
      getMovieTheater() {
        const url = 'movie/in_theaters';
        getData(url).then((res) => {
          this.subjects = res.subjects;
          this.loading = false;
        });
      },
    },
    components: { star, loading },
  };
</script>

<style scoped>
  img {
    min-height: 400px;
  }
</style>
