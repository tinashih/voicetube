<template>
  <div class="home">
    <div class="films">
      <film
        :key="film.id"
        :film="film"
        v-for="film in films"
      />
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
