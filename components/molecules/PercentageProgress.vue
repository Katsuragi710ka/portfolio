<template>
  <div class="percentage-progress" :class="classNames">
    <div class="header">
      <typography variant="span" :text="name" class="name" />
      <typography variant="span" :text="percentageText" class="percentage" />
    </div>
    <div class="linear-gauge">
      <div class="determine-buffer" :style="bufferStyle" />
    </div>
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
export default class PercentageProgress extends Mixins(ClassName) {
  @Prop({ type: String, required: true }) readonly name;
  @Prop({ type: Number, required: true }) readonly percentage;

  get percentageText(): string {
    return `${this.percentage}%`;
  }

  get bufferStyle(): object {
    return {
      left: `calc(-100% + ${this.percentage}%)`
    };
  }
}
</script>
<style lang="scss" scoped>
  .percentage-progress {

    .header {
      padding: 0 5px; 
      margin-bottom: 6px;
      overflow: hidden;
      * {
        color: rgba(246, 236, 94, 1);
        font-size: 16px;
      }
      .name {
        float: left;
        font-weight: bold;
      }

      .percentage {
        float: right;
      }
    }
    
    .linear-gauge {
      position: relative;
      width: 100%;
      height: 14px;
      background-color: rgba(3, 174, 243, 0.25);
      overflow: hidden;

      .determine-buffer {
        position: absolute;  
        width: 100%;
        height: 100%;
        background-color: rgba(3, 174, 243, 1);
        top: 0;
      }
    }
  }
</style>