<template>
  <div class="home">
    <div class=filters>
      <button-toggle
        title="排序"
        v-model="model"
        :options="[
          {label: '發布時間', value: 'one'},
          {label: '觀看次數', value: 'two'},
          {label: '收藏次數', value: 'three'},
        ]"
      />
      <button-toggle
        title="長度"
        v-model="model2"
        :options="[
          {label: '不限', value: 'a'},
          {label: '4分鐘以下', value: 'b'},
          {label: '5 - 10分鐘', value: 'c'},
          {label: '超過10分鐘', value: 'd'},
        ]"
      />
    </div>
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
