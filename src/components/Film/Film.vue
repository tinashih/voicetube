<template>
  <div class="film" ref="film">
    <card>
      <div class="content__top">
        <img
          :alt="`film thumbnail-${film.id}`"
          :data-qa="`Content-Film-Thumbnail-${film.id}`"
          :src="film.thumbnail"
          class="thumbnail"
        />
        <span
          class="duration"
          :data-qa="`Content-Film-Duration-${film.id}`"
        >
          {{ film.duration | FormatTime }}
        </span>
      </div>
      <div class="content__bottom">
        <span
          :data-qa="`Content-Film-Title-${film.id}`"
          :title="film.title"
          class="limit-lines title"
        >
          {{ film.title }}
        </span>
        <div
          :data-qa="`Content-Film-Audience-${film.id}`"
          class="audience"
        >
          <i class="icon material-icons">headset</i>
          <span
            :data-qa="`Content-Film-Views-${film.id}`"
            class="views"
          >
            {{ film.views }}
          </span>
        </div>
      </div>

      <template #tags>
        <tag
          :key="caption"
          :label="caption | Caption"
          :tagProps="getCaptionTagProps(caption)"
          v-for="caption in film.captions"
        />
        <tag
          :label="film.level | Level"
          :tagProps="getLevelTagProps"
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
