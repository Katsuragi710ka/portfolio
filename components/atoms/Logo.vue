<template>
  <img class="logo" :class="classNames" src="~assets/svgs/logo.svg" />
</template>
<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator';

import ClassName from '@/components/atoms/ClassName';

@Component
export default class Logo extends Mixins(ClassName) {
}
</script>
<style lang="scss" scoped>
  .logo {
  }
</style>