<template>
  <div class="headline" :class="classNames">
    <typography class="typography" variant="h1" :text="text" />
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
export default class Headline extends Mixins(ClassName) {
  @Prop({ type: String, required: true }) readonly text;
}
</script>
<style lang="scss" scoped>
  .headline {
    margin-bottom: 40px;
    .typography {
      color: #Ea00d9;
    }
  }
</style>