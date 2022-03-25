<template>
  <img :src="src" :alt="alt" class="work-image" :class="classNames" />
</template>
<script lang="ts">
import { Component, Mixins, Prop } from 'vue-property-decorator';

import ClassName from '@/components/atoms/ClassName';

@Component
export default class WorkImage extends Mixins(ClassName) {
  @Prop({ type: String, required: true }) readonly src;
  @Prop({ type: String, required: true }) readonly alt;
}
</script>
<style lang="scss" scoped>
  .work-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>