import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import SubHeadline from '@/components/molecules/SubHeadline.vue';

storiesOf('molecules/SubHeadline', module)
  .add('plane', () => ({
    components: { SubHeadline },
    data() {
      return { text: "I'm Takahiro Yoshioka" }
    },
    template: '<sub-headline :text="text" />'
  }))
  ;