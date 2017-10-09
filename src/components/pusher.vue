<template>
  <div class="ui bottom attached segment pushable">
    <div class="ui inverted left inline vertical sidebar menu">
      <router-link class="item" to="/movie/theater">最近热映</router-link>
      <router-link class="item" to="/movie/comingsoon">即将上映</router-link>
      <a class="item" @click="show()">关于</a>
      <About></About>
    </div>
  </div>
</template>
