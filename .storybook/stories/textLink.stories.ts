import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import TextLink from '@/components/atoms/TextLink.vue';

storiesOf('atoms/TextLink', module)
  .add('plane', () => ({
    components: { TextLink },
    data() {
      return { text: 'So what can you do?', path: "/" }
    },
    template: '<text-link :text="text" :path="path" />'
  }))
;