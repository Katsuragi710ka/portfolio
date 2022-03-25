import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import Carousel from '@/components/organisms/Carousel.vue';

storiesOf('organisms/Carousel', module)
  .add('plane', () => ({
    components: { Carousel },
    data(){
      return {
        screenShots: [
          { src: require('@/assets/images/works/nikocale/desktop1.jpg'), alt: 'nikocale-1' },
          { src: require('@/assets/images/works/nikocale/desktop2.jpg'), alt: 'nikocale-2' },
          { src: require('@/assets/images/works/nikocale/desktop3.jpg'), alt: 'nikocale-3' },
          { src: require('@/assets/images/works/nikocale/desktop4.jpg'), alt: 'nikocale-4' },
          { src: require('@/assets/images/works/nikocale/mobile1.jpg'), alt: 'nikocale-5' },
          { src: require('@/assets/images/works/nikocale/mobile2.jpg'), alt: 'nikocale-6' },
          { src: require('@/assets/images/works/nikocale/mobile3.jpg'), alt: 'nikocale-7' },
          { src: require('@/assets/images/works/nikocale/mobile4.jpg'), alt: 'nikocale-8' }
        ]
      }
    },
    template: '<carousel :screenShots="screenShots" />'
  }))
;