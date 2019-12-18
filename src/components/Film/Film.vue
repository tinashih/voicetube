<template>
  <div class="film">
    <div class="content__top">
      <img
        :alt="`film thumbnail-${film.id}`"
        :src="film.thumbnail"
        class="thumbnail"
      />
      <span
        class="duration"
      >
        {{ film.duration | FormatTime }}
      </span>
    </div>
    <div class="content__bottom">
      <span
        :title="film.title"
        class="limit-lines title"
      >
        {{ film.title }}
      </span>
      <div class="audience">
        <i class="icon material-icons">headset</i>
        <span class="views">
          {{ film.views }}
        </span>
      </div>
      <div class="tags">
        <span
          :key="caption"
          class="caption tag"
          v-for="caption in film.captions"
        >
          {{ caption | Caption }}
        </span>
        <span class="level tag">
          {{ film.level | Level }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import Film from './Film';

export default Film;
</script>

<style lang="scss" scoped>
  @import 'Film';
</style>
