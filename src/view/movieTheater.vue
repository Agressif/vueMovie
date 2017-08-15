<template>
  <div class="ui link stackable four cards container">
    <loading v-if="subjects.length==0"></loading>
    <div v-else class="ui card" :key="subject.id" v-for="subject in subjects">
      <a class="image" :href="'/movie/detail/' + subject.id">
        <img v-lazy="subject.images.large"></img>
      </a>
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
  import axios from 'axios';
  import star from '@/components/star';
  import loading from '@/components/loading';

  export default {
    data() {
      return {
        subjects: [],
        errorMsg: '',
      };
    },
    methods: {
      getData(fn) {
        const script = document.createElement('script');
        script.src = `http://api.github.com/users/Agressif?callback=${fn}`;
        document.body.append(script);
      },
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
    components: { star, loading },
  };
</script>

<style scoped>
  img {
    min-height: 400px;
  }
</style>
