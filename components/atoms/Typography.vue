<template>
  <component :class="classNames" :is="variant">{{ text }}</component>
</template>
<script lang="ts">
import { Component, Prop, Mixins } from 'vue-property-decorator';

import ClassName from '@/components/atoms/ClassName';

@Component
export default class Typography extends Mixins(ClassName) {
  @Prop({ type: String, required: true }) readonly variant;
  @Prop({ type: String, required: true }) readonly text;
}
</script>
<style lang="scss" scoped>
  h1 {
    font-size: 40px;
    font-weight: 600;
  }
  h2 { font-size: 28px; }
  h3 { font-size: 22px; }
  h4 { font-size: 18px; }
  h5 { font-size: 14px; }
  h6 { font-size: 10px; }
  h1, h2, h3, h4, h5, h6 {
    line-height: 140%;
  }
  p {
    font-size: 15px;
    line-height: 160%;
  }
  span {
    font-size: 15px;
  }
</style>