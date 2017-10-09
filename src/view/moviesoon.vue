<template>
  <div class="ui link stackable four cards container">
    <loading v-if="loading"></loading>
    <div class="ui card" :key="subject.id" v-for="subject in subjects">
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
    name: 'moviesoon',
    data() {
      return {
        subjects: [],
        loading: true,
        location: '',
      };
    },
    created() {
      this.getMovieComing();
    },
    mounted() {
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
    methods: {
      getMovieComing() {
        const url = 'movie/coming_soon';
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
  .ui.cards {
    margin: 0;
  }
</style>
