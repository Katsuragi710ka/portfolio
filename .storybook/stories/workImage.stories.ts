import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import WorkImage from '@/components/atoms/WorkImage.vue';

storiesOf('atoms/WorkImage', module)
  .add('plane', () => ({
    components: { WorkImage },
    data() {
      return { src: require('@/assets/images/works/setlify/desktop1.jpg'), alt: 'story-image' }
    },
    template: '<work-image :src="src" :alt="alt" />'
  }))
  ;