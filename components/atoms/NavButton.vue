<template>
  <nuxt-link class="nav-button" :class="{ ...classNames, active: isSamePath } " :to="to">
    {{ text }}
  </nuxt-link>
</template>
<script lang="ts">
import Vue from 'vue';
import { Component, Prop, Mixins } from 'vue-property-decorator';

import ClassName from '@/components/atoms/ClassName';

@Component
export default class NavButton extends Mixins(ClassName) {
  @Prop({ type: String, required: true }) readonly to;
  @Prop({ type: String, required: true }) readonly text;

  get isSamePath() {
    return this.$route.path === this.to;
  }
}
</script>
<style lang="scss" scoped>

.nav-button {
  font-size: 18px;
  font-weight: bold;
  color: #00ff9f;
  justify-content: center;
  display: flex;
  align-items: center;
  width: 150px;
  height: 48px;
  background-color: #020028;
  text-decoration: none;

  &:hover {
    cursor: pointer;
    background-color: #00ff9f;
    color: #020028;
    transition: .3s;
  }
}
.active {
  background-color: #00ff9f;
  color: #020028;

  &:hover {
    cursor: default;
  }
}
</style>