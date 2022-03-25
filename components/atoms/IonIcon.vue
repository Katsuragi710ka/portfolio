<template>
  <i
    class="ion-icon icon"
    :class="[classNames, iconName]"
    :style="fontSize"
  />
</template>
<script lang="ts">
import Vue from 'vue';
import { Component, Prop, Mixins } from 'vue-property-decorator';

import ClassName from '@/components/atoms/ClassName';

@Component
export default class IonIcon extends Mixins(ClassName) {
  @Prop({ type: String, required: true }) readonly name;
  @Prop({ type: Number, required: false, default: 18 }) readonly size;

  get iconName(): string {
    return `ion-${this.name}`;
  }

  get fontSize(): object {
    return {
      fontSize: `${this.size}px`
    };
  }
}
</script>
<style lang="scss" scoped>
.ion-icon {
  font-size: 24px;
}
</style>