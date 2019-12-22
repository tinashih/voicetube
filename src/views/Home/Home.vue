<template>
  <div class="home">
    <div
      class=filters
      data-qa="Content-Filters"
    >
      <button-toggle
        :buttonToggleProps="getSortButtonToggleProps"
        :options="getSortOptions"
        :titleProps="getSortTitleProps"
        title="排序"
        v-model="sort"
      />
      <button-toggle
        :buttonToggleProps="getFilterButtonToggleProps"
        :options="getFilterLengthOptions"
        :titleProps="getFilterTitleProps"
        title="長度"
        v-model="filterLength"
      />
    </div>
    <div
      class="divider"
      data-qa="Content-Divider"
    />
    <div
      class="films"
      data-qa="Content-Films"
      v-if="films && films.length"
    >
      <film
        :key="film.id"
        :film="film"
        v-for="film in films"
      />
    </div>
    <div
      class="films"
      data-qa="Content-Films"
      v-else
    >
      <p
        class="no-data"
        data-qa="Content-Films-NoDataFound"
      >
        沒有篩選結果
      </p>
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
