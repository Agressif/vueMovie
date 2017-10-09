<template>
  <div id="app">
  <navigation></navigation>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
import navigation from '@/components/navigation';

export default {
  components: { navigation },
};
</script>

<style scoped>
#app{
  text-align: center;
}
</style>
