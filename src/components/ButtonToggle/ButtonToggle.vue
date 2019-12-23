<template>
  <div class="button-toggle" v-bind="buttonToggleProps">
    <span
      class="button-toggle__title"
      v-if="title"
      v-bind="titleProps"
    >
      {{ title }}
    </span>
    <div class="button-toggle__toggles">
      <button
        @click="setValue(option.value, option)"
        :class="getOptionClasses(index)"
        :key="index"
        :value="option.value"
        class="button-toggle__option"
        v-for="(option, index) in options"
        v-bind="option.buttonProps"
      >
        {{ option.label }}
      </button>
    </div>
  </div>
</template>

<script>
import ButtonToggle from './ButtonToggle';

export default ButtonToggle;
</script>

<style lang="scss" scoped>
  @import 'ButtonToggle';
</style>
