<template>
  <div class="sub-headline" :class="classNames">
    <typography class="typography" variant="h2" :text="text" />
  </div>
</template>
<script lang="ts">
import { Component, Mixins, Prop } from 'vue-property-decorator';

import ClassName from '@/components/atoms/ClassName';
import Typography from '@/components/atoms/Typography.vue';

@Component({
  components: {
    Typography
  }
})
export default class SubHeadline extends Mixins(ClassName) {
  @Prop({ type: String, required: true }) readonly text;
}
</script>
<style lang="scss" scoped>
  .sub-headline {
    .typography {
      color: #Ea00d9;
      font-style: italic;
    }
  }
</style>