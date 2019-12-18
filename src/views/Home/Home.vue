<template>
  <div class="home">
    <div
      :key="film.id"
      class="films"
      v-for="film in films"
    >
      <film :film="film" />
    </div>
  </div>
</template>

<script>
import Home from './Home';

export default Home;
</script>

<style lang="scss" scoped>
  @import 'Home';
</style>
