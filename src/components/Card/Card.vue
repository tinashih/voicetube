<template>
  <div class="card">
    <slot></slot>
    <div class="tags">
      <slot name="tags"></slot>
    </div>
  </div>
</template>

<script>
import Card from './Card';

export default Card;
</script>

<style lang="scss" scoped>
  @import 'Card';
</style>
