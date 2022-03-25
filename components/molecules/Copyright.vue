<template>
  <div class="copyright" :class="classNames">
    <typography class="typography name" variant="h6" text="Takahiro Yoshioka" />
    <typography class="typography" variant="h6" :text="issueYears" />
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
  @Prop({ type: Number, required: true }) readonly from;
  @Prop({ type: Number, required: true }) readonly to;

  get issueYears(): string {
    if(this.from !== this.to){
      return `©${this.from} ~ ${this.to}`;
    }else{
      return `©${this.from}`;
    }
  }
}
</script>
<style lang="scss" scoped>
  .copyright {
    .typography {
      font-weight: bold;
      color: rgba(19, 62, 124, 1);
    }

    .name {
      margin-bottom: 12px;
    }
  }
</style>