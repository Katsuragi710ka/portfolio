import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import PercentageProgress from '@/components/molecules/PercentageProgress.vue';

storiesOf('molecules/PercentageProgress', module)
  .add('0%', () => ({
    components: { PercentageProgress },
    data() {
      return { name: 'Skill', percentage: 0 }
    },
    template: '<percentage-progress :name="name" :percentage="percentage" />'
  }))
  .add('25%', () => ({
    components: { PercentageProgress },
    data() {
      return { name: 'Skill', percentage: 25 }
    },
    template: '<percentage-progress :name="name" :percentage="percentage" />'
  }))
  .add('50%', () => ({
    components: { PercentageProgress },
    data() {
      return { name: 'Skill', percentage: 50 }
    },
    template: '<percentage-progress :name="name" :percentage="percentage" />'
  }))
  .add('100%', () => ({
    components: { PercentageProgress },
    data() {
      return { name: 'Skill', percentage: 100 }
    },
    template: '<percentage-progress :name="name" :percentage="percentage" />'
  }))
  ;