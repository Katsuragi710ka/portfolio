<template>
  <div class="paragraph" :class="classNames">
    <typography class="typography" variant="p" :text="text" />
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
export default class Paragraph extends Mixins(ClassName) {
  @Prop({ type: String, required: true }) readonly text;
}
</script>
<style lang="scss" scoped>
  .paragraph {
    .typography {
      color: rgba(213, 213, 213, 1);
    }
    margin: 18px 0;
  }
</style>