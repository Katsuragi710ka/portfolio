<template>
  <label
    class="form-label"
    :class="classNames"
    :for="field"
  >{{ field }}</label>
</template>
<script lang="ts">
import { Component, Prop, Mixins } from 'vue-property-decorator';

import ClassName from '@/components/atoms/ClassName';

@Component
export default class FormLabel extends Mixins(ClassName) {
  @Prop({ type: String, required: true }) readonly field;
}
</script>
<style lang="scss" scoped>
  .form-label {
    font-size: 17px;
    color: #00FF9F;
  }
  .error {
    color: #d40e0d;
  }
</style>