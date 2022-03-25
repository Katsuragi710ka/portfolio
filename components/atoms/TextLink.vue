<template>
  <nuxt-link v-if="!external" class="text-link" :class="classNames" :to="path">{{ text }} -></nuxt-link>
  <a v-else class="text-link" :class="classNames" :href="path" target="_blank">{{ text }} -></a>
</template>
<script lang="ts">
import { Component, Mixins, Prop } from 'vue-property-decorator';

import ClassName from '@/components/atoms/ClassName';

@Component
export default class TextLink extends Mixins(ClassName) {
  @Prop({ type: String, required: true }) readonly text;
  @Prop({ type: String, required: true }) readonly path;
  @Prop({ type: Boolean, required: false, default: false }) readonly external;
}
</script>
<style lang="scss" scoped>
  .text-link {
    text-decoration: none;
    font-size: 15px;
    color: inherit;
  }
</style>