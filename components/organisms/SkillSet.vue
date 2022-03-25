<template>
  <div class="skill-set" :class="classNames">
    <div class="skill-header" :style="colorStyle">
      <ion-icon className="header-text" :name="category.icon" :size="48" />
      <typography className="typography header-text" variant="h3" :text="category.name" />
    </div>
    <percentage-progress
      v-for="(skill, idx) in skills"
      :key="idx"
      className="percentage-progress"
      :name="skill.name"
      :percentage="skill.percentage"
    />
  </div>
</template>
<script lang="ts">
import { Component, Mixins, Prop } from 'vue-property-decorator';

import ClassName from '@/components/atoms/ClassName';
import PercentageProgress from '@/components/molecules/PercentageProgress.vue';
import IonIcon from '@/components/atoms/IonIcon.vue';
import Typography from '@/components/atoms/Typography.vue';

@Component({
  components: {
    PercentageProgress,
    // TODO: create a molecule that consists of IonIcon and Typography
    IonIcon,
    Typography
  }
})
export default class SkillSet extends Mixins(ClassName) {
  @Prop({ type: Object, required: true }) readonly category;
  @Prop({ type: Array, required: true }) readonly skills;

  get colorStyle(): object {
    return {
      color: this.category.color
    };
  }
}
</script>
<style lang="scss" scoped>
  .skill-set {
    vertical-align: top;
    .skill-header {
      position: relative;
      margin: 0 6px 16px 6px;
      .header-text {
        display: inline-block;
      }
      .typography {
        position: absolute;
        top: 12px;
        margin-left: 24px;
        align-items: center;
        font-style: italic;
      }
    }
    .percentage-progress {
      margin-top: 16px;
    }
  }
</style>