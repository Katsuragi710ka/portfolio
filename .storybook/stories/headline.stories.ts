import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import Headline from '@/components/molecules/Headline.vue';

storiesOf('molecules/Headline', module)
  .add('plane', () => ({
    components: { Headline },
    data() {
      return { text: 'Welcome' }
    },
    template: '<headline :text="text" />'
  }))
;