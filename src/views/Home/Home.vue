<template>
  <div class="home">
    <div class=filters>
      <button-toggle
        title="排序"
        v-model="sort"
        :options="getSortOptions"
      />
      <button-toggle
        title="長度"
        v-model="filterLength"
        :options="getFilterLengthOptions"
      />
    </div>
    <div class="divider" />
    <div class="films" v-if="films && films.length">
      <film
        :key="film.id"
        :film="film"
        v-for="film in films"
      />
    </div>
    <div class="films" v-else>
      <p class="no-data">沒有篩選結果</p>
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
