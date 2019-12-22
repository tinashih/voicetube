<template>
  <span
    :class="classes"
    class="tag"
    v-bind="tagProps"
  >
    {{ label }}
  </span>
</template>

<script>
import Tag from './Tag';

export default Tag;
</script>

<style lang="scss" scoped>
  @import 'Tag';
  @import '../../styles/custom-colors';
</style>
