<template>
  <div class="button-toggle">
    <span
      class="button-toggle__title"
      v-if="title"
    >
      {{ title }}
    </span>
    <button
      @click="setValue(option.value, option)"
      :class="getOptionClasses(index)"
      :key="index"
      :value="option.value"
      class="button-toggle__option"
      v-for="(option, index) in options"
    >
      {{ option.label }}
    </button>
  </div>
</template>

<script>
import ButtonToggle from './ButtonToggle';

export default ButtonToggle;
</script>

<style lang="scss" scoped>
  @import 'ButtonToggle';
</style>
