<template>
  <div class="film" ref="film">
    <card>
      <div class="content__top">
        <img
          :alt="`film thumbnail-${film.id}`"
          :src="film.thumbnail"
          class="thumbnail"
        />
        <span class="duration">
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
      </div>

      <template #tags>
        <tag
          :key="caption"
          :label="caption | Caption"
          v-for="caption in film.captions"
        />
        <tag
          :label="film.level | Level"
          color="green"
        />
      </template>
    </card>
  </div>
</template>

<script>
import Film from './Film';

export default Film;
</script>

<style lang="scss" scoped>
  @import 'Film';
</style>
