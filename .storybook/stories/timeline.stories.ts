import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import Timeline from '@/components/organisms/Timeline.vue';

storiesOf('organisms/Timeline', module)
  .add('plane', () => ({
    components: { Timeline },
    template: '<timeline />'
  }))
;